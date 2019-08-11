'use strict'

// modulos
var fs = require('fs');
var path = require('path');

// fabricacions
var Fabricacion = require('../models/fabricacion');

// acciones
function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando el controlado de fabricacion y la accion de pruebas',
        fabricacion: req.fabricacion
    });
}


function save(req, res) {
    var fabricacion = new Fabricacion();

    var params = req.body;

    if (params.pedido) {
        fabricacion.pedido = params.pedido;
        fabricacion.responsable = params.responsable;
        fabricacion.estado = params.estado;
        fabricacion.materiales = params.materiales;
        fabricacion.estadoGeneral = params.estadoGeneral;
        fabricacion.borrado = params.borrado;

        fabricacion.save((err, fabricacionStored)=> {
            if (err) {
                res.status(500).send({message: 'error en el servidor...'});
            } else {
                if (!fabricacionStored) {
                    res.status(404).send({message: 'No se ha guardado el fabricacion...'});
                } else {
                    res.status(200).send({fabricacion: fabricacionStored});
                }
            }
        });
    } else {
        res.status(500).send({message: 'pedido  obligatorio...'});
    }
}

function getAll(req, res) {
    Fabricacion.find({"borrado":0})
        .populate({path:'pedido', populate:[{path: 'pedido', populate:[{path:'cliente'},{path:'responsable'}]},{path: 'modelo'}]
        })
        .populate({path: 'responsable'})
        .populate({path: 'modelo'})
        .populate({path: 'materiales.materiaPrima'})
        .exec((err, fabricacions)=> {

        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!fabricacions) {
                res.status(404).send({message: 'No hay informacion...'});
            } else {
                res.status(200).send({fabricacions: fabricacions});
            }
        }
    });

}

function getAllFinalizado(req, res) {
    Fabricacion.find({"borrado":0, "estadoGeneral": "Finalizado"})
        .populate({path:'pedido', populate:[{path: 'pedido', populate:[{path:'cliente'},{path:'responsable'}]},{path: 'modelo'}]
        })
        .populate({path: 'responsable'})
        .populate({path: 'modelo'})
        .populate({path: 'materiales.materiaPrima'})
        .exec((err, fabricacions)=> {

            if (err) {
                res.status(500).send({message: 'error en la peticion...'});
            } else {
                if (!fabricacions) {
                    res.status(404).send({message: 'No hay informacion...'});
                } else {
                    res.status(200).send({fabricacions: fabricacions});
                }
            }
        });

}

function getById(req, res) {
    var fabricacionId = req.params.id;

    Fabricacion.findById(fabricacionId)
        .populate({path:'pedido', populate:{path: 'pedido', populate:[{path:'cliente'},{path:'modelo'},{path:'responsable'}]}
        })
        .populate({path: 'responsable'})
        .populate({path: 'materiales.materiaPrima'})
        .exec((err, fabricacion)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!fabricacion) {
                res.status(404).send({message: 'No  hay fabricacion...'});
            } else {
                res.status(200).send({fabricacion: fabricacion});
            }
        }
    });
}


function getByPedidoDetalle(req, res) {
    var pedidoDetalle = req.params.pedidodetalle;

    Fabricacion.findOne({"pedido":pedidoDetalle })
        .populate({path:'pedido', populate:{path: 'pedido', populate:[{path:'cliente'},{path:'modelo'},{path:'responsable'}]}
        })
        .populate({path: 'responsable'})
        .populate({path: 'materiales.materiaPrima'})
        .exec((err, fabricacion)=> {
            if (err) {
                res.status(500).send({message: 'error en la peticion...'});
            } else {
                if (!fabricacion) {
                    res.status(404).send({message: 'No  hay fabricacion...'});
                } else {
                    res.status(200).send({fabricacion: fabricacion});
                }
            }
        });
}

function update(req, res) {
    var fabricacionId = req.params.id;
    var update = req.body;

    Fabricacion.findByIdAndUpdate(fabricacionId, update, {new: true}, (err, fabricacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!fabricacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el fabricacion...'});
            } else {
                res.status(200).send({fabricacion: fabricacionUpdated});
            }
        }
    });
}

function updateSubEstadoAdd(req, res) {
    var fabricacionId = req.params.id;
    var update = req.body;

    Fabricacion.findByIdAndUpdate(fabricacionId,{$push: {"estado" : update}} , {new: true}, (err, fabricacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!fabricacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el fabricacion...'});
            } else {
                res.status(200).send({fabricacion: fabricacionUpdated});
            }
        }
    });
}

function updateSubEstadoUpdateById(req, res) {
    var fabricacionId = req.params.id;
    var update = req.body;

    Fabricacion.findOneAndUpdate({"_id" : fabricacionId, "estado._id": update._id},{$set: { 'estado.$.descripcion' :update.descripcion, 'estado.$.fecha':update.fecha}} ,{new: true},  (err, fabricacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'+update.descripcion});
        } else {
            if (!fabricacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el fabricacion...'});
            } else {
                res.status(200).send({fabricacion: fabricacionUpdated});
            }
        }
    });
}

function updateSubMaterialAdd(req, res) {
    var fabricacionId = req.params.id;
    var update = req.body;

    Fabricacion.findByIdAndUpdate(fabricacionId,{$push: {"materiales" : update}} , {new: true}, (err, fabricacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'});
        } else {
            if (!fabricacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el fabricacion...'});
            } else {
                res.status(200).send({fabricacion: fabricacionUpdated});
            }
        }
    });
}


function updateSubMaterialUpdateById(req, res) {
    var fabricacionId = req.params.id;
    var update = req.body;

    Fabricacion.findOneAndUpdate({"_id" : fabricacionId, "materiales._id": update._id},
        {$set: { 'materiales.$.cantidad' :update.cantidad, 'materiales.$.uMedida':update.uMedida, 'materiales.$.estado':update.estado}},
        {new: true},  (err, fabricacionUpdated)=> {
        if (err) {
            res.status(500).send({message: 'error en la peticion...'+update.descripcion});
        } else {
            if (!fabricacionUpdated) {
                res.status(404).send({message: 'No se ha actualizado el fabricacion...'});
            } else {
                res.status(200).send({fabricacion: fabricacionUpdated});
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
    updateSubMaterialAdd,
    updateSubEstadoUpdateById,
    updateSubMaterialUpdateById,
    getAllFinalizado,
    getByPedidoDetalle
}