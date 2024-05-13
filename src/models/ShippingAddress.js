const ShippingAddress = require("../schema/shippingAddressSchema");

const createShippingAddress = async (data) => {
  const newAddress = new ShippingAddress(data);
  const createdAddress = await newAddress.save();
  return createdAddress._id;
};

module.exports = { createShippingAddress };
