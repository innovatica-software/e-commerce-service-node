const { Router } = require("express");
const {
  createProduct,
  getProducts,
  getSingleProduct,
} = require("../controllers/product.controller");
const { adminAuthenticate } = require("../middleware/authenticate");
const { createReview } = require("../controllers/review.controller");
const { userAuthenticate } = require("../middleware/user.authenticate");
const router = Router();
router.post("/create", adminAuthenticate, createProduct);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.post("/review/:productId", userAuthenticate, createReview);

module.exports = router;
