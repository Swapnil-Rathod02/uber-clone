const cookieParser = require("cookie-parser");
const express = require("express");
const { signInRules } = require("../Helpers/validators");
const {
  userRegistration,
  logInHandle,
  logOutHandler,
} = require("../Controller/user.Controller");
const { isAuthenticated } = require("../Middleware/auth.Middleware");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());

router.post("/signin", signInRules, userRegistration);
router.post("/login", logInHandle);

router.get("/profile", isAuthenticated, (req, res) => {
  console.log("ok");
});

router.get("/logout", logOutHandler);

module.exports = router;
