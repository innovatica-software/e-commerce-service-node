const mongoose = require("mongoose");
const { getCurrentDateTimeUTCPlus6 } = require("../helper/dateTimeHelpers");
const uuidv4 = require("uuid").v4;
const orderItemSchema = new mongoose.Schema({
  orderItemId: {
    type: String,
    required: true,
    default: uuidv4,
  },
  productId: { type: String, ref: "Product" },
  orderId: { type: String, ref: "Order" },
  qty: {
    type: Number,
    required: true,
    default: 0,
  },
  price: Number,
  createdAt: {
    type: Date,
    default: () => getCurrentDateTimeUTCPlus6()
  }
});
const OrderItem = mongoose.model("OrderItem", orderItemSchema);
module.exports = OrderItem;
