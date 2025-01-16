const { validationResult } = require("express-validator");
const Captain = require("../Model/Captain.Model");
const { setToken } = require("../Helpers/jsonToken");
const bcrypt = require("bcrypt");

const registerHandler = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ msg: error.array() });
  }

  try {
    const { userName, email, phoneNumber, vehicleDetail, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const captainUser = await Captain.create({
      name: userName,
      email,
      phoneNumber,
      password: hashPassword,
      vehicleDetail: {
        vehicleType: vehicleDetail.vehicleType,
        vehicleNumber: vehicleDetail.vehicleNumber,
      },
    });
    const token = setToken({ captainUser });
    res.cookie("token", token);
    return res.status(200).json({ msg: "successfull", captainUser, token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const captainUser = await Captain.findOne({ email }).select("+password");

    if (
      !captainUser ||
      !(await bcrypt.compare(password, captainUser.password))
    ) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const token = setToken({ captainUser });
    res.cookie("token", token);
    return res
      .status(200)
      .json({ msg: "Login successful", captainUser, token });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const captainProfileHandler = (req, res) => {
  res.status(200).json({ msg: "user data", captainUser: req.user });
};

module.exports = { registerHandler, loginHandler, captainProfileHandler };
