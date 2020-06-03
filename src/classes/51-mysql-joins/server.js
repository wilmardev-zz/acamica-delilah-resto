const express = require("express");
const bodyParser = require("body-parser");
const config = require("../../config/development").config;
const { sequelize } = require("./db/my-sql-db");
const app = express();
const apiUrl = "/api/v1/acamica";

app.use(bodyParser.json());

// get all songs
app.get(apiUrl + "/songs", (req, res) => {
  return sequelize
    .query("select * from vw_canciones", { type: sequelize.QueryTypes.SELECT })
    .then((songs) => res.json(songs));
});

app.listen(config.Port, () => {
  console.log(`Servidor iniciado en el puerto ${config.Port}`);
});
