'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// colocacions
var Colocacion = require('../models/colocacion');

// acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando el controlado de colocacion y la accion de pruebas',
        colocacion: req.colocacion
    });
}


function save(req, res) {
    var colocacion = new Colocacion();

    var params = req.body;

    if (params.pedido) {
        colocacion.pedido = params.pedido;
        colocacion.responsable = params.responsable;
        colocacion.estado = params.estado;
        colocacion.estadoGeneral = params.estadoGeneral;
        colocacion.borrado = params.borrado;

        colocacion.save((err, colocacionStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!colocacionStored) {
                    res.status(404).send({message: 'No se ha guardado el colocacion...'});
                } else {
                    res.status(200).send({colocacion: colocacionStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'pedido  obligatorio...'});
    }
}

function getAll(req, res) {
    Colocacion.find({"borrado":0})
        .populate({path:'pedido', populate:[{path: 'pedido' , populate:[{path: 'modelo'}, {path:'pedido', populate:[{path:'cliente'},{path:'responsable'}]} ]}]
        })
        .populate({path: 'responsable'})
        .exec((err, colocacions)=> {

            if (err) {
                res.status(500).send({message: 'error en la peticion...'});
            } else {
                if (!colocacions) {
                    res.status(404).send({message: 'No hay informacion...'});
                } else {
                    res.status(200).send({colocacions: colocacions});
                }
            }
        });

}

function getAllFinalizado(req, res) {
    Colocacion.find({"borrado":0, "estadoGeneral": "Finalizado"})
        .populate({path:'pedido', populate:[{path: 'pedido', populate :{path:'pedido', populate:[{path:'cliente'},{path:'responsable'}]}}, {path:'modelo'}]
        })
        .populate({path: 'responsable'})
        .exec((err, colocacions)=> {

            if (err) {
                res.status(500).send({message: 'error en la peticion...'});
            } else {
                if (!colocacions) {
                    res.status(404).send({message: 'No hay informacion...'});
                } else {
                    res.status(200).send({colocacions: colocacions});
                }
            }
        });

}

function getById(req, res) {
    var colocacionId = req.params.id;

    Colocacion.findById(colocacionId)
        .populate({path:'pedido', populate:{path: 'pedido', populate:[{path:'cliente'},{path:'modelo'},{path:'responsable'}]}
        })
        .populate({path: 'responsable'})
        .exec((err, colocacion)=> {
            if (err) {
                res.status(500).send({message: 'error en la peticion...'});
            } else {
                if (!colocacion) {
                    res.status(404).send({message: 'No  hay colocacion...'});
                } else {
                    res.status(200).send({colocacion: colocacion});
                }
            }
        });
}

function getByFabricacion(req, res) {
    var fabricacion = req.params.fabricacion;

    Colocacion.findOne({"pedido": fabricacion})
        .populate({path:'pedido', populate:{path: 'pedido', populate:[{path:'cliente'},{path:'modelo'},{path:'responsable'}]}
        })
        .populate({path: 'responsable'})
        .exec((err, colocacion)=> {
            if (err) {
                res.status(500).send({message: 'error en la peticion...'});
            } else {
                if (!colocacion) {
                    res.status(404).send({message: 'No  hay colocacion...'});
                } else {
                    res.status(200).send({colocacion: colocacion});
                }
            }
        });
}

function update(req, res) {
    var colocacionId = req.params.id;
    var update = req.body;

    Colocacion.findByIdAndUpdate(colocacionId, update, {new: true}, (err, colocacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!colocacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el colocacion...'});
            } else {
                res.status(200).send({colocacion: colocacionUpdated});
            }
        }
    });
}

function updateSubEstadoAdd(req, res) {
    var colocacionId = req.params.id;
    var update = req.body;

    Colocacion.findByIdAndUpdate(colocacionId,{$push: {"estado" : update}} , {new: true}, (err, colocacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!colocacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el colocacion...'});
            } else {
                res.status(200).send({colocacion: colocacionUpdated});
            }
        }
    });
}

function updateSubEstadoUpdateById(req, res) {
    var colocacionId = req.params.id;
    var update = req.body;

    Colocacion.findOneAndUpdate({"_id" : colocacionId, "estado._id": update._id},{$set: { 'estado.$.descripcion' :update.descripcion, 'estado.$.fecha':update.fecha}} ,{new: true},  (err, colocacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'+update.descripcion});
        } else {
            if (!colocacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el colocacion...'});
            } else {
                res.status(200).send({colocacion: colocacionUpdated});
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
    updateSubEstadoAdd,
    updateSubEstadoUpdateById,
    getAllFinalizado,
    getByFabricacion
}