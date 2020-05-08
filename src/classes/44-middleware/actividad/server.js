const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const port = 3000;

const contactos = [
  {
    name: "juan",
    lastName: "perez",
    email: "whatever",
  },
  {
    name: "mariana",
    lastName: "rojas",
    email: "whatever",
  },
  {
    name: "erika",
    lastName: "rojas",
    email: "whatever",
  },
];

const middleLog = (req, res, next) => {
  console.log(
    req.method +
      " - " +
      req.path +
      " - " +
      JSON.stringify(req.query) +
      " - " +
      JSON.stringify(req.body)
  );
  next();
};

const validate = (req, res, next) => {
  const { name, lastName, email } = req.body;
  let result = [];
  if (!name || !lastName || !email) {
    return res.status(400).json({ message: "Missing data" });
  }
  result = contactos.filter((element) => element.name === name);
  if (result.length > 0) {
    return res.status(409).json({ message: "already exists" });
  }
  next();
};

const validateVersion = (req, res, next) => {
  const { version } = req.query;
  if (!version) {
    return res.status(400).json({ message: "no version" });
  }
  if (isNaN(version) || parseInt(version) > 5) {
    return res.status(422).json({ message: "wrong version" });
  }
  next();
};

server.use(bodyParser.json());
server.use(middleLog);

server.get("/", (req, res) => {
  res.json("api acamica");
});

server.get("/demo", validateVersion, (err, req, res) => {
  if (err) {
    return res.status(500).json({ message: "General error" });
  }
  return res.json({ message: "OK" });
});

server.post("/contacto", validate, (req, res) => {
  res.json(req.body);
});

server.listen(port, () => {
  console.log("Primer Servidor iniciado en el puerto: " + port);
});
