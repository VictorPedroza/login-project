const express = require("express");
const router = express.Router();

const AuthController = require("../../controllers/AuthController");
const Auth = require("../../middleware");

router.post("/register",Auth.RegisterValidate, AuthController.register);

router.get("/logout", AuthController.logout);

module.exports = router;