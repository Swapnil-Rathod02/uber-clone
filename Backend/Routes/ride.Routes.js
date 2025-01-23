const express = require("express");
const router = express.Router();
const { check, query } = require("express-validator");
const {
  isAuthenticated,
  isAuthenticatedCaptain,
} = require("../Middleware/auth.Middleware");
const {
  createRideController,
  getFaresController,
  startRideController,
  finishRideController,
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

router.get(
  "/start-ride",
  query("rideId").notEmpty().isString().withMessage("invalid rideId"),
  query("otp").notEmpty().isLength({ min: 3 }).withMessage("invalid otp"),
  isAuthenticatedCaptain,
  startRideController
);
router.post(
  "/ride-end",
  isAuthenticatedCaptain,
  check("status")
    .notEmpty()
    .isIn(["completed,cancelled"])
    .withMessage("invalide credentials"),
  check("rideId").notEmpty().isString().withMessage("rideId is required"),

  finishRideController
);
module.exports = router;
