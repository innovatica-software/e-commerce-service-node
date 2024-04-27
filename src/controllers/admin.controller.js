const { errorResponseHandler } = require("../helper/errorResponseHandler");
const { statusCodes } = require("../helper/statusCodes");
const UserModel = require("../models/userAuth");
const bcrypt = require("bcrypt");

//AdminLogin
const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.getUserByEmail(email);
    if (!existingUser) {
      throw Object.assign(new Error(), {
        status: statusCodes.NOT_FOUND,
        error: {
          code: 40401,
        },
      });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      throw Object.assign(new Error(), {
        status: statusCodes.UNAUTHORIZED,
        error: {
          code: 40125,
        },
      });
    }
    const response = {
      username: email,
      isAdmin: "True",
    };
    res.success(response, "Admin Logged In Successfull");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

module.exports = {
  adminLogin,
};
