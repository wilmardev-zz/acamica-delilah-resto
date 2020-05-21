'use strict';
const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const mySchema = Schema(
    { name: String , date : Date } , /* { versionKey: false }*/);

module.exports = mongoose.model('acamicaModel', mySchema);
