const mongoose = require("mongoose");
const shippingAddSchema = new mongoose.Schema({
  shippingId: {
    type: String,
    default: uuidv4,
    required: true,
  },
  orderId: { type: String, ref: 'Order', required: true },
  address: {
    type: String,
    required: true,
  },
  city: String,
  postalCode: {
    type: String,
    required: true
  },
  country: String,
  shippingPrice: {
    type: Number,
    required: true,
  },
});
const ShippingAddress = mongoose.model("ShippingAddress", shippingAddSchema);
module.exports = ShippingAddress;