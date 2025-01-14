const { validationResult, cookie } = require("express-validator");
const User = require("../Model/User.model");
const blacklistedToken = require("../Model/BlacklistedToken.Model");
const bycrpt = require("bcrypt");
const { setToken } = require("../Helpers/jsonToken");

async function userRegistration(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(errors);
  }

  try {
    const { name, email, password } = req.body;
    const isExist = await User.findOne({ email: email });
    if (isExist) return res.json({ status: "failed", msg: "Already exist" });

    const hashPassword = await bycrpt.hash(password, 10);

    const userData = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    return res.status(201).json({
      status: "successfull",
      userData: userData,
    });
  } catch (error) {
    res.status(404).json({ msg: "something went wrong" });
  }
}

//----Login-------
async function logInHandle(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ status: "failed", msg: "email or password is wrong" });

    const isMatched = await bycrpt.compare(password, user.password);
    if (isMatched) {
      const token = setToken({ user: user.password });
      res.cookie("token", token);
      return res.status(200).json({
        type: "Bearer",
        token: `bearer ${token}`,
        user,
      });
    }
    return res.status(400).json({ msg: "email or password is incorrect" });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

//profileHandler
const profileHandler = (req, res) => {};

//logout
const logOutHandler = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;

    const blacklistToken = await blacklistedToken.create({ token });
    console.log(blacklistToken);
    req.clearCookie("token");
    res.status(200).json({ msg: "log out successfully" });
  } catch (error) {
    res.status(400).json({ msg: "something went wrong" });
  }
};

module.exports = { userRegistration, logInHandle, logOutHandler };
