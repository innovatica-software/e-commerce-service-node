const { errorResponseHandler } = require("../helper/errorResponseHandler");
const ProductModel = require("../models/product");
const cloudinary = require("cloudinary");

const fs = require("fs");
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, brand, countInStock } =
      req.body;
    const { id } = req.user;
    let result = {};
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };
    if (req.file) {
      const file = req.file;
      result = await cloudinary.uploader.upload(file.path, options);
      fs.unlink(file.path, function (err) {
        if (err) throw err;
      });
    }
    const newProduct = await ProductModel.createProduct({
      name,
      price,
      description,
      category,
      brand,
      countInStock,
      userId: id,
      image: result.url,
    });
    console.log("result.url", result.url);
    res.created(newProduct, "Product created successfully ");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};
const getProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.getAllProducts();
    res.success(allProducts, "Products Loaded Successfully");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};
const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const singleProduct = await ProductModel.getProductById(productId);
    res.success(singleProduct, "Product Loaded Successfully");
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getSingleProduct,
};
