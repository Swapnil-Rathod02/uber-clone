const { validationResult } = require("express-validator");
const { create } = require("../Model/Captain.Model");
const { createRide } = require("../Services/Ride.Services");
const createRideController = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { pickup, destination, vehichleType } = req.body;
  try {
    const ride = await createRide({
      user: req.user._id,
      pickup,
      destination,
      vehichleType,
    });
    return res.status(200).json({ ride });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};
module.exports = { createRideController };
