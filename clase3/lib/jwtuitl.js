const jwtlib = require('jsonwebtoken')
const jwtdecode = require('jwt-decode')

const CLAVE_PRIVADA = 'Als3z3tS7652lY2Yxsl2asd7k219e'

let hora = () => Math.floor(new Date() / 1000)

function crearToken(sub, roles) {
    console.log(hora())
    let obj = {
        sub: sub,
        iat : hora(),
        exp : hora() + 200,
        roles: roles
    }
    let elToken = jwtlib.sign(obj, CLAVE_PRIVADA)
    return elToken;
}

function verificarToken(token) {

}


module.exports = {
    crearToken
}