const express = require("express");
const { Createuser, Loginuser } = require("../controller/UserContoller");
const router = express.Router();

router.post("/createuser", Createuser);
router.post("/loginuser", Loginuser);

module.exports = router;
