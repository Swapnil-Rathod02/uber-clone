const jwt = require("jsonwebtoken");

function setToken(user) {
  const token = jwt.sign(user, process.env.SECRET_TOKEN_KEY, {
    expiresIn: "24h",
  });
  return token;
}

function getTokenToInfo(token) {
  return jwt.verify(token, process.env.SECRET_TOKEN_KEY);
}

module.exports = { setToken, getTokenToInfo };
