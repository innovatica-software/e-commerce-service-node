const { Router } = require("express");
const {
  createProduct,
  getProducts,
} = require("../controllers/product.controller");
const { adminAuthenticate } = require("../middleware/authenticate");
const router = Router();
router.post("/create", adminAuthenticate, createProduct);
router.get("/", getProducts);
module.exports = router;
