'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    ci: String,
    apellido: String,
    nombre: String,
    ciudad: String,
    direccion: String,
    telefono: String,
    email: String,
    borrado : Number
});

module.exports = mongoose.model('Cliente', ClienteSchema);