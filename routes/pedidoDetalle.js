'use strict'

var express = require('express');
var PedidoDetalleController = require('../controllers/pedidoDetalle');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/pedido'});


api.get('/prueba-pedidoDetalle', md_auth.ensureAuth, PedidoDetalleController.pruebas);
api.post('/pedidoDetalle', md_auth.ensureAuth,  PedidoDetalleController.save);
api.get('/pedidoDetalles', PedidoDetalleController.getAll);
api.get('/pedidoDetalle/:id', PedidoDetalleController.getById);
api.get('/pedidoDetalleByPedido/:id', PedidoDetalleController.getAllByPedido);
api.put('/update-pedidoDetalle/:id',md_auth.ensureAuth, PedidoDetalleController.update);
api.put('/delete-pedidoDetalle/:id',md_auth.ensureAuth, PedidoDetalleController.deleteById);

module.exports = api;