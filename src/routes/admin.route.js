const { Router } = require("express");
const { adminAuthenticate } = require("../middleware/authenticate");
const { getUsers } = require("../controllers/admin.controller");

const router = Router();

router.get("/userlist", adminAuthenticate, getUsers);

module.exports = router;
