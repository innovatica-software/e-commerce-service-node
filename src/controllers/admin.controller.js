const { errorResponseHandler } = require("../helper/errorResponseHandler");
const Users = require("../models/adminAuth");
const {
  jwtSecret,
} = require("../config/variables");
const { statusCodes } = require("../helper/statusCodes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateJWTToken = (user) => {
  const token = jwt.sign(user, jwtSecret, {
    expiresIn: "1d",
  });
  return token;
};
const getUsers = async (req, res) => {
  try {
    const allUser = await Users.getAllUsers();
    res.success(allUser, "User List Fetch Successfully");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};
const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.isAdminAndVerified(email);
    if (!user) {
      throw Object.assign(new Error(), {
        status: statusCodes.NOT_FOUND,
        error: {
          code: 40402,
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
      isAdmin:user.isAdmin
    });
    const response = {
      token,
      email: email,
      name: user.name,
      id: user.id,
      isAdmin:user.isAdmin
    };

    res.success(response, "Admin Logged In Successful");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};
module.exports = { getUsers,adminLogin };
