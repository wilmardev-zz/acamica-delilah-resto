app.get("/api/v1/autores/healt", (req, res) => {
  return res.status(200).json({ estado: "ok" });
});

// Mostrar todos los autores
app.get("/api/v1/autores", (req, res) => {
  return res.status(200).json(autores);
});

// Agregar un nuevo autor
app.post("/api/v1/autores", (req, res) => {
  const { autor } = req.body;
  autores.push(autor);
  return res.status(200).json(autores);
});

// Buscar autor por id
app.get("/api/v1/autores/:id", (req, res) => {
  const idAutor = req.params.id;
  const autor = autores.filter((autor) => autor.id === parseInt(idAutor));
  if (autor.length > 0) {
    return res.status(200).json(autor);
  }
  return res.status(404).json({ mensaje: "Autor no encontrado" });
});

// Eliminar autor por id
app.delete("/api/v1/autores/:id", (req, res) => {
  const idAutor = req.params.id;
  const indexAutor = autores.findIndex(
    (autor) => autor.id === parseInt(idAutor)
  );
  if (indexAutor > -1) {
    autores.splice(indexAutor, 1);
    return res.status(204).json();
  }
  return res.status(404).json({ mensaje: "Autor no encontrado" });
});

// Actualizar autor
app.put("/api/v1/autores", (req, res) => {
  const { autor } = req.body;
  const indexAutor = autores.findIndex(
    (autor) => autor.id === parseInt(autor.id)
  );
  if (indexAutor > -1) {
    autores[indexAutor] = autor;
    return res.status(200).json(autores[indexAutor]);
  }
  return res.status(404).json({ mensaje: "Autor no encontrado" });
});
