const express = require("express");
const {
  registerHandler,
  loginHandler,

  captainProfileHandler,
} = require("../Controller/captain.Controller");
const { captainRegistration, captainLogin } = require("../Helpers/validators");
const { isAuthenticated } = require("../Middleware/auth.Middleware");
const { logOutHandler } = require("../Controller/user.Controller");
const router = express.Router();

router.post("/register", captainRegistration, registerHandler);
router.post("/login", loginHandler);
router.get("/profile", isAuthenticated, captainProfileHandler);
router.get("/logout", logOutHandler);

module.exports = router;
