'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// materiaPrimas
var MateriaPrima = require('../models/materiaPrima');

// acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando el controlado de materiaPrima y la accion de pruebas',
        materiaPrima: req.materiaPrima
    });
}


function save(req, res) {
    var materiaPrima = new MateriaPrima();

    var params = req.body;

    if (params.descripcion) {
        materiaPrima.descripcion = params.descripcion;
        materiaPrima.uMedida = params.uMedida;
        materiaPrima.color = params.color;
        materiaPrima.stock = params.stock;
        materiaPrima.borrado = params.borrado;
        materiaPrima.categoriaMaterial = params.categoria;
        materiaPrima.imagen = "noimage.png";



        materiaPrima.save((err, materiaPrimaStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!materiaPrimaStored) {
                    res.status(404).send({message: 'No se ha guardado el materiaPrima...'});
                } else {
                    res.status(200).send({materiaPrima: materiaPrimaStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'nombre  obligatorio...'});
    }
}

function getAll(req, res) {
    MateriaPrima.find({"borrado":0}).populate({path: 'categoria'}).exec((err, materiaPrimas)=> {

        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!materiaPrimas) {
                res.status(404).send({message: 'No hay informacion...'});
            } else {
                res.status(200).send({materiaPrimas: materiaPrimas});
            }
        }
    });

}

function getById(req, res) {
    var materiaPrimaId = req.params.id;

    MateriaPrima.findById(materiaPrimaId).populate({path: 'categoria'}).exec((err, materiaPrima)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!materiaPrima) {
                res.status(404).send({message: 'No  hay materiaPrima...'});
            } else {
                res.status(200).send({materiaPrima: materiaPrima});
            }
        }
    });
}

function update(req, res) {
    var materiaPrimaId = req.params.id;
    var update = req.body;

    MateriaPrima.findByIdAndUpdate(materiaPrimaId, update, {new: true}, (err, materiaPrimaUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!materiaPrimaUpdated) {
                res.status(404).send({message: 'No se ha actualizado el materiaPrima...'});
            } else {
                res.status(200).send({materiaPrima: materiaPrimaUpdated});
            }
        }
    });
}


function updateStock(req, res) {
    var materiaPrimaId = req.params.id;
    var update = req.body;


    MateriaPrima.findByIdAndUpdate(materiaPrimaId, update.stock, {new: true}, (err, materiaPrimaUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!materiaPrimaUpdated) {
                res.status(404).send({message: 'No se ha actualizado el materiaPrima...'});
            } else {
                res.status(200).send({materiaPrima: materiaPrimaUpdated});
            }
        }
    });
}


function uploadImage(req, res) {
    var materiaPrimaId = req.params.id;
    var file_name = 'No subido...';

    if (req.files) {
        var file_path = req.files.imagen.path;
        var file_split = file_path.split('/');
        var file_name = file_split[2];

        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif') {


            MateriaPrima.findByIdAndUpdate(materiaPrimaId, {imagen: file_name}, {new: true}, (err, materiaPrimaUpdated)=> {
                if (err) {
                    res.status(500).send({
                        message: 'Error al actualizar materiaPrima imagen'
                    });
                } else {
                    if (!materiaPrimaUpdated) {
                        res.status(404).send({
                            message: 'No se ha podido actualizar el materiaPrima'
                        });
                    } else {
                        res.status(200).send({materiaPrima: materiaPrimaUpdated, imagen: file_name});
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
    var path_file = './upload/materiaPrima/' + imageFile;

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
    getImageFile,
    updateStock

}