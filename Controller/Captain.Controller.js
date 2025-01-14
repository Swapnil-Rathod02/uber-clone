const { validationResult } = require("express-validator");
const Captain = require("../Model/Captain.Model");
const { setToken } = require("../Helpers/jsonToken");

const registerHandler = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ msg: error.array() });
  }

  try {
    const { name, email, phoneNumber, password } = req.body;
    console.log(name, email, phoneNumber, password);

    const captainUser = await Captain.create({
      name,
      email,
      phoneNumber,
      password,
    });
    const token = setToken({ captainUser });
    res.cookie("token", token);
    return res.status(200).json({ msg: "successfull", captainUser, token });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const loginHandler = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ msg: error.array() });
  }

  try {
    const { email, password } = req.body;
    const captainUser = await Captain.findOne({ email }).select("+password");

    if (!captainUser || !(await captainUser.comparePassword(password))) {
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

module.exports = { registerHandler, loginHandler };
