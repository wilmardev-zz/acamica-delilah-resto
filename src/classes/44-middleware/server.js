const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const datos = require('../43-express/alumnos.json');
const port = 3000;

const primerMiddleware = (req, res, next) => {
    console.log(`La solicitud del recurso ${req.path} ha pasado por el primer middleware`);
    next();
}

const segundoMiddleware = (req, res, next) => {
    console.log(`La solicitud del recurso ${req.path} ha pasado por el segundo middleware`);

    console.log(req.params);
    const {user} = req.params;

    if(user.trim() !== 'acamica') {
        console.log('Usuario inválido');
        return res.status(403).json({message: 'Unauthorized'});
    }

    next();
}

server.use(primerMiddleware);
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.json("api acamica");
});

//Muestra todos los estudiantes
server.get('/acamica/alumnos/:user', segundoMiddleware, (req, res) => {
    res.json(datos);
});


server.post('/acamica/login', (req, res) => {
    const {user, pass} = req.body;
    if(user !== 'acamica' && pass !== '2020') {
        return res.status(403).json({message: 'Unauthorized'});
    }

    res.json({message: 'Authorized'})
});

server.listen(port, () => {
    console.log('Primer Servidor iniciado en el puerto: '+ port);
});
