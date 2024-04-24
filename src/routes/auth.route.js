const { Router } = require("express");
const { userRegistration } = require("../controllers/auth.controller");

const router = Router();
router.post("/register", userRegistration);
module.exports = router;