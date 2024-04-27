const express = require("express");
const router = express.Router();
const userRoute = require("./auth.route");
const adminRoute = require("./admin.route");
const defaultRoutes = [
  {
    path: "/users",
    route: userRoute,
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
