const { getTokenToInfo } = require("../Helpers/jsonToken");
const BlacklistedToken = require("../Model/BlacklistedToken.Model");
const User = require("../Model/User.model");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers?.authorization.split(" ")[1];
    const blacklistedToken = await BlacklistedToken.findOne({ token: token });
    if (!token || blacklistedToken)
      return res.status(401).json({ msg: "Unauthorized" });
    const userDatail = getTokenToInfo(token);
    req.user = userDatail;
  } catch (error) {
    return res.status(401).json({ msg: "bad reques" });
  }
  return next();
};

module.exports = { isAuthenticated };
