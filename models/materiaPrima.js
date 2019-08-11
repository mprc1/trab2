'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MateriaPrimaSchema = Schema({

    descripcion: String,
    uMedida: String,
    color: String,
    stock: Number,
    imagen: String,
    borrado : Number,
    categoria:{type: Schema.ObjectId, ref:'CategoriaMaterial'}

});

module.exports = mongoose.model('MateriaPrima', MateriaPrimaSchema);