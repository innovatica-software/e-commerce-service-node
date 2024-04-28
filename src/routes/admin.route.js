const { Router } = require("express");
const { getAllUsers } = require("../models/adminAuth");
const { adminAuthenticate } = require("../middleware/authenticate");

const router = Router();

router.get("/userlist", adminAuthenticate, getAllUsers);
module.exports = router;
