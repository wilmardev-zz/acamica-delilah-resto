const express = require("express");
const bodyParser = require("body-parser");
const datos = require("../43-express/alumnos.json");

const server = express();

const port = 3000;

const globalMiddleware = (req, res, next) => {
  console.log("Passed through first middleware");
  next();
};

const specificMiddleware = (req, res, next) => {
  console.log("Passed through second middleware");
  const { user } = req.params;
  if (user.trim() !== "acamica") {
    console.log("Invalid user");
    return res.status(403).json({ message: "unauthorized" });
  }
  console.log("Valid user");
  next();
};

server.use(globalMiddleware);
// server.use(specificMiddleware);
server.use(bodyParser.json());

const login = (req, res, next) => {
  const { user, password } = req.body;
  if (user !== "acamica" || password !== "2020") {
    return res.status(403).json({ access: "unauthorized" });
  }
  next();
};

server.get("/", (req, res) => {
  res.json("api acamica");
});

server.get("/acamica/alumnos/:user", specificMiddleware, (req, res) => {
  res.json(datos);
});

server.post("/acamica/login", login, (req, res) => {
  res.status(200).json({ access: "authorized" });
});

server.listen(port, () => {
  console.log("Primer Servidor iniciado en el puerto: " + port);
});
