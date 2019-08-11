'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaMaterialSchema = Schema({

    nombre: String,
    descripcion : String,
    borrado : Number

});

module.exports = mongoose.model('CategoriaMaterial', CategoriaMaterialSchema);