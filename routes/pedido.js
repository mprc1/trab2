'use strict'

var express = require('express');
var PedidoController = require('../controllers/pedido');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/pedido'});


api.get('/prueba-pedido', md_auth.ensureAuth, PedidoController.pruebas);
api.post('/pedido', md_auth.ensureAuth,  PedidoController.save);
api.get('/pedidos', PedidoController.getAll);
api.get('/pedido/:id', PedidoController.getById);
api.get('/pedidoCliente/:cliente', PedidoController.getByCliente);
api.put('/update-pedido/:id',md_auth.ensureAuth, PedidoController.update);

module.exports = api;