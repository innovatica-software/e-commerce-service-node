const { jwtSecret } = require("../config/variables");
const { errorResponseHandler } = require("../helper/errorResponseHandler");
const UserModel = require("../models/userAuth");
const validate = require("../validator/validate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJWTToken = (user) => {
  const token = jwt.sign(user, jwtSecret, {
    expiresIn: "1d",
  });
  return token;
};

const userRegistration = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const passwordType = "required";
    validate(
      { email, name, password },
      {
        email: "required",
        name: "required",
        password: passwordType,
      }
    );
    const hashPassword = await bcrypt.hash(password, 9);
    const user = await UserModel.createUser({
      email,
      name,
      password: hashPassword,
    });
    const token = generateJWTToken({
      email,
      name,
      isAdmin: user.isAdmin,
      id: user._id,
    });
    const response = {
      token,
      email,
      name,
      username: email,
      isAdmin: user.isAdmin,
      id: user.id,
      _id: user._id,
    };
    res.success(response, "User Registration Successfull");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

module.exports = {
  userRegistration,
};
