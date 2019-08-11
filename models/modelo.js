'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModeloSchema = Schema({

    nombre: String,
    descripcion: String,
    imagen: String,
    precio: Number,
    categoria:{type: Schema.ObjectId, ref:'Categoria'},
    borrado : Number

});

module.exports = mongoose.model('Modelo', ModeloSchema);