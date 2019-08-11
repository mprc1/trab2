'use strict'

var mongoose = require('mongoose');

var SchemaSubEstado = mongoose.Schema;
var EstadoSchema = SchemaSubEstado({
    descripcion: String,
    fecha: Date
});


var Schema = mongoose.Schema;
var ColocacionSchema = Schema({

    estado: [{type: EstadoSchema}],
    pedido: {type: Schema.ObjectId, ref: 'Fabricacion'},
    responsable: {type: Schema.ObjectId, ref: 'User'},
    estadoGeneral: String, //0: proceso - 1: finalizado
    borrado : Number

});

module.exports = mongoose.model('Colocacion', ColocacionSchema);