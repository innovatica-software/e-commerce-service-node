const { Router } = require("express");
const { getAllUsers } = require("../models/adminAuth");

const router = Router();
router.get("/getuserlist", getAllUsers);
module.exports = router;
