const { errorResponseHandler } = require("../helper/errorResponseHandler");
const ProductModel = require("../models/product");
const createProduct = async (req, res) => {
    try {
        const {
            name, price, description, category, brand, countInStock
        } = req.body;
        // const { userId } = req.user;
        const newProduct = await ProductModel.createProduct({
            name, price, description, category, brand, countInStock,
            // userId,
        });
        res.created(newProduct, "Product created successfully ");
    } catch (err) {
        errorResponseHandler(err, req, res);
    }
}
module.exports = {
    createProduct
}