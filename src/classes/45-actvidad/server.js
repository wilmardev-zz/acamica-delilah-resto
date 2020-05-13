const app = require('express');
const bodyParser = require('body-parser');
const server = app();
const datos = require('./autores.json');
const port = 3000;

server.get('/autores', (req, res) => {
	res.status(200).json(datos);
});
server.post('/autores', (req, res) => {});

server.get('/autores/:id', (req, res) => {});
server.delete('/autores/:id', (req, res) => {});
server.put('/autores/:id', (req, res) => {});
server.get('/autores/:id/libros', (req, res) => {});
server.post('autores/:id/libros', (req, res) => {});
server.get('/autores/:id/libros/:idLibro', (req, res) => {});
server.put('/autores/:id/libros/:idLibro', (req, res) => {});
server.delete('/autores/:id/libros/:idLibro', (req, res) => {});
server.listen(port, () => {
	console.log('Servidor iniciado en puerto ' + port);
});
