'use strict'

var express = require('express');
var ColocacionController = require('../controllers/colocacion');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/colocacion'});


api.get('/prueba-colocacion', md_auth.ensureAuth, ColocacionController.pruebas);
api.post('/colocacion', md_auth.ensureAuth,  ColocacionController.save);
api.get('/colocacions', ColocacionController.getAll);
api.get('/colocacionsFinalizado', ColocacionController.getAllFinalizado);
api.get('/colocacion/:id', ColocacionController.getById);
api.get('/colocacionFabricacion/:fabricacion', ColocacionController.getByFabricacion);
api.put('/update-colocacion/:id',md_auth.ensureAuth, ColocacionController.update);
api.put('/update-colocacionEstado/:id',md_auth.ensureAuth, ColocacionController.updateSubEstadoAdd);
api.put('/update-colocacionEstadoUpdate/:id',md_auth.ensureAuth, ColocacionController.updateSubEstadoUpdateById);

module.exports = api;