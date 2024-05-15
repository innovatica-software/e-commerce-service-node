const OrderItem = require("../schema/orderItemSchema");
const addOrderItems = async (orderItems) => {
  const savedOrderItems = await OrderItem.insertMany(orderItems);
  const orderItemIds = savedOrderItems.map((item) => item._id);
  return orderItemIds;
};
module.exports = { addOrderItems };
