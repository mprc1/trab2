'use strict'

var mongoose = require('mongoose');


var SchemaSubEstado = mongoose.Schema;
var EstadoSchema = SchemaSubEstado({
    descripcion: String,
    fecha: Date
});

var SchemaSubMateriales = mongoose.Schema;
var MaterialesSchema = SchemaSubMateriales({
    materiaPrima: {type: SchemaSubMateriales.ObjectId, ref: 'MateriaPrima'},
    cantidad : Number,
    uMedida : String,
    estado: String  //suficiente - insuficiente
});


var Schema = mongoose.Schema;
var FabricacionSchema = Schema({

    estado: [{type: EstadoSchema}],
    materiales:[{type: MaterialesSchema}],
    pedido: {type: Schema.ObjectId, ref: 'PedidoDetalle'},
    responsable: {type: Schema.ObjectId, ref: 'User'},
    estadoGeneral: String, //0: proceso - 1: finalizado
    borrado : Number

});

module.exports = mongoose.model('Fabricacion', FabricacionSchema);