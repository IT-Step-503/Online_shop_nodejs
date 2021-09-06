const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth")

const verifyToken = require("../middleware/auth")

router.get("/register", authController.getRegister)
router.post("/register", authController.postRegister)

router.get("/login", authController.getLogin)
router.post("/login", authController.postLogin)

module.exports = router