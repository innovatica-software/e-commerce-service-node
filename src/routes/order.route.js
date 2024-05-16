const { Router } = require("express");
const { userAuthenticate } = require("../middleware/authenticate");
const {
  createOrder,
  getAllOrders,
} = require("../controllers/order.controller");

const router = Router();
router.post("/add", userAuthenticate, createOrder);
router.get("/my/orders", userAuthenticate, getAllOrders);

module.exports = router;
