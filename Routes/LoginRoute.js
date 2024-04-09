const express = require("express");
const router = express.Router();
const LoginController = require("../controller/LoginController");
router.get("/login", LoginController.loginController);
module.exports = router;