const User = require("../schema/userSchema");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  const alluserList = res.json(users);
  return alluserList;
};
module.exports = {
  getAllUsers,
};
