import jwt from 'jwt-simple';
import moment from 'moment/moment';

//! Cuando la funcion decode trata de decodificar
//! un token expirado marca error. Por lo cual, se
//! implemento dentro de una sentencia try-catch.
function isvalid(token) {
  try {
    let payload = jwt.decode(token, 'codigoSecreto');
    console.log(payload);
    return true;
  } catch (err) {
    console.log('Token caducado');
    return false;
  }
}

function createNewToken(userId) {
  let payload = {
    sub: userId,
    iat: moment().unix(),
    exp: moment().add(1, "days").unix(),
  }
  return jwt.encode(payload, 'codigoSecreto');
}

export const tokenService = {
  isvalid,
  createNewToken
}