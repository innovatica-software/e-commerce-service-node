const Product = require("../schema/productSchema");

const createProduct = async (data) => {
  const newProduct = new Product(data);
  const createdProduct = await newProduct.save();
  return createdProduct;
};

module.exports = {
    createProduct,
}