const Health = require("./routes/health");
const Auth = require("./routes/auth");
const Product = require("./routes/product");
module.exports = {
  "/api/health/check": Health.health,
  "/api/users/register": Auth.register,
  "/api/users/login": Auth.login,
  "/api/products": Product.products,
  "/api/products/{_id}": Product.productById,
};
