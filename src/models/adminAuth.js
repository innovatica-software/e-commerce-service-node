const UserList = require("../schema/userSchema");

const getAllUsers = async (req, res) => {
  const users = await UserList.find();
  const alluserList = res.json(users);
  return alluserList;
};
module.exports = {
  getAllUsers,
};
