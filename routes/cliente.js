'use strict'

var express = require('express');
var ClienteController = require('../controllers/cliente');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');




api.get('/prueba-cliente', md_auth.ensureAuth, ClienteController.pruebas);
api.post('/cliente', md_auth.ensureAuth,  ClienteController.save);
api.get('/clientes', ClienteController.getAll);
api.get('/cliente/:id', ClienteController.getById);
api.get('/clienteCi/:ci', ClienteController.getByCi);
api.put('/update-cliente/:id',md_auth.ensureAuth, ClienteController.update);

module.exports = api;