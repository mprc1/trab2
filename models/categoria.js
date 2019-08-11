'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaSchema = Schema({

    nombre: String,
    descripcion : String,
    borrado : Number

});

module.exports = mongoose.model('Categoria', CategoriaSchema);