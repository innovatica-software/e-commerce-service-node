const mongoose = require("mongoose");
const shippingAddSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: String,
  postalCode: {
    type: String,
    required: true,
  },
  country: String,
});
const ShippingAddress = mongoose.model("ShippingAddress", shippingAddSchema);
module.exports = ShippingAddress;
