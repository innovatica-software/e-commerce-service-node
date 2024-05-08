const Review = require("../schema/reviewSchema");

const createProductReview = async (data) => {
  const newReview = new Review(data);
  const createdReview = await newReview.save();
  return createdReview;
};

const reviewExists = async (userId, productId) => {
  const collectReviews = await Review.exists({ userId, productId });
  return collectReviews;
};

module.exports = { createProductReview, reviewExists };
