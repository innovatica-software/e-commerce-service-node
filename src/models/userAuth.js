const User = require("../schema/userSchema");

const createUser = async (user) => {
  const newUser = new User(user);
  const createdUser = await newUser.save();
  return createdUser;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email: email.toString() });
  return user;
};

const checkEmailExistAndVerified = async (email) => {
  const user = await User.findOne({
    email: email.toString(),
    isEmailVerified: true,
  });
  return user;
};

const updateUserStatus = async (email) => {
  const result = await User.updateOne(
    { email },
    { $set: { isEmailVerified: true } }
  ).exec();
  return result;
};
module.exports = {
  createUser,
  getUserByEmail,
  updateUserStatus,
  checkEmailExistAndVerified,
};
