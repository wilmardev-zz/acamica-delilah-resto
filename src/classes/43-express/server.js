// Importamos express
const express = require("express");

// Creamos el servidor express
const server = express();

// Exponer un recurso para ser consumido por un cliente
server.get("/api/health", (req, res) => {
  const works = {
    apiName: "FirstApiAcamica",
    status: "ok",
  };
  return res.status(502).json(works);
});

// Levantamos el servidor en el puerto 5900
server.listen(5900, () => {
  console.log("Servidor iniciado...");
});
