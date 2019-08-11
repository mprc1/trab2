'use strict'

var express = require('express');
var InstalacionController = require('../controllers/instalacion');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/instalacion'});


api.get('/prueba-instalacion', md_auth.ensureAuth, InstalacionController.pruebas);
api.post('/instalacion', md_auth.ensureAuth,  InstalacionController.save);
api.get('/instalacions', InstalacionController.getAll);
api.get('/instalacion/:id', InstalacionController.getById);
api.get('/instalacionColocacion/:colocacion', InstalacionController.getByColocacion);
api.put('/update-instalacion/:id',md_auth.ensureAuth, InstalacionController.update);
api.put('/update-instalacionEstado/:id',md_auth.ensureAuth, InstalacionController.updateSubEstadoAdd);
api.put('/update-instalacionEstadoUpdate/:id',md_auth.ensureAuth, InstalacionController.updateSubEstadoUpdateById);
api.post('/upload-image-instalacion/:id',[md_auth.ensureAuth, md_upload], InstalacionController.uploadImage);
api.get('/get-image-instalacion/:imageFile', InstalacionController.getImageFile);

module.exports = api;