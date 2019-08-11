/**
 * Created by VICTOR OQUENDO on 11/28/2017.
 */
'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/users'});

api.get('/pruebas-del-controlador',md_auth.ensureAuth,  UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.login);
api.put('/update-user/:id',md_auth.ensureAuth, UserController.updateUser);
api.put('/update-userpassword/:id',md_auth.ensureAuth, UserController.updateUserPassword);
api.post('/upload-image-user/:id',[md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-file/:imageFile', UserController.getImageFile);
api.get('/keepers', UserController.getKeepers);
api.get('/users', UserController.getAll);




module.exports = api;