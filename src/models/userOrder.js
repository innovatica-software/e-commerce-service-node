const Order = require("../schema/orderSchema");

const createOrder = async (data) => {
  const newOrder = new Order(data);
  const createdOrder = await newOrder.save();
  return createdOrder;
};
const getOrderById = async (orderId) => {
  const order = await Order.findOne({ _id: orderId });
  return order;
};

module.exports = { createOrder, getOrderById };
