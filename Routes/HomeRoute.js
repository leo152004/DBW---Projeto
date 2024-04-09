const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
router.get("/index", homeController.indexController);
module.exports = router;