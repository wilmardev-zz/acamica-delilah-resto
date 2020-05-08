const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const port = 3000;
const contactos = [
  {
    nombre: "jhonathan",
    apellido: "tabares",
    email: "jdhdfhf@hfhf.com",
  },
  {
    nombre: "mar",
    apellido: "miranda",
    email: "jdhdfhf@hfhf.com",
  },
  {
    nombre: "esteban",
    apellido: "rojas",
    email: "jdhdfhf@hfhf.com",
  },
  {
    nombre: "wil",
    apellido: "duque",
    email: "jdhdfhf@hfhf.com",
  }
];

const middleLog = (err, req, res, next) => {
  console.log(
    req.method +
      " - " +
      req.path +
      " - " +
      JSON.stringify(req.query) +
      " - " +
      JSON.stringify(req.body)
  );

  if(err) {
      return res.status(500).json({message: "Error inesperado"});
  }

  next();
};

const middleValidarPost = (req, res, next) => {
  const { nombre, apellido, email } = req.body;
  let resultado = []

  if (!nombre || !apellido || !email) {
    return res.status(400).json({ message: "Datos no válidos" });
  }

  resultado = contactos.filter((val) => val.nombre === nombre);

  if(resultado.length > 0) {
    return res.status(409).json({message: "Contacto ya existe"});
  }

  next();
};

const middleValidarGet = (req, res, next) => {
    const {version} = req.query;

    if(!version) {
        return res.status(400).json({message: "Falta imaginación"});
    }

    const valor = isNaN(version) ? 0 : parseInt(version)

    if(valor < 5) {
        return res.status(422).json({message: "Error en la versión"});
    }

    next();
}

server.use(bodyParser.json());
server.use(middleLog);

server.get("/demo", middleValidarGet, (req, res) => {
  res.json({ message: "OK" });
});

server.post("/contacto", middleValidarPost, (req, res) => {
  res.json(req.body);
});

server.listen(port, () => {
  console.log("Servidor iniciado en el puerto: " + port);
});
