const { Router } = require("express");
const { userAuthenticate } = require("../middleware/authenticate");
const { createOrder } = require("../controllers/order.controller");

const router = Router();
router.post("/add", userAuthenticate, createOrder);


module.exports = router;
