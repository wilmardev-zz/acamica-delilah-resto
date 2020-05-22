'use strict';
const express = require('express');
const mongoose = require('mongoose');
const ENV = process.env.NODE_ENV || "development";
const config = require("../../../config/" + ENV).config;

global.db = mongoose.connect(config.Url_db, {useUnifiedTopology: true, useNewUrlParser: true});

const routes = require('./routes');

const app = express();
app.get('/', routes.home);
app.get('/insert/:name', routes.insert);
app.get('/search/:name', routes.search);
app.get('/update/:name', routes.update);
app.get('/update/v2/:name', routes.update_v2);
app.get('/delete/:name', routes.delete);
app.get('/model', routes.modelName);

app.listen(config.Port, function () {
    console.log('listening on http://localhost:5500');
});
