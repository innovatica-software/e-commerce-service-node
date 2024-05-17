const { default: mongoose } = require("mongoose");
const Order = require("../schema/orderSchema");

const createOrder = async (data) => {
  const newOrder = new Order(data);
  const createdOrder = await newOrder.save();
  return createdOrder;
};

const getOrders = async (userId) => {
  const Orders = await Order.find({ userId: userId })
    .populate({
      path: "orderItems",
      select: "_id name qty price",
    })
    .populate({
      path: "shippingAddress",
      select: "_id address city postalCode country",
    })
    // .populate({
    //   path: "userId",
    //   select: "_id username email name isAdmin",
    // })
    .select("-_id");
  return Orders;
};

module.exports = { createOrder, getOrders };
