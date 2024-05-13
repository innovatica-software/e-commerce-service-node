const { Router } = require("express");
const { userAuthenticate } = require("../middleware/authenticate");
const { createOrder } = require("../controllers/order.controller");
const { createAddress } = require("../controllers/user.shippingAddress");

const router = Router();

router.post("/:productId/order", userAuthenticate, createOrder);
router.post("/:id/address", userAuthenticate, createAddress);

module.exports = router;
