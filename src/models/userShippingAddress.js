const ShippingAddress = require("../schema/shippingAddressSchema");

const createShippingAddress = async (data) => {
  const newAddress = new ShippingAddress(data);
  const createdAddress = await newAddress.save();
  return createdAddress;
};

const addressExist = async (userId) => {
  const collectAddress = await ShippingAddress.exists({ userId });
  return collectAddress;
};
const getAddressById = async (shippingId) => {
  const address = await ShippingAddress.findOne({ _id: shippingId });
  return address;
};

module.exports = { createShippingAddress, addressExist, getAddressById };
