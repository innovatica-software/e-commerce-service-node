const mongoose = require("mongoose");
const { getCurrentDateTimeUTCPlus6 } = require("../helper/dateTimeHelpers");
const uuidv4 = require("uuid").v4;
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    default: uuidv4,
    required: true,
  },
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  taxPrice: {
    type: Number,
    requried: true,
  },
  shippingPrice: {
    type: Number,
    requried: true,
  },
  totalPrice: {
    type: Number,
    requried: true,
  },
  products: [
    {
      type: String,
      ref: "OrderItem",
    },
  ],
  isPaid: { type: Boolean, default: false },
  paidAt: {
    type: Date,
  },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: {
    type: Date,
  },
  createdAt: { type: Date, default: () => getCurrentDateTimeUTCPlus6() },
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
