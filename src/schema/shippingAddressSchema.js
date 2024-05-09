const mongoose = require("mongoose");
const shippingAddSchema = new mongoose.Schema({
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