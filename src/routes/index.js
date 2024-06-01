const express = require("express");
const router = express.Router();
const userRoute = require("./auth.route");
const productRoute = require("./product.route");
const adminRoute = require("./admin.route");
const orderRoute = require("./order.route");
const healthRoute = require("./health.route");
const defaultRoutes = [
  {
    path: "/health",
    route: healthRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/products",
    route: productRoute,
  },
  {
    path: "/orders",
    route: orderRoute,
  },
  {
    path: "/admin",
    route: adminRoute,
  },
];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
