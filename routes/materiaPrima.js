'use strict'

var express = require('express');
var MateriaPrimaController = require('../controllers/materiaPrima');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/materiaPrima'});


api.get('/prueba-materiaPrima', md_auth.ensureAuth, MateriaPrimaController.pruebas);
api.post('/materiaPrima', md_auth.ensureAuth,  MateriaPrimaController.save);
api.get('/materiaPrimas', MateriaPrimaController.getAll);
api.get('/materiaPrima/:id', MateriaPrimaController.getById);
api.put('/update-materiaPrima/:id',md_auth.ensureAuth, MateriaPrimaController.update);
api.put('/update-materiaPrimaStock/:id',md_auth.ensureAuth, MateriaPrimaController.updateStock);
api.post('/upload-image-materiaPrima/:id',[md_auth.ensureAuth, md_upload], MateriaPrimaController.uploadImage);
api.get('/get-image-materiaPrima/:imageFile', MateriaPrimaController.getImageFile);

module.exports = api;