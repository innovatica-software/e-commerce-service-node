const { errorResponseHandler } = require("../helper/errorResponseHandler");
const Users = require("../models/adminAuth");

const getUsers = async (req, res) => {
  try {
    const allUser = await Users.getAllUsers();
    res.success(allUser, "User List Fetch Successfully");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

module.exports = { getUsers };
