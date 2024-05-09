const mongoose = require("mongoose");
const { getCurrentDateTimeUTCPlus6 } = require("../helper/dateTimeHelpers");
const orderSchema = new mongoose.Schema({
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
  orderItems: [
    {
      type: String,
      ref: "OrderItem",
    },
  ],
  shippingAddress: {
    type: String,
    ref: "ShippingAddress",
  },
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
