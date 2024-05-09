const mongoose = require("mongoose");
const { getCurrentDateTimeUTCPlus6 } = require("../helper/dateTimeHelpers");
const orderItemSchema = new mongoose.Schema({
  productId: { type: String, ref: "Product" },
  // orderId: { type: String, ref: "Order" },
  qty: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => getCurrentDateTimeUTCPlus6(),
  },
});
const OrderItem = mongoose.model("OrderItem", orderItemSchema);
module.exports = OrderItem;
