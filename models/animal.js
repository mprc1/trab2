/**
 
 */


'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = Schema({
    name: String,
    description: String,
    years: String,
    image: String,
    user: {type: Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Animal', AnimalSchema);