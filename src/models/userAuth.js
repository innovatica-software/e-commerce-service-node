const User = require("../schema/userSchema");

const createUser = async (user) => {
  const newUser = new User(user);
  const createdUser = await newUser.save();
  return createdUser;
};

module.exports = {
  createUser,
};
