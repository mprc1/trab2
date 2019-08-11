'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// personals
var Personal = require('../models/personal');

// acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando el controlado de personal y la accion de pruebas',
        personal: req.personal
    });
}


function save(req, res) {
    var personal = new Personal();

    var params = req.body;

    if (params.ci) {
        personal.ci = params.ci;
        personal.apellido = params.apellido;
        personal.nombre = params.nombre;
        personal.direccion = params.direccion;
        personal.telefono = params.telefono;
        personal.email = params.email;
        personal.borrado = params.borrado;
        personal.imagen = "noimage.png";



        personal.save((err, personalStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!personalStored) {
                    res.status(404).send({message: 'No se ha guardado el personal...'});
                } else {
                    res.status(200).send({personal: personalStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'nombre  obligatorio...'});
    }
}

function getAll(req, res) {
    Personal.find({"borrado":0}).exec((err, personals)=> {

        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!personals) {
                res.status(404).send({message: 'No hay informacion...'});
            } else {
                res.status(200).send({personals: personals});
            }
        }
    });

}

function getById(req, res) {
    var personalId = req.params.id;

    Personal.findById(personalId).exec((err, personal)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!personal) {
                res.status(404).send({message: 'No  hay personal...'});
            } else {
                res.status(200).send({personal: personal});
            }
        }
    });
}

function update(req, res) {
    var personalId = req.params.id;
    var update = req.body;

    Personal.findByIdAndUpdate(personalId, update, {new: true}, (err, personalUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!personalUpdated) {
                res.status(404).send({message: 'No se ha actualizado el personal...'});
            } else {
                res.status(200).send({personal: personalUpdated});
            }
        }
    });
}

function uploadImage(req, res) {
    var personalId = req.params.id;
    var file_name = 'No subido...';

    if (req.files) {
        var file_path = req.files.imagen.path;
        var file_split = file_path.split('/');
        var file_name = file_split[2];

        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif') {


            Personal.findByIdAndUpdate(personalId, {imagen: file_name}, {new: true}, (err, personalUpdated)=> {
                if (err) {
                    res.status(500).send({
                        message: 'Error al actualizar imagen personal'
                    });
                } else {
                    if (!personalUpdated) {
                        res.status(404).send({
                            message: 'No se ha podido actualizar el personal'
                        });
                    } else {
                        res.status(200).send({personal: personalUpdated, imagen: file_name});
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
    var path_file = './upload/personal/' + imageFile;

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