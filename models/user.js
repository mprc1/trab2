/**
 * Created by VICTOR OQUENDO on 11/28/2017.
 */

'use strict'
var mongoose = require('mongoose');


var SchemaSubRol = mongoose.Schema;
var RolSchema = SchemaSubRol({
    rol: String
});


var Schema = mongoose.Schema;
var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: [String],
    image: String,
    borrado : Number
});

module.exports = mongoose.model('User', UserSchema);
