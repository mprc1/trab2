'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IvaSchema = Schema({

    nombre: String,
    valor : Number,
    borrado : Number

});

module.exports = mongoose.model('Iva', IvaSchema);