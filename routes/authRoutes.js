const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth")

const verifyToken = require("../middleware/auth")

router.get("/register", authController.getRegister)
router.post("/register", verifyToken, authController.postRegister)

router.get("/login", authController.getLogin)
router.post("/login", verifyToken, authController.postLogin)

module.exports = router