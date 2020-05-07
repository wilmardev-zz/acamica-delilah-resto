const express = require("express");
const list = require("./alumnos.json");
// console.log(list.alumnos[0].id);
const server = express();

server.get("/api/health", (req, res) => {
  const works = {
    apiName: "Alumnos Acamica",
    status: "OK",
  };
  return res.status(200).json(works);
});

server.get("/api/acamica/dwfs/alumnos/1", (req, res) => {
  res.status(200).json();
});

server.get("/api/acamica/dwfs/alumnos/abc", (req, res) => {
  res.status(400).json("el id de alumno abc es inválido");
});

server.get("/api/acamica/comision/alumnos", (req, res) => {
  const { nombre, curso } = req.query;
  var students = [];
  var course = [];
  list.alumnos.filter((element) => {
    if (element.nombre === nombre) {
      students.push(element);
    }
  });
  list.alumnos.filter((element) => {
    if (element.comision === curso) {
      course.push(element);
    }
  });
  if (nombre) {
    res.status(200).json(students);
  } else {
    res.status(200).json(course);
  }
});

server.get("/api/acamica/comision/alumnos/1", (req, res) => {
  const { id } = req.query;
  var students = [];
  var trig = false;
  list.alumnos.filter((element) => {
    if (element.id === parseInt(id)) {
      students.push(element);
      trig = true;
    }
  });
  if (trig) {
    res.status(200).json(students);
  } else {
    res.status(404).json("No existe");
  }
});

server.delete("/api/acamica/comision/alumnos/:id", (req, res) => {
  const id = req.params.id;
  var trig = false;
  list.alumnos.filter((element) => {
    if (element.id === parseInt(id)) {
      const index = list.alumnos.indexOf(element);
      if (index > -1) {
        list.alumnos.splice(index, 1);
      }
      trig = true;
    }
  });
  if (trig) {
    res.status(200).json("Deleted");
    console.log(list.alumnos.length);
  } else {
    res.status(404).json("No existe");
  }
});

server.listen(3000, () => console.log("Server initiated"));
