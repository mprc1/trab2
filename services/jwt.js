/**

 */
'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_usado_por_token';
exports.createToken = function(user){
  var payload = {
      sub: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      role: user.role,
      image: user.image,
      iat: moment().unix(),
      exp: moment().add(300, 'days').unix
  };

    return jwt.encode(payload,secret);
};