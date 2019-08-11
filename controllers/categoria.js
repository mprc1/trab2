'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// modelos
var Categoria = require('../models/categoria');

// acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando el controlado de categoria y la accion de pruebas',
        categoria: req.categoria
    });
}


function save(req, res) {
    var categoria = new Categoria();

    var params = req.body;

    if (params.nombre) {
        categoria.nombre = params.nombre;
        categoria.descripcion = params.descripcion;
        categoria.borrado = params.borrado;

        categoria.save((err, categoriaStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!categoriaStored) {
                    res.status(404).send({message: 'No se ha guardado el categoria...'});
                } else {
                    res.status(200).send({categoria: categoriaStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'nombre  obligatorio...'});
    }
}

function getAll(req, res) {
    Categoria.find({"borrado":0}).exec((err, categorias)=> {

        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!categorias) {
                res.status(404).send({message: 'No hay informacion...'});
            } else {
                res.status(200).send({categorias: categorias});
            }
        }
    });

}

function getById(req, res) {
    var categoriaId = req.params.id;

    Categoria.findById(categoriaId).exec((err, categoria)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!categoria) {
                res.status(404).send({message: 'No  hay categoria...'});
            } else {
                res.status(200).send({categoria: categoria});
            }
        }
    });
}

function update(req, res) {
    var categoriaId = req.params.id;
    var update = req.body;

    Categoria.findByIdAndUpdate(categoriaId, update, {new: true}, (err, categoriaUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!categoriaUpdated) {
                res.status(404).send({message: 'No se ha actualizado el categoria...'});
            } else {
                res.status(200).send({categoria: categoriaUpdated});
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