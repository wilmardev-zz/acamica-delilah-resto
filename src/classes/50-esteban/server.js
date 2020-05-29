const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const config = require("../../config/development").config;
const routerSong = require("./routers/song");
const app = express();
const apiUrl = "/api/v1/acamica";

app.use(bodyParser.json());

const validateJwtMiddleware = (req, res, next) => {
  const jwtToken = req.headers["authorization"];
  if (!jwtToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const jwtClient = jwtToken.split(" ")[1];
  jwt.verify(jwtClient, config.JwtSecretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Token Expired" });
    }
    next();
  });
};

// Login with JWT
// app.post(apiUrl + "/login", routerUser.login);

// Check api health
app.get(apiUrl + "/health", (req, res) => {
  return res.status(200).json({ status: "Ok" });
});

// ---> Song
// Create a song
app.post(apiUrl + "/song", routerSong.create);

// Modificar una canción por ID
app.put(apiUrl + "/song/:id", routerSong.update);

// Eliminar una canción por su ID
app.delete(apiUrl + "/song/:id", routerSong.deleteSong);

//Retornar todas las canciones
app.get(apiUrl + "/songs", routerSong.list);

//Buscar canciones por su nombre
app.get(apiUrl + "/song/:id", routerSong.search);

app.listen(config.Port, () => {
  console.log(`Servidor iniciado en el puerto ${config.Port}`);
});
