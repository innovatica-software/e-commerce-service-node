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
    required: true,
  },
  shippingPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
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
