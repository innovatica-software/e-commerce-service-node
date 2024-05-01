const mongoose = require("mongoose");
const { getCurrentDateTimeUTCPlus6 } = require("../helper/dateTimeHelpers");
const uuidv4 = require("uuid").v4;
const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    default: uuidv4,
    required: true,
  },
  userId: { 
    type: String, 
    ref: "User", 
    required: true 
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  image: { type: String},
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  rating: {
    type: Number,
  },
  numReviews: { type: Number, default: 0 },
  price: {
    type: Number,
    required: true,
  },
  countInStock: { type: Number, required: true },
  createdAt: { type: Date, default: ()=> getCurrentDateTimeUTCPlus6()},
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
