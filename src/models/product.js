const Product = require("../schema/productSchema");

const createProduct = async (data) => {
  const newProduct = new Product(data);
  const createdProduct = await newProduct.save();
  return createdProduct;
};
const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};
const getProductById = async (productId) => {
  const product = await Product.findOne({ _id: productId });
  return product;
};
const updateProductReviewsAndRating = async (
  productId,
  newNumReviews,
  newRating
) => {
  await Product.updateOne(
    { _id: productId },
    { $set: { numReviews: newNumReviews, rating: newRating } }
  );
};
const updateProductStock = async (orderItems) => {
  try {
    const productIdsStock = orderItems.map(({ qty, product }) => ({
      productId: product,
      quantity: qty,
    }));
    const updateOperations = productIdsStock.map(({ productId, quantity }) => ({
      filter: { _id: productId },
      update: { $inc: { countInStock: -quantity } },
    }));

    const updates = updateOperations.map((operation) => ({
      updateOne: {
        filter: operation.filter,
        update: operation.update,
      },
    }));

    await Product.bulkWrite(updates);
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductReviewsAndRating,
  updateProductStock,
};
