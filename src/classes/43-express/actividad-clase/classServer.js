const express = require("express");

const server = express();

server.get("/api/health", (req, res) => {
  const works = {
    apiName: "Alumnos Acamica",
    status: "OK",
  };
  return res.status(200).json(works);
});

server.get("/api/acamica/dwfs/alumnos", (req, res) => {
  res.status(200).json();
});

server.get("/api/acamica/dwfs/alumnos/1", (req, res) => {
  res.status(200).json();
});

server.get("/api/acamica/dwfs/alumnos/abc", (req, res) => {
  res.status(400).json("el id de alumno abc es inválido");
});

server.listen(3000, () => console.log("Server initiated"));
