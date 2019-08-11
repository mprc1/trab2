'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// instalacions
var Instalacion = require('../models/instalacion');

// acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando el controlado de instalacion y la accion de pruebas',
        instalacion: req.instalacion
    });
}


function save(req, res) {
    var instalacion = new Instalacion();

    var params = req.body;

    if (params.pedido) {
        instalacion.pedido = params.pedido;
        instalacion.responsable = params.responsable;
        instalacion.estado = params.estado;
        instalacion.estadoGeneral = params.estadoGeneral;
        instalacion.direccion = params.direccion;
        instalacion.borrado = params.borrado;
        instalacion.imagen = "noimage.png";

        instalacion.save((err, instalacionStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!instalacionStored) {
                    res.status(404).send({message: 'No se ha guardado el instalacion...'});
                } else {
                    res.status(200).send({instalacion: instalacionStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'pedido  obligatorio...'});
    }
}

function getAll(req, res) {
    Instalacion.find({"borrado":0})
        .populate({path:'pedido', populate:[{path: 'pedido' , populate:[{path: 'pedido' , populate:[{path: 'modelo'}, {path:'pedido', populate:[{path:'cliente'},{path:'responsable'}]} ]}]}]
        //.populate({path:'pedido', populate:{path: 'pedido', populate:[{path:'cliente'},{path:'modelo'},{path:'responsable'}]}
        })
        .populate({path: 'responsable'})
        .exec((err, instalacions)=> {

            if (err) {
                res.status(500).send({message: 'error en la peticion...'});
            } else {
                if (!instalacions) {
                    res.status(404).send({message: 'No hay informacion...'});
                } else {
                    res.status(200).send({instalacions: instalacions});
                }
            }
        });
}

function getById(req, res) {
    var instalacionId = req.params.id;

    Instalacion.findById(instalacionId)
        .populate({path:'pedido', populate:{path: 'pedido', populate:[{path:'cliente'},{path:'modelo'},{path:'responsable'}]}
        })
        .populate({path: 'responsable'})
        .exec((err, instalacion)=> {
            if (err) {
                res.status(500).send({message: 'error en la peticion...'});
            } else {
                if (!instalacion) {
                    res.status(404).send({message: 'No  hay instalacion...'});
                } else {
                    res.status(200).send({instalacion: instalacion});
                }
            }
        });
}

function getByColocacion(req, res) {
    var colocacion = req.params.colocacion;

    Instalacion.findOne({"pedido":colocacion})
        .populate({path:'pedido', populate:{path: 'pedido', populate:[{path:'cliente'},{path:'modelo'},{path:'responsable'}]}
        })
        .populate({path: 'responsable'})
        .exec((err, instalacion)=> {
            if (err) {
                res.status(500).send({message: 'error en la peticion...'});
            } else {
                if (!instalacion) {
                    res.status(404).send({message: 'No  hay instalacion...'});
                } else {
                    res.status(200).send({instalacion: instalacion});
                }
            }
        });
}

function update(req, res) {
    var instalacionId = req.params.id;
    var update = req.body;

    Instalacion.findByIdAndUpdate(instalacionId, update, {new: true}, (err, instalacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!instalacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el instalacion...'});
            } else {
                res.status(200).send({instalacion: instalacionUpdated});
            }
        }
    });
}

function updateSubEstadoAdd(req, res) {
    var instalacionId = req.params.id;
    var update = req.body;

    Instalacion.findByIdAndUpdate(instalacionId,{$push: {"estado" : update}} , {new: true}, (err, instalacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!instalacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el instalacion...'});
            } else {
                res.status(200).send({instalacion: instalacionUpdated});
            }
        }
    });
}

function updateSubEstadoUpdateById(req, res) {
    var instalacionId = req.params.id;
    var update = req.body;

    Instalacion.findOneAndUpdate({"_id" : instalacionId, "estado._id": update._id},{$set: { 'estado.$.descripcion' :update.descripcion, 'estado.$.fecha':update.fecha}} ,{new: true},  (err, instalacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'+update.descripcion});
        } else {
            if (!instalacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el instalacion...'});
            } else {
                res.status(200).send({instalacion: instalacionUpdated});
            }
        }
    });
}


function uploadImage(req, res) {
    var instalacionId = req.params.id;
    var file_name = 'No subido...';

    if (req.files) {
        var file_path = req.files.imagen.path;
        var file_split = file_path.split('/');
        var file_name = file_split[2];

        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif') {


            Instalacion.findByIdAndUpdate(instalacionId, {imagen: file_name}, {new: true}, (err, instalacionUpdated)=> {
                if (err) {
                    res.status(500).send({
                        message: 'Error al actualizar Instalacion imagen'
                    });
                } else {
                    if (!instalacionUpdated) {
                        res.status(404).send({
                            message: 'No se ha podido actualizar el instalacion'
                        });
                    } else {
                        res.status(200).send({instalacion: instalacionUpdated, imagen: file_name});
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
    var path_file = './upload/instalacion/' + imageFile;

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
    updateSubEstadoAdd,
    updateSubEstadoUpdateById,
    uploadImage,
    getImageFile,
    getByColocacion
}