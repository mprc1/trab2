'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// pedidos
var Pedido = require('../models/pedido');

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

    if (params.cliente) {

        pedido.total = params.total;
        pedido.descripcion = params.descripcion;
        pedido.fecha = params.fecha;
        pedido.fecha_fin = params.fecha_fin;
        pedido.estado = params.estado;
        pedido.cliente = params.cliente;
        pedido.responsable = params.responsable;
        pedido.borrado = params.borrado;

        pedido.save((err, pedidoStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!pedidoStored) {
                    res.status(404).send({message: 'No se ha guardado el pedido...'});
                } else {
                    res.status(200).send({pedido: pedidoStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'nombre  obligatorio...'});
    }
}

function getAll(req, res) {
    Pedido.find({"borrado":0}).populate({path: 'cliente'}).populate({path: 'responsable'}).exec((err, pedidos)=> {

        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!pedidos) {
                res.status(404).send({message: 'No hay informacion...'});
            } else {
                res.status(200).send({pedidos: pedidos});
            }
        }
    });

}

function getById(req, res) {
    var pedidoId = req.params.id;

    Pedido.findById(pedidoId).populate({path: 'cliente'}).populate({path: 'responsable'}).exec((err, pedido)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!pedido) {
                res.status(404).send({message: 'No  hay pedido...'});
            } else {
                res.status(200).send({pedido: pedido});
            }
        }
    });
}


function getByCliente(req, res) {
    var cliente = req.params.cliente;

    Pedido.findOne({"cliente":cliente}).populate({path: 'cliente'}).populate({path: 'responsable'}).exec((err, pedido)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!pedido) {
                res.status(404).send({message: 'No  hay pedido...'});
            } else {
                res.status(200).send({pedido: pedido});
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
                res.status(200).send({pedido: pedidoUpdated});
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
    getByCliente
}