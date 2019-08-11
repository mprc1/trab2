'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PedidoSchema = Schema({

    total: Number,
    descripcion: String,
    fecha: Date,
    fecha_fin: Date,
    estado: String, //0: proceso - 1: finalizado
    cliente: {type: Schema.ObjectId, ref: 'Cliente'},
    responsable: {type: Schema.ObjectId, ref: 'User'},
    borrado : Number

});

module.exports = mongoose.model('Pedido', PedidoSchema);