const OrderModel = require("../models/userOrder");
const ProductModel = require("../models/product");
const OrderItemModel = require("../models/OrderItems");
const ShippingAddressModel = require("../models/ShippingAddress");
const { errorResponseHandler } = require("../helper/errorResponseHandler");

const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
      shippingAddress,
    } = req.body;
    const { userId } = req.user;

    const orderItemIds = await OrderItemModel.addOrderItems(orderItems);
    const shippingAddressId = await ShippingAddressModel.createShippingAddress(
      shippingAddress
    );
    await ProductModel.updateProductStock(orderItems);
    const newOrder = await OrderModel.createOrder({
      userId,
      orderItems: orderItemIds,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
      shippingAddress: shippingAddressId,
    });
    res.created(
      newOrder,

      "Product ordered successfully "
    );
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};

module.exports = { createOrder };
