const OrderModel = require("../models/userOrder");
const ProductModel = require("../models/product");
const shippingModel = require("../models/userShippingAddress");
const { errorResponseHandler } = require("../helper/errorResponseHandler");

const createOrder = async (req, res) => {
  try {
    const { paymentMethod, taxPrice, shippingPrice, totalPrice } = req.body;
    const { userId } = req.user;

    const { productId } = req.params;
    const orderItems = await ProductModel.getProductById(productId);
    const shippingAddress = await shippingModel.getAddressById(userId);

    console.log(orderItems);

    const newOrder = await OrderModel.createOrder({
      userId,
      orderItems,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
      shippingAddress,
    });
    res.created(
      newOrder,

      "Product ordered successfully "
    );
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};
const getSingleOrder = async (req, res) => {
  try {
    const userId = req.user;
    const producId = req.params.id;
    const productDetails = await ProductModel.getProductById(producId);
    const singleOrder = await OrderModel.getOrderById(userId);
    res.success(
      productDetails,
      singleOrder,
      "Order Details Loaded Succesfully"
    );
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

module.exports = { createOrder, getSingleOrder };
