const express = require("express");
const {
  registerHandler,
  loginHandler,

  captainProfileHandler,
} = require("../Controller/captain.Controller");
const { captainRegistration, captainLogin } = require("../Helpers/validators");
const { isAuthenticatedCaptain } = require("../Middleware/auth.Middleware");
const { logOutHandler } = require("../Controller/user.Controller");
const router = express.Router();

router.post("/register", captainRegistration, registerHandler);
router.post("/login", loginHandler);
router.get("/profile", isAuthenticatedCaptain, captainProfileHandler);
router.get("/logout", logOutHandler);

module.exports = router;
