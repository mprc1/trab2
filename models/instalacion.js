'use strict'

var mongoose = require('mongoose');

var SchemaSubEstado = mongoose.Schema;
var EstadoSchema = SchemaSubEstado({
    descripcion: String,
    fecha: Date
});

var Schema = mongoose.Schema;
var InstalacionSchema = Schema({

    direccion: String,
    estado: [{type: EstadoSchema}],
    pedido: {type: Schema.ObjectId, ref: 'Colocacion'},
    responsable: {type: Schema.ObjectId, ref: 'User'},
    estadoGeneral: String, //0: proceso - 1: finalizado
    borrado : Number,
    imagen: String

});

module.exports = mongoose.model('Instalacion', InstalacionSchema);