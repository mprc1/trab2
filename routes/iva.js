'use strict'

var express = require('express');
var IvaController = require('../controllers/iva');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');




api.get('/prueba-iva', md_auth.ensureAuth, IvaController.pruebas);
api.post('/iva', md_auth.ensureAuth,  IvaController.save);
api.get('/ivas', IvaController.getAll);
api.get('/iva/:id', IvaController.getById);
api.put('/update-iva/:id',md_auth.ensureAuth, IvaController.update);

module.exports = api;