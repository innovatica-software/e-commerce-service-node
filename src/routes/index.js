const express = require("express");
const router = express.Router();
const userRoute = require("./auth.route");
const productRoute = require("./product.route");
const defaultRoutes = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/products",
    route: productRoute,
  },
  
];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;