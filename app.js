/**

 */
'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//cargar rutas
var user_routes = require('./routes/user');
var animal_routes = require('./routes/animal');
var categoria_routes = require('./routes/categoria');
var modelo_routes = require('./routes/modelo');
var cliente_routes = require('./routes/cliente');
var personal_routes = require('./routes/personal');
var materiaPrima_routes = require('./routes/materiaPrima');
var pedido_routes = require('./routes/pedido');
var pedidoDetalle_routes = require('./routes/pedidoDetalle');
var fabricacion_routes = require('./routes/fabricacion');
var colocacion_routes = require('./routes/colocacion');
var instalacion_routes = require('./routes/instalacion');
var categoriaMaterial_routes = require('./routes/categoriaMaterial');
var iva_routes = require('./routes/iva');


//middlewares de body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// configurar cabeceras y cors
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested_With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

//rutas body-parser
app.use('/', express.static ('client', {redirect: false}));
app.use('/api', user_routes);
app.use('/api', animal_routes);
app.use('/api', categoria_routes);
app.use('/api', modelo_routes);
app.use('/api', cliente_routes);
app.use('/api', personal_routes);
app.use('/api', materiaPrima_routes);
app.use('/api', pedido_routes);
app.use('/api', pedidoDetalle_routes);
app.use('/api', fabricacion_routes);
app.use('/api', colocacion_routes);
app.use('/api', instalacion_routes);
app.use('/api', categoriaMaterial_routes);
app.use('/api', iva_routes);


module.exports = app;

