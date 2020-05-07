// Importamos express
const express = require("express");

// Creamos el servidor express
const server = express();

const fotos = [{
        id: 1,
        title: "ejemplo1",
        url: "https://imagen.com"
    },
    {
        id: 2,
        title: "ejemplo2",
        url: "https://imagen_2.com"
    }
]

// Exponer un recurso para ser consumido por un cliente
server.get("/api/health", (req, res) => {
    const works = {
        apiName: "FirstApiAcamica",
        status: "ok",
    };
    return res.status(502).json(works);
});

server.get("/api/v1/fotos/1", (req, res) => {
    res.status(200).json({
        id: 1,
        title: "ejemplo 1",
        url: "https://imagen.com"
    });
});

server.get("/api/fotos/:id", (req, res) => {
    let id = parseInt(req.params.id)
    let foto = fotos.filter(element => element.id === id);
    res.status(200).json(foto);
});

server.get("/api/fotos/:id/:date", (req, res) => {
    let index = req.params.id
    let date = req.params.date
    res.status(200).json({ index: index, feche: date });
});

server.get("/api/fotos/", (req, res) => {
    const { id, titulo } = req.query
    let foto = fotos.filter(element => {
        if (element.id === parseInt(id) &&
            element.title === titulo) {
            return element;
        }
    })
    res.status(200).json(foto);
});


server.get("/api/fotos", (req, res) => {
    res.status(200).json(fotos);
});


server.get("/api", (req, res) => {
    res.status(200).json("api acamica");
});

// Levantamos el servidor en el puerto 5900
server.listen(5900, () => {
    console.log("Servidor iniciado...");
});

///