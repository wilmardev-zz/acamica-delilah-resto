const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const config = require("../../config/development").config;
const app = express();

app.use(bodyParser.json());

const validateJwtMiddleware = (req, res, next) => {
  const jwtToken = req.headers["authorization"];
  if (!jwtToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const jwtClient = jwtToken.split(" ")[1];
  jwt.verify(jwtClient, config.JwtSecretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Token Expired" });
    }
    next();
  });
};

// app.use(validateJwtMiddleware);

app.post("/api/v1/acamica/user", validateJwtMiddleware, (req, res) => {
  return res.status(200).json(req.body);
});

app.post("/api/v1/acamica/login", (req, res) => {
  const { user, pass } = req.body;
  if (user !== config.LoginInfo.User || pass !== config.LoginInfo.Password) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const payload = { user, pass };
  const jwtToken = jwt.sign(payload, config.JwtSecretKey, {
    expiresIn: config.JwtExpiresToken,
  });
  return res.status(200).json({ token: jwtToken });
});

app.listen(config.Port, () => {
  console.log(`Servidor iniciado en el puerto ${config.Port}`);
});
