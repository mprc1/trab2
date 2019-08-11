'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// modelos
var Cliente = require('../models/cliente');

// acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando el controlado de cliente y la accion de pruebas',
        cliente: req.cliente
    });
}


function save(req, res) {
    var cliente = new Cliente();

    var params = req.body;

    if (params.ci && params.apellido && params.nombre && params.ciudad && params.direccion) {
        cliente.ci = params.ci;
        cliente.apellido = params.apellido;
        cliente.nombre = params.nombre;
        cliente.ciudad = params.ciudad;
        cliente.direccion = params.direccion;
        cliente.telefono = params.telefono;
        cliente.email = params.email;
        cliente.borrado = params.borrado;



        cliente.save((err, clienteStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!clienteStored) {
                    res.status(404).send({message: 'No se ha guardado el cliente...'});
                } else {
                    res.status(200).send({cliente: clienteStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'datos cliente  obligatorio...'});
    }
}

function getAll(req, res) {
    Cliente.find({"borrado":0}).exec((err, clientes)=> {

        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!clientes) {
                res.status(404).send({message: 'No hay informacion...'});
            } else {
                res.status(200).send({clientes: clientes});
            }
        }
    });

}

function getById(req, res) {
    var clienteId = req.params.id;

    Cliente.findById(clienteId).exec((err, cliente)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!cliente) {
                res.status(404).send({message: 'No  hay cliente...'});
            } else {
                res.status(200).send({cliente: cliente});
            }
        }
    });
}

function getByCi(req, res) {
    var clienteCi = req.params.ci;

    Cliente.findOne({"ci": clienteCi}).exec((err, cliente)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!cliente) {
                res.status(404).send({message: 'No  hay cliente...'});
            } else {
                res.status(200).send({cliente: cliente});
            }
        }
    });
}

function update(req, res) {
    var clienteId = req.params.id;
    var update = req.body;

    Cliente.findByIdAndUpdate(clienteId, update, {new: true}, (err, clienteUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!clienteUpdated) {
                res.status(404).send({message: 'No se ha actualizado el cliente...'});
            } else {
                res.status(200).send({cliente: clienteUpdated});
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
    getByCi
}