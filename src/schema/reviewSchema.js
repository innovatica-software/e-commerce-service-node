const mongoose = require("mongoose");
const { getCurrentDateTimeUTCPlus6 } = require("../helper/dateTimeHelpers");
const reviewSchema = new mongoose.Schema({
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
