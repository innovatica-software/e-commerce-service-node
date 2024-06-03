const { Router } = require("express");
const router = Router();

router.get("/verification-success", (req, res) => {
  res.render("emailVerificationSuccess");
});

router.get("/verification-failure", (req, res) => {
  res.render("emailVerificationFailure");
});

module.exports = router;
