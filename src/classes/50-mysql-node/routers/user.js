const jwt = require("jsonwebtoken");
const config = require("../../../config/development").config;

const login = (req, res, next) => {
  const { user, pass } = req.body;
  if (user !== config.LoginInfo.User || pass !== config.LoginInfo.Password) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const payload = { user, pass };
  const jwtToken = jwt.sign(payload, config.JwtSecretKey, {
    expiresIn: config.JwtExpiresToken,
  });
  return res.status(200).json({ token: jwtToken });
};

module.exports = {
  login,
};
