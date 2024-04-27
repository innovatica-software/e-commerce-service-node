const { Router } = require("express");
const { adminLogin } = require("../controllers/admin.controller");
const { getAllUsers } = require("../models/adminAuth");

const router = Router();
router.post("/login", adminLogin);
router.get("/getuserlist", getAllUsers);

module.exports = router;
