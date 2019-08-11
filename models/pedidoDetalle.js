'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PedidoDetalleSchema = Schema({

    ancho: Number,
    alto: Number,
    cantidad: Number,
    pvp: Number,
    descuento: Number,
    iva: Number,
    total: Number,
    descripcion: String,
    estado: String, //0: proceso - 1: finalizado
    pedido: {type: Schema.ObjectId, ref: 'Pedido'},
    modelo: {type: Schema.ObjectId, ref: 'Modelo'},
    borrado : Number

});

module.exports = mongoose.model('PedidoDetalle', PedidoDetalleSchema);