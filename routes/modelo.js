'use strict'

var express = require('express');
var ModeloController = require('../controllers/modelo');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/modelo'});


api.get('/prueba-modelo', md_auth.ensureAuth, ModeloController.pruebas);
api.post('/modelo', md_auth.ensureAuth,  ModeloController.save);
api.get('/modelos', ModeloController.getAll);
api.get('/modelo/:id', ModeloController.getById);
api.put('/update-modelo/:id',md_auth.ensureAuth, ModeloController.update);
api.post('/upload-image-modelo/:id',[md_auth.ensureAuth, md_upload], ModeloController.uploadImage);
api.get('/get-image-modelo/:imageFile', ModeloController.getImageFile);

module.exports = api;