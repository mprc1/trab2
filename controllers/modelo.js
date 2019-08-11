'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// modelos
var Modelo = require('../models/modelo');

// acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando el controlado de modelo y la accion de pruebas',
        modelo: req.modelo
    });
}


function save(req, res) {
    var modelo = new Modelo();

    var params = req.body;

    if (params.nombre) {
        modelo.nombre = params.nombre;
        modelo.descripcion = params.descripcion;
        modelo.imagen = "noimage.png";
        modelo.precio = params.precio;
        modelo.categoria = params.categoria;
        modelo.borrado = params.borrado;

        modelo.save((err, modeloStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!modeloStored) {
                    res.status(404).send({message: 'No se ha guardado el modelo...'});
                } else {
                    res.status(200).send({modelo: modeloStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'nombre  obligatorio...'});
    }
}

function getAll(req, res) {
    Modelo.find({"borrado":0}).populate({path: 'categoria'}).exec((err, modelos)=> {

        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!modelos) {
                res.status(404).send({message: 'No hay informacion...'});
            } else {
                res.status(200).send({modelos: modelos});
            }
        }
    });

}

function getById(req, res) {
    var modeloId = req.params.id;

    Modelo.findById(modeloId).populate({path: 'categoria'}).exec((err, modelo)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!modelo) {
                res.status(404).send({message: 'No  hay modelo...'});
            } else {
                res.status(200).send({modelo: modelo});
            }
        }
    });
}

function update(req, res) {
    var modeloId = req.params.id;
    var update = req.body;

    Modelo.findByIdAndUpdate(modeloId, update, {new: true}, (err, modeloUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!modeloUpdated) {
                res.status(404).send({message: 'No se ha actualizado el modelo...'});
            } else {
                res.status(200).send({modelo: modeloUpdated});
            }
        }
    });
}

function uploadImage(req, res) {
    var modeloId = req.params.id;
    var file_name = 'No subido...';

    if (req.files) {
        var file_path = req.files.imagen.path;
        var file_split = file_path.split('/');
        var file_name = file_split[2];

        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif') {


            Modelo.findByIdAndUpdate(modeloId, {imagen: file_name}, {new: true}, (err, modeloUpdated)=> {
                if (err) {
                    res.status(500).send({
                        message: 'Error al actualizar modelo'
                    });
                } else {
                    if (!modeloUpdated) {
                        res.status(404).send({
                            message: 'No se ha podido actualizar el modelo'
                        });
                    } else {
                        res.status(200).send({modelo: modeloUpdated, imagen: file_name});
                    }
                }
            });

        } else {

            fs.unlink(file_path, (err)=> {
                if (err) {
                    res.status(200).send({
                        message: 'Extension no valida y fichero no borrado'
                    });
                } else {
                    res.status(200).send({
                        message: 'Extension no valida'
                    });
                }
            })

        }

    } else {
        res.status(200).send({
            message: 'No se ha subido fichero'
        });
    }
}

function getImageFile(req, res) {
    var imageFile = req.params.imageFile;
    var path_file = './upload/modelo/' + imageFile;

    fs.exists(path_file, function (exists) {
        if (exists) {
            res.sendFile(path.resolve(path_file));
        } else {
            res.status(404).send({
                message: 'La imagen no existe'

            });
        }
    });
}

module.exports = {
    pruebas,
    save,
    getAll,
    getById,
    update,
    uploadImage,
    getImageFile
}