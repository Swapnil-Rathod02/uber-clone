const express = require("express");
const router = express.Router();
const { check, query } = require("express-validator");
const { isAuthenticated } = require("../Middleware/auth.Middleware");
const {
  createRideController,
  getFaresController,
} = require("../Controller/ride.Controller");

router.post(
  "/create",
  isAuthenticated,
  check("pickup")
    .isString()
    .isLength({ min: 3 })
    .notEmpty()
    .withMessage("invalid is pickup"),
  check("destination")
    .isString()
    .isLength({ min: 3 })
    .notEmpty()
    .withMessage("invalid is destination"),
  check("vehichleType")
    .isIn(["car", "auto", "bike"])
    .notEmpty()
    .withMessage("invalid vehichleType"),

  createRideController
);

router.get(
  "/get-fares",
  query("pickup")
    .isString()
    .isLength({ min: 3 })
    .notEmpty()
    .withMessage("invalid is pickup"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .notEmpty()
    .withMessage("invalid is destination"),
  isAuthenticated,
  getFaresController
);
module.exports = router;
