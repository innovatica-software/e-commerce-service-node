const {
  jwtSecret,
  ENABLE_EMAIL_ADDRESS_VERIFICATION,
} = require("../config/variables");
const { sendVerificationMail } = require("../email_verification/verifyEmail");
const { errorResponseHandler } = require("../helper/errorResponseHandler");
const { statusCodes } = require("../helper/statusCodes");
const UserModel = require("../models/userAuth");
const validate = require("../validator/validate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validationType = "required";
const generateJWTToken = (user) => {
  const token = jwt.sign(user, jwtSecret, {
    expiresIn: "1d",
  });
  return token;
};

const shouldVerifyEmail = () => {
  return !(
    process.env.NODE_ENV === "test" ||
    ENABLE_EMAIL_ADDRESS_VERIFICATION.toLowerCase() !== "true"
  );
};

const userRegistration = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    validate(
      { email, name, password },
      {
        email: "required",
        name: "required",
        password: validationType,
      }
    );
    const hashPassword = await bcrypt.hash(password, 9);
    if (shouldVerifyEmail()) {
      await sendVerificationMail(email);
    }
    await UserModel.createUser({
      email,
      name,
      password: hashPassword,
    });

    res.success({}, "Please check your email for verification.");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.checkEmailExistAndVerified(email);
    if (!user) {
      throw Object.assign(new Error(), {
        status: statusCodes.NOT_FOUND,
        error: {
          code: 40401,
        },
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw Object.assign(new Error(), {
        status: statusCodes.UNAUTHORIZED,
        error: {
          code: 40125,
        },
      });
    }

    const token = generateJWTToken({
      email,
      userId: user._id,
    });
    const response = {
      token,
      email: email,
      name: user.name,
      id: user.id,
    };

    res.success(response, "User Logged In Successful");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

const emailVerification = async (req, res) => {
  try {
    const { verifyToken } = req.query;
    const verified = jwt.verify(verifyToken, jwtSecret);
    if (!verified) {
      return res.redirect("/api/email/verification-failure");
    }
    await UserModel.updateUserStatus(verified.email);
    return res.redirect("/api/email/verification-success");
  } catch (err) {
    return res.redirect("/api/email/verification-failure");
  }
};

module.exports = {
  userRegistration,
  userLogin,
  emailVerification,
};
