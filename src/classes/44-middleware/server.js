const express = require('express');
const server = express();
const datos = require('../43-express/alumnos.json');
const port = 3000;
const bodyParser = require('body-parser');
const primerMiddleware = (req, res, next) => {
	console.log(`Primer middleware ${req.path}`);
};

const segundoMiddleware = (req, res, next) => {
	console.log(`LA solicitud del segundo recurso ${req.path}`);
	console.log(req.params);
	const { user } = req.params;
	const userTrimmed = user.trim();
	if (userTrimmed !== 'acamica') {
		console.log('Usuario Invalido');
	}
	return;
};
server.use(primerMiddleware);
server.get('/', (req, res) => {
	res.json('api acamica');
});

//Muestra todos los estudiantes
server.get('/acamica/alumnos', (req, res) => {
	res.json(datos);
});
server.listen(port, () => {
	console.log('Primer Servidor iniciado en el puerto: ' + port);
});
