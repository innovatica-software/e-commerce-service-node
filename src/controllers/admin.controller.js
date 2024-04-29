const Users = require("../models/adminAuth");
const getUsers = async (req, res) => {
  const allUser = await Users.getAllUsers();
  res.success(allUser, "User List Loaded Succesfully");
};
module.exports = { getUsers };
