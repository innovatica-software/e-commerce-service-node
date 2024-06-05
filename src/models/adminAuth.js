const User = require("../schema/userSchema");
const getAllUsers = async () => {
  const users = await User.find();
  return users;
};
const isAdminAndVerified = async (email) => {
  const user = await User.findOne({
    email: email.toString(),
    isEmailVerified: true,
    isAdmin:true
  });
  return user;
};
module.exports = {
  getAllUsers,
  isAdminAndVerified
};
