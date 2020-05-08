const express = require("express");
const server = express();
const datos = require("../43-express/alumnos.json");

const port = 3000;

const primerMiddleware = (req, res, next) => {
  console.log("paso pro el primero");
  next();
};

const segundoMiddleware = (req, res, next) => {
  console.log("paso por el 2do");
  //   next();
  res.status(401).json({ message: "unauthorized" });
};

server.use(primerMiddleware);
server.use(segundoMiddleware);

server.get("/", (req, res) => {
  res.json("api acamica");
});

server.get("/acamica/alumnos", (req, res) => {
  res.json(datos);
});

server.listen(port, () => {
  console.log("Primer Servidor iniciado en el puerto: " + port);
});
