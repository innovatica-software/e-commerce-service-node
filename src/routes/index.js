const express = require("express");
const router = express.Router();
const userRoute = require("./auth.route");
const productRoute = require("./product.route");
const adminRoute = require("./admin.route");
const defaultRoutes = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/products",
    route: productRoute,
  },
  ,
  {
    path: "/admin",
    route: adminRoute,
  },
];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
