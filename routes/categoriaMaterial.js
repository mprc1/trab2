'use strict'

var express = require('express');
var CategoriaController = require('../controllers/categoriaMaterial');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');




api.get('/prueba-categoriaMaterial', md_auth.ensureAuth, CategoriaController.pruebas);
api.post('/categoriaMaterial', md_auth.ensureAuth,  CategoriaController.save);
api.get('/categoriaMaterials', CategoriaController.getAll);
api.get('/categoriaMaterial/:id', CategoriaController.getById);
api.put('/update-categoriaMaterial/:id',md_auth.ensureAuth, CategoriaController.update);

module.exports = api;