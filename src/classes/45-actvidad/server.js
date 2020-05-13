const app = require('express');
const bodyParser = require('body-parser');
const server = app();
const datos = require('./autores.json');
const port = 3000;

server.use(bodyParser.json());

server.get('/autores', (req, res) => {
    let {autores} = datos;
    res.status(200).json(autores);
});

server.post('/autores', (req, res) => {
    const autor = req.body;

    if(!autor) {
        return res.status(400).json({message: 'Body está vacío'});
    }

    datos.autores.push(autor);
    return res.status(200).json(datos.autores);
});

server.get('/autores/:id', (req, res) => {
    const autor = datos.autores.find(a =>  a.id === parseInt(req.params.id));
    if (!autor) {
        return res.status(404).json({message: 'Autor inexistente'})
    }
    res.json(autor);
});

server.delete('/autores/:id', (req, res) => {
    const index = datos.autores
        .findIndex(a => a.id === parseInt(req.params.id));

    if(index < 0) {
        return res.status(404).json({message: "Autor no existe"});
    }

    datos.autores.splice(index, 1);
    res.json(datos.autores);
});

server.put('/autores/:id', (req, res) => {});
server.get('/autores/:id/libros', (req, res) => {});
server.post('autores/:id/libros', (req, res) => {});
server.get('/autores/:id/libros/:idLibro', (req, res) => {});
server.put('/autores/:id/libros/:idLibro', (req, res) => {});
server.delete('/autores/:id/libros/:idLibro', (req, res) => {});

server.listen(port, () => {
	console.log('Servidor iniciado en puerto ' + port);
});
