'use strict'

var express = require('express');
var CategoriaController = require('../controllers/categoria');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');




api.get('/prueba-categoria', md_auth.ensureAuth, CategoriaController.pruebas);
api.post('/categoria', md_auth.ensureAuth,  CategoriaController.save);
api.get('/categorias', CategoriaController.getAll);
api.get('/categoria/:id', CategoriaController.getById);
api.put('/update-categoria/:id',md_auth.ensureAuth, CategoriaController.update);

module.exports = api;