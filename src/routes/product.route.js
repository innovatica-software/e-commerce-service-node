const { Router } = require("express");
const {
  createProduct,
  getProducts,
  getSingleProduct,
} = require("../controllers/product.controller");
const { adminAuthenticate } = require("../middleware/authenticate");
const router = Router();
router.post("/create", adminAuthenticate, createProduct);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);
module.exports = router;
