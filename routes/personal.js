'use strict'

var express = require('express');
var PersonalController = require('../controllers/personal');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/personal'});


api.get('/prueba-personal', md_auth.ensureAuth, PersonalController.pruebas);
api.post('/personal', md_auth.ensureAuth,  PersonalController.save);
api.get('/personals', PersonalController.getAll);
api.get('/personal/:id', PersonalController.getById);
api.put('/update-personal/:id',md_auth.ensureAuth, PersonalController.update);
api.post('/upload-image-personal/:id',[md_auth.ensureAuth, md_upload], PersonalController.uploadImage);
api.get('/get-image-personal/:imageFile', PersonalController.getImageFile);

module.exports = api;