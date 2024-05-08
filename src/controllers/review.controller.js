const { errorResponseHandler } = require("../helper/errorResponseHandler");
const { statusCodes } = require("../helper/statusCodes");
const ReviewModel = require("../models/userReview");
const ProductModel = require("../models/product");

const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const { userId } = req.user;
    const { productId } = req.params;

    const reviewExists = await ReviewModel.reviewExists(userId, productId);
    if (reviewExists) {
      throw Object.assign(new Error(), {
        status: statusCodes.CONFLICT,
        error: {
          code: 40903,
        },
      });
    }

    const product = await ProductModel.getProductById(productId);
    const updatedRating =
      (product.rating * product.numReviews + rating) / (product.numReviews + 1);

    await ProductModel.updateProductReviewsAndRating(
      productId,
      product.numReviews + 1,
      updatedRating
    );

    const newReview = await ReviewModel.createProductReview({
      rating,
      comment,
      userId,
      productId,
    });
    res.created(newReview, "Product Review successfully Added ");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};
module.exports = { createReview };
