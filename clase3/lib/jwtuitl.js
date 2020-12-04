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

// boolean
function verificarToken(token) {
    try {
        let datos = jwtlib.verify(token, CLAVE_PRIVADA)
        return {
            isPresent : true,
            datos
        }
    }
    catch (err) {
        console.log('token fulero')
        console.log(err)
        return {
            isPresent : false,
            mensaje : err
        }
    }
}


module.exports = {
    crearToken,
    verificarToken
}