'use strict'

var express = require('express');
var FabricacionController = require('../controllers/fabricacion');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/fabricacion'});


api.get('/prueba-fabricacion', md_auth.ensureAuth, FabricacionController.pruebas);
api.post('/fabricacion', md_auth.ensureAuth,  FabricacionController.save);
api.get('/fabricacions', FabricacionController.getAll);
api.get('/fabricacionsFinalizado', FabricacionController.getAllFinalizado);
api.get('/fabricacion/:id', FabricacionController.getById);
api.get('/fabricacionPedidoDetalle/:pedidodetalle', FabricacionController.getByPedidoDetalle);
api.put('/update-fabricacion/:id',md_auth.ensureAuth, FabricacionController.update);
api.put('/update-fabricacionEstado/:id',md_auth.ensureAuth, FabricacionController.updateSubEstadoAdd);
api.put('/update-fabricacionMaterial/:id',md_auth.ensureAuth, FabricacionController.updateSubMaterialAdd);
api.put('/update-fabricacionEstadoUpdate/:id',md_auth.ensureAuth, FabricacionController.updateSubEstadoUpdateById);
api.put('/update-fabricacionMaterialUpdate/:id',md_auth.ensureAuth, FabricacionController.updateSubMaterialUpdateById);

module.exports = api;