const { Router } = require("express");
const {
  createProduct,
  getProducts,
} = require("../controllers/product.controller");
const multer = require('multer')
const upload = multer({
  dest: "tmp/",
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});
const { adminAuthenticate } = require("../middleware/authenticate");
const router = Router();
router.post("/create", adminAuthenticate,  upload.single("image"), createProduct);
router.get("/", getProducts);
module.exports = router;
