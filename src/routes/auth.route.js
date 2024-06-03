const { Router } = require("express");
const {
  userRegistration,
  userLogin,
  emailVerification,
} = require("../controllers/auth.controller");

const router = Router();
router.post("/register", userRegistration);
router.post("/login", userLogin);
router.get("/email-verification", emailVerification);
module.exports = router;
