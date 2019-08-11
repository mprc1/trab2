'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// modelos
var Iva = require('../models/iva');

// acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando el controlado de iva y la accion de pruebas',
        iva: req.iva
    });
}


function save(req, res) {
    var iva = new Iva();

    var params = req.body;

    if (params.nombre) {
        iva.nombre = params.nombre;
        iva.valor = params.valor;
        iva.borrado = params.borrado;

        iva.save((err, ivaStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!ivaStored) {
                    res.status(404).send({message: 'No se ha guardado el iva...'});
                } else {
                    res.status(200).send({iva: ivaStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'nombre  obligatorio...'});
    }
}

function getAll(req, res) {
    Iva.find({"borrado":0}).exec((err, ivas)=> {

        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!ivas) {
                res.status(404).send({message: 'No hay informacion...'});
            } else {
                res.status(200).send({ivas: ivas});
            }
        }
    });

}

function getById(req, res) {
    var ivaId = req.params.id;

    Iva.findById(ivaId).exec((err, iva)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!iva) {
                res.status(404).send({message: 'No  hay iva...'});
            } else {
                res.status(200).send({iva: iva});
            }
        }
    });
}

function update(req, res) {
    var ivaId = req.params.id;
    var update = req.body;

    Iva.findByIdAndUpdate(ivaId, update, {new: true}, (err, ivaUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!ivaUpdated) {
                res.status(404).send({message: 'No se ha actualizado el iva...'});
            } else {
                res.status(200).send({iva: ivaUpdated});
            }
        }
    });
}


module.exports = {
    pruebas,
    save,
    getAll,
    getById,
    update
}