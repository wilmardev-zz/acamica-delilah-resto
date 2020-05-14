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
  const { nombre, apellido } = req.body;
  const nombreExiste = autores.filter((element) => element.nombre === nombre);
  const apellidoExiste = autores.filter(
    (element) => element.apellido === apellido
  );
  if (nombreExiste.length > 0 && apellidoExiste.length > 0) {
    return res.status(409).json({ mensaje: "Ya existe" });
  }
  const autor = req.body;
  autores.push(autor);
  return res.status(201).json(autor);
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
  const indexAutor = autores.findIndex(
    (autor) => autor.id === parseInt(req.params.id)
  );
  console.log(autores[indexAutor]);
  if (indexAutor > -1) {
    const autor = req.body;
    autores[indexAutor] = autor;
    return res.status(200).json(autores[indexAutor]);
  }
  return res.status(404).json({ mensaje: "Autor inexistente" });
});

server.get("/api/v1/autores/:id/libros", (req, res) => {
  const idAutor = req.params.id;
  const indexAutor = autores.findIndex(
    (autor) => autor.id === parseInt(idAutor)
  );
  if (indexAutor > -1) {
    return res.status(200).json(autores[idAutor].libros);
  }
  return res.status(404).json({ mensaje: "Autor inexistente" });
});

server.post("/api/v1/autores/:id/libros", (req, res) => {
  const idAutor = req.params.id;
  const indexAutor = autores.findIndex(
    (autor) => autor.id === parseInt(idAutor)
  );
  if (indexAutor > -1) {
    const libro = req.body;
    autores[idAutor].libros.push(libro);
    return res.status(201).json(libro);
  }
  return res.status(404).json({ mensaje: "Autor inexistente" });
});

server.get("/api/v1/autores/:id/libros/:idLibro", (req, res) => {
  const idAutor = req.params.id;
  const idLibro = req.params.idLibro;
  const indexAutor = autores.findIndex(
    (element) => element.id === parseInt(idAutor)
  );
  if (indexAutor > -1) {
    const indexLibro = autores[indexAutor].libros.findIndex(
      (element) => element.id === parseInt(idLibro)
    );
    if (indexLibro > -1) {
      return res.status(200).json(autores[indexAutor].libros[idLibro]);
    }
  }
  return res.status(404).json({ mensaje: "Autor y/o libro inexistente" });
});

server.delete("/api/v1/autores/:id/libros/:idLibro", (req, res) => {
  const idAutor = req.params.id;
  const idLibro = req.params.idLibro;
  const indexAutor = autores.findIndex(
    (element) => element.id === parseInt(idAutor)
  );
  if (indexAutor > -1) {
    const indexLibro = autores[indexAutor].libros.findIndex(
      (element) => element.id === parseInt(idLibro)
    );
    if (indexLibro > -1) {
      autores[indexAutor].libros.splice(indexLibro, 1);
      return res.status(204).json();
    }
  }
  return res.status(404).json({ mensaje: "Autor y/o libro inexistente" });
});

server.put("/api/v1/autores/:id/libros/:idLibro", (req, res) => {
  const idAutor = req.params.id;
  const idLibro = req.params.idLibro;
  const indexAutor = autores.findIndex(
    (element) => element.id === parseInt(idAutor)
  );
  if (indexAutor > -1) {
    const indexLibro = autores[indexAutor].libros.findIndex(
      (element) => element.id === parseInt(idLibro)
    );
    if (indexLibro > -1) {
      const libro = req.body;
      autores[indexAutor].libros[indexLibro] = libro;
      return res.status(200).json(autores[indexAutor].libros[indexLibro]);
    }
  }
  return res.status(404).json({ mensaje: "Autor y/o libro inexistente" });
});

server.listen(port, () => {
  console.log("Servidor iniciado en el puerto: " + port);
});
