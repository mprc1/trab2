
'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zoo',{useMongoClient: true})
        .then(() => {
                console.log('La conexión a la base de datos ZOO SUCCESS...');
                app.listen(port, ()=>{
                 console.log("El servidor local con Node y Express esta corriendo correctamente...");
                 });
        })
        .catch(err => console.log(err));


