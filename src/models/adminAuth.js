const User = require("../schema/userSchema");

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};
module.exports = {
  getAllUsers,
};
