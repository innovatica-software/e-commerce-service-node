const { Router } = require("express");
const { createProduct } = require("../controllers/product.controller");
const { adminAuthenticate } = require("../middleware/authenticate");
const router = Router();
router.post("/create", adminAuthenticate, createProduct);
module.exports = router;