const { Router } = require("express");
const {
  createProduct,
  getProducts,
  getSingleProduct,
} = require("../controllers/product.controller");
const {
  adminAuthenticate,
  userAuthenticate,
} = require("../middleware/authenticate");
const { createReview } = require("../controllers/review.controller");
const router = Router();
const multer = require("multer");
const upload = multer({
  dest: "tmp/",
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
router.post(
  "/create",
  adminAuthenticate,
  upload.single("image"),
  createProduct
);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.post("/review/:productId", userAuthenticate, createReview);

module.exports = router;
