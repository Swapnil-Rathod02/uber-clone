const express = require("express");
const {
  registerHandler,
  loginHandler,
} = require("../Controller/captain.Controller");
const { captainRegistration, captainLogin } = require("../Helpers/validators");
const router = express.Router();

router.post("/register", captainRegistration, registerHandler);
router.post("/login", captainLogin, loginHandler);

module.exports = router;
