const { Router } = require("express");
const { adminAuthenticate } = require("../middleware/authenticate");
const { getUsers, adminLogin } = require("../controllers/admin.controller");

const router = Router();

router.get("/users", adminAuthenticate, getUsers);
router.post("/login",adminLogin);

module.exports = router;
