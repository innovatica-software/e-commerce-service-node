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

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
