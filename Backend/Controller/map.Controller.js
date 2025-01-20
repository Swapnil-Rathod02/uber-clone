const { validationResult } = require("express-validator");
const {
  addressCoordinates,
  getTimeAndDistance,
  getsuggestions,
} = require("../Services/Map.Service");

// get coordinates
const mapsController = async (req, res) => {
  const address = req.query.address;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const response = await addressCoordinates(address);
    return res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//time distance
const getDistanceAndeTimeController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { origin, destination } = req.query;
  try {
    const response = await getTimeAndDistance(origin, destination);
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

//suggestions
const suggestionsController = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: "getting error for validtions" });
  }
  const { input } = req.query;
  try {
    const response = await getsuggestions(input);
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  mapsController,
  getDistanceAndeTimeController,
  suggestionsController,
};
