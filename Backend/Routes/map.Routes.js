const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../Middleware/auth.Middleware");
const {
  mapsController,
  getDistanceAndeTimeController,
  suggestionsController,
} = require("../Controller/map.Controller");
const { query, check } = require("express-validator");

router.get(
  "/coordinates",
  query("address").isString().isLength({ min: 3 }),
  isAuthenticated,
  mapsController
);

router.get(
  "/get-timedistance",
  check("origin").isString().notEmpty(),
  check("destination").isString().notEmpty(),
  isAuthenticated,
  getDistanceAndeTimeController
);

router.get(
  "/getsuggestions",
  check("input").isString().notEmpty(),
  isAuthenticated,
  suggestionsController
);
module.exports = router;
