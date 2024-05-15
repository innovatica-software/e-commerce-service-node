const Order = require("../schema/orderSchema");

const createOrder = async (data) => {
  const newOrder = new Order(data);
  const createdOrder = await newOrder.save();
  return createdOrder;
};


module.exports = { createOrder };
