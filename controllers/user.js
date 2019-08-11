/**
 * Created by VICTOR OQUENDO on 11/28/2017.
 */
'use strict'
// modulos
var bcrypt = require('bcrypt-nodejs');
var fs = require('fs');
var path = require('path');

// modelos
var User = require('../models/user');


// servicio jwt
var jwt = require('../services/jwt');

// acciones
function pruebas(req, res) {

    res.status(200).send({
        message: 'Probando el controlado de usuarios y la accion pruebas',
        user: req.user
    });
}

function saveUser(req, res) {

    // crear objeto usuario
    var user = new User();

    // Recoger parametros peticion
    var params = req.body;

    // Asignar valores al objeto usuario
    if (params.password && params.name && params.surname && params.email) {
        user.name = params.name;
        user.surname = params.surname;
        user.email = params.email;
        user.role = params.role;
        user.borrado = params.borrado;
        user.image = "noimage.png";

        User.findOne({email: user.email.toLowerCase()}, (err, issetUser) => {
            if (err) {
                res.status(500).send('Error al comprobar el objeto usuario');
            } else {
                if (!issetUser) {
                    bcrypt.hash(params.password, null, null, function (err, hash) {
                        user.password = hash;

                        //Guardar objeto usuario en bd
                        user.save((err, userStored) => {
                            if (err) {
                                res.status(500).send('Error al guardar el objeto usuario');
                            } else {
                                if (!userStored) {
                                    res.status(404).send('No se ha registrado el usuario');
                                } else {
                                    res.status(200).send({user: userStored});
                                }
                            }
                        });
                    });
                } else {
                    res.status(200).send({
                        message: 'El usuario no puede registrarse'
                    });
                }
            }
        });

        // Cifrar contrasena

    } else {
        res.status(200).send({
            message: 'Introduce datos correctos para registrar el objeto'
        });
    }
}


function login(req, res) {

    // Recoger parametros peticion
    var params = req.body;

    var email = params.email;
    var password = params.password;

    User.findOne({email: email.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500).send({message: 'Error al comprobar el objeto usuario'});
        } else {
            if (user) {
                bcrypt.compare(password, user.password, (err, check) => {
                    if (check) {
                        // Comprobar y generar token
                        if (params.gettoken) {
                            //devolver token
                            res.status(200).send({
                                token: jwt.createToken(user)
                            });
                        } else {
                            res.status(200).send({user});
                        }

                    } else {
                        res.status(404).send({
                            message: 'El usuario no ha podido loguearse correctamente'
                        });
                    }
                })
            } else {
                res.status(404).send({
                    message: 'El usuario no ha podido loguearse'
                });
            }
        }
    });
}

function updateUser(req, res) {

    var userId = req.params.id;
    var update = req.body;
    delete update.password;

    if (userId != req.user.sub) {
        return res.status(500).send({
            message: 'No tiene permisos para actualizar el usuario'
        });
    }
    User.findByIdAndUpdate(userId, update, {new: true}, (err, userUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar usuario'
            });
        } else {
            if (!userUpdated) {
                res.status(404).send({
                    message: 'No se ha podido actualizar el usuario'
                });
            } else {
                res.status(200).send({user: userUpdated});
            }
        }
    });
}


function updateUserPassword(req, res) {

    var userId = req.params.id;
    var update = req.body;
    if(update.password== "aaaa"){
        delete update.password;
        User.findByIdAndUpdate(userId, update, {new: true}, (err, userUpdated) => {
            if (err) {
                res.status(500).send({
                    message: 'Error al actualizar usuario'
                });
            } else {
                if (!userUpdated) {
                    res.status(404).send({
                        message: 'No se ha podido actualizar el usuario'
                    });
                } else {
                    res.status(200).send({user: userUpdated});
                }
            }
        });


    }else{
        bcrypt.hash(update.password, null, null, function (err, hash) {
            update.password = hash;


            User.findByIdAndUpdate(userId, update, {new: true}, (err, userUpdated) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error al actualizar usuario'
                    });
                } else {
                    if (!userUpdated) {
                        res.status(404).send({
                            message: 'No se ha podido actualizar el usuario'
                        });
                    } else {
                        res.status(200).send({user: userUpdated});
                    }
                }
            });
        });
    }

    /*if (userId != req.user.sub) {
        return res.status(500).send({
            message: 'No tiene permisos para actualizar el usuario'
        });
    }*/


}


function uploadImage(req, res) {
    var userId = req.params.id;
    var file_name = 'No subido...';

    if (req.files) {
        var file_path = req.files.image.path;
        var file_split = file_path.split('/');
        var file_name = file_split[2];

        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif') {

            if (userId != req.user.sub) {
                return res.status(500).send({
                    message: 'No tiene permisos para actualizar el usuario'
                });
            }
            User.findByIdAndUpdate(userId, {image: file_name}, {new: true}, (err, userUpdated) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error al actualizar usuario'
                    });
                } else {
                    if (!userUpdated) {
                        res.status(404).send({
                            message: 'No se ha podido actualizar el usuario'
                        });
                    } else {
                        res.status(200).send({user: userUpdated, image: file_name});
                    }
                }
            });

        } else {

            fs.unlink(file_path, (err) => {
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
    var path_file = './upload/users/' + imageFile;

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

function getKeepers(req, res) {
    User.find({role: 'ROLE_ADMIN'}).exec((err, users) => {
        if (err) {
            res.status(500).send({message: 'error en la peticion'});
        } else {
            if (!users) {
                res.status(404).send({message: 'No hay cuidadores'});
            } else {
                res.status(200).send({users});
            }
        }
    });
}


function getAll(req, res) {
    User.find({"borrado":0}).exec((err, users) => {
        if (err) {
            res.status(500).send({message: 'error en la peticion'});
        } else {
            if (!users) {
                res.status(404).send({message: 'No hay cuidadores'});
            } else {
                res.status(200).send({users});
            }
        }
    });
}

module.exports = {
    pruebas,
    saveUser,
    login,
    updateUser,
    uploadImage,
    getImageFile,
    getKeepers,
    updateUserPassword,
    getAll
};

