const { jwtSecret } = require("../config/variables");
const { errorResponseHandler } = require("../helper/errorResponseHandler");
const UserModel = require("../models/userAuth");
const validate = require("../validator/validate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validationType = "required";
const usersList = require("../schema/userSchema");
const generateJWTToken = (user) => {
  const token = jwt.sign(user, jwtSecret, {
    expiresIn: "1d",
  });
  return token;
};
//Registration
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
//Login
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await usersList.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User Not Registered" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Wrong Password" });
    }

    const token = generateJWTToken({
      email,
      isAdmin: existingUser.isAdmin,
      id: existingUser._id,
    });
    const response = {
      token,
      email: email,
      name: existingUser.name,
      username: email,
      isAdmin: existingUser.isAdmin,
      id: existingUser.id,
      _id: existingUser._id,
    };

    res.success(response, "User Logged In Successfull");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

module.exports = {
  userRegistration,
  userLogin,
};
