'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonalSchema = Schema({

    ci: String,
    apellido: String,
    nombre: String,
    direccion: String,
    telefono: String,
    email: String,
    imagen: String,
    borrado : Number

});

module.exports = mongoose.model('Personal', PersonalSchema);