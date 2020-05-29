const express = require("express");
const server = express();
//const datos = require("/alumnos.json");
const bodyParser = require('body-parser');
const port = 3000;
let contactos = [];

server.use(bodyParser.json());

const middlewareGlobal = (req, res, next) => {
    const { method, path, query, body } = req;
    console.log(
        `${method} - ${req.path} - ${JSON.stringify(query)} - ${JSON.stringify(body)}`
    );
    next();
};

const middlewareVerify = (req, res, next) => {
    const { name, lastName, email } = req.body;
    //console.log(email);

    if (!name || !lastName || !email) {
        return res.status(400).json({ message: "hay datos vacíos" });
    }
    next();
}

const middlewareVerifyExist = (req, res, next) => {
    const { email } = req.body;
    let contacto = contactos.filter(a => {
        console.log(a);
    });
}


server.use(middlewareGlobal);


server.get('/demo', (req, res) => {
    res.json("Demo");
});

server.post('/contact', middlewareVerify, (req, res) => {
    contactos.push(req.body);
    res.json("Contact");
});




server.listen(port, () => {
    console.log("Primer Servidor iniciado en el puerto: " + port);
});