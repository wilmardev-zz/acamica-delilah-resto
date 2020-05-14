const express = require("express");
const bodyParser = require("body-parser");
const autores = require("../45-autores/autores.json").autores;
const server = express();
const port = 3000;

server.use(bodyParser.json());

server.get("/api/v1/autores/health", (req, res) => {
  return res.status(200).json({ status: "OK" });
});

server.get("/api/v1/autores", (req, res) => {
  return res.status(200).json(autores);
});

server.post("/api/v1/autores", (req, res) => {
  const autor = req.body;
  autores.push(autor);
  return res.status(200).json(autores);
});

server.get("/api/v1/autores/:id", (req, res) => {
  const autor = autores.find((a) => a.id === parseInt(req.params.id));
  if (!autor) {
    res.status(404).json({ mensaje: "Autor inexistente" });
  } else {
    res.status(200).json(autor);
  }
});

server.delete("/api/v1/autores/:id", (req, res) => {
  const idAutor = req.params.id;
  const indexAutor = autores.findIndex(
    (autor) => autor.id === parseInt(idAutor)
  );
  if (indexAutor > -1) {
    autores.splice(indexAutor, 1);
    return res.status(204).json();
  }
  return res.status(404).json({ mensaje: "Autor inexistente" });
});

server.put("/api/v1/autores/:id", (req, res) => {
  const autor = req.body;
  const indexAutor = autores.findIndex(
    (autor) => autor.id === parseInt(autor.id)
  );
  if (indexAutor > -1) {
    autores[indexAutor] = autor;
    return res.status(200).json(autores[indexAutor]);
  }
  return res.status(404).json({ mensaje: "Autor inexistente" });
});

server.get("/api/v1/autores/:id/libros", (req, res) => {
  const idAutor = req.params.id;
  return res.status(200).json(autores[idAutor].libros);
});

server.post("/api/v1/autores/:id/libros", (req, res) => {
  const libro = req.body;
  const idAutor = req.params.id;
  autores[idAutor].libros.push(libro);
  return res.status(200).json(autores);
});

server.get("/api/v1/autores/:id/libros/:idLibro", (req, res) => {
  const idAutor = req.params.id;
  const idLibro = req.params.idLibro;
  return res.status(200).json(autores[idAutor].libros[idLibro]);
});

server.delete("/api/v1/autores/:id/libros/:idLibro", (req, res) => {
  const idAutor = req.params.id;
  const idLibro = req.params.idLibro;
  const indexAutor = autores.findIndex(
    (element) => element.id === parseInt(idAutor)
  );
  const indexLibro = autores[idAutor].libros.findIndex(
    (element) => element.id === parseInt(idLibro)
  );

  if (indexAutor > -1 && indexLibro > -1) {
    autores[indexAutor].libros.splice(indexLibro, 1);
    return res.status(204).json();
  }
  return res.status(404).json({ mensaje: "Autor y/o libro inexistente" });
});

server.put("/api/v1/autores/:id/libros/:idLibro", (req, res) => {
  const idAutor = req.params.id;
  const idLibro = req.params.idLibro;
  const libro = req.body;
  const indexAutor = autores.findIndex(
    (autor) => autor.id === parseInt(autor.id)
  );
  const indexLibro = autores[idAutor].libros.findIndex(
    (element) => element.id === parseInt(idLibro)
  );
  if (indexAutor > -1 && indexLibro > -1) {
    autores[indexAutor].libros.push(libro);
    return res.status(200).json(autores[indexAutor].libros);
  }
  return res.status(404).json({ mensaje: "Libro inexistente" });
});

server.listen(port, () => {
  console.log("Servidor iniciado en el puerto: " + port);
});
