const mongoose = require("mongoose");
const { getCurrentDateTimeUTCPlus6 } = require("../helper/dateTimeHelpers");
const uuidv4 = require("uuid").v4;
const reviewSchema = new mongoose.Schema({
  reviewId: {
    type: String,
    required: true,
    default: uuidv4,
  },
  productId: {
    type: String,
    ref: "Product",
  },
  userId: {
    type: String,
    required: true,
    ref: "User",
  },
  rating: { type: Number, required: true },
  comment: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: () => getCurrentDateTimeUTCPlus6() },
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
