const Health = require("./routes/health");
const Auth = require("./routes/auth");
const Product = require("./routes/product");
const Order = require("./routes/order");
module.exports = {
  "/api/health/check": Health.health,
  "/api/users/register": Auth.register,
  "/api/users/login": Auth.login,
  "/api/products/create": Product.createProduct,
  "/api/products": Product.products,
  "/api/products/{_id}": Product.productById,
  "/api/orders/add": Order.createOrder,
  "/api/orders/my/orders": Order.getAllOrder,
};
