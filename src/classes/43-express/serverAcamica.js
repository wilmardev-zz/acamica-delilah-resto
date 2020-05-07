const express = require('express');
const server = express();
const datos = require('./alumnos.json');
const port = 3000;


server.get('/', (req, res) => {
    res.json("api acamica");
});

//Muestra todos los estudiantes
server.get('/acamica/alumnos', (req, res) => {
    res.json(datos);
});

//Muestra un estudiante por el id
server.get('/acamica/alumnos/:id', (req, res) => {
    const alumno = datos.alumnos.find(a =>  a.id === parseInt(req.params.id));
    if (!alumno) {
        res.statusCode = 404;
        res.json('Alumno inexistente')
    } else {
        res.json(alumno);
    }
});

//Muestra todos los estudiante por  comision
server.get('/acamica/:comision/alumnos', (req, res) => {
    console.log("comision" + req.params.comision)
    let alumnosPorComision = datos.alumnos
        .filter(a =>
            a.comision === req.params.comision);

    if (req.query && req.query.nombre) {
        alumnosPorComision = alumnosPorComision
            .filter(a => a.nombre === req.query.nombre);
    }
    res.json(alumnosPorComision);
});

//Muestra todos los estudiante por  comision  y id
server.get('/acamica/:comision/alumnos/:id', (req, res) => {
    const alumno = datos.alumnos
        .find(a =>
            a.id === parseInt(req.params.id) &&
            a.comision === req.params.comision);

    if (!alumno) {
        res.statusCode = 404;
        res.json('Alumno inexistente');
    } else {
        res.json(alumno);
    }
});

// elimina un estudiante de una comision
server.delete('/acamica/:comision/alumnos/:id', (req, res) => {
    const index = datos.alumnos
        .findIndex(a =>
            a.id === parseInt(req.params.id) &&
            a.comision === req.params.comision);

    if (index > -1) {
        datos.alumnos.splice(index, 1);
        res.json(datos.alumnos);
    } else {
        res.statusCode = 404;
        res.json('Alumno inexistente');
    }
});


server.listen(port, () => {
    console.log('Primer Servidor iniciado en el puerto: '+ port);
});
