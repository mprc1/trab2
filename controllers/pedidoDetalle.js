'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// pedidos
var Pedido = require('../models/pedidoDetalle');

// acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando el controlado de pedido y la accion de pruebas',
        pedido: req.pedido
    });
}


function save(req, res) {
    var pedido = new Pedido();

    var params = req.body;

    if (params.ancho) {
        pedido.ancho = params.ancho;
        pedido.alto = params.alto;
        pedido.cantidad = params.cantidad;
        pedido.pvp = params.pvp;
        pedido.descuento = params.descuento;
        pedido.iva = params.iva;
        pedido.total = params.total;
        pedido.descripcion = params.descripcion;
        pedido.estado = params.estado;
        pedido.pedido = params.pedido;
        pedido.modelo = params.modelo;
        pedido.borrado = params.borrado;

        pedido.save((err, pedidoStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!pedidoStored) {
                    res.status(404).send({message: 'No se ha guardado el pedido...'});
                } else {
                    res.status(200).send({pedidoDetalle: pedidoStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'nombre  obligatorio...'});
    }
}

function getAll(req, res) {
    Pedido.find({"borrado":0}).populate({path: 'modelo'}).populate({path: 'pedido', populate:{path: 'cliente'}}).exec((err, pedidos)=> {

        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!pedidos) {
                res.status(404).send({message: 'No hay informacion...'});
            } else {
                res.status(200).send({pedidoDetalles: pedidos});
            }
        }
    });

}


function getAllByPedido(req, res) {
    var pedidoId = req.params.id;
    Pedido.find({"pedido":pedidoId}).populate({path: 'modelo'}).populate({path: 'pedido'}).exec((err, pedidos)=> {

        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!pedidos) {
                res.status(404).send({message: 'No hay informacion...'});
            } else {
                res.status(200).send({pedidoDetalles: pedidos});
            }
        }
    });

}


function getById(req, res) {
    var pedidoId = req.params.id;

    Pedido.findById(pedidoId).populate({path: 'modelo'}).exec((err, pedido)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!pedido) {
                res.status(404).send({message: 'No  hay pedido...'});
            } else {
                res.status(200).send({pedidoDetalle: pedido});
            }
        }
    });
}

function update(req, res) {
    var pedidoId = req.params.id;
    var update = req.body;

    Pedido.findByIdAndUpdate(pedidoId, update, {new: true}, (err, pedidoUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!pedidoUpdated) {
                res.status(404).send({message: 'No se ha actualizado el pedido...'});
            } else {
                res.status(200).send({pedidoDetalle: pedidoUpdated});
            }
        }
    });
}


function deleteById(req, res) {
    var pedidoId = req.params.id;

    Pedido.findByIdAndRemove(pedidoId).exec((err, pedido)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!pedido) {
                res.status(404).send({message: 'No  hay pedido...'});
            } else {
                res.status(200).send({pedidoDetalle: pedido});
            }
        }
    });
}



module.exports = {
    pruebas,
    save,
    getAll,
    getById,
    update,
    deleteById,
    getAllByPedido
}