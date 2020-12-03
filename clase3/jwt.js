const jwtlib = require('jsonwebtoken')
const jwtdecode = require('jwt-decode')

let hora = Math.floor(new Date() / 1000) 

let obj = {
    sub: 123456789,
    iat : hora,
    exp : hora + 86400,
    roles: ['ADMIN', 'USER']
}

let elToken = jwtlib.sign(obj, 'AlsztS652lYYxslasdke')

console.log(elToken)

let unObjeto = jwtlib.verify(elToken, 'AlsztS652lYYxslasdke')

console.log(unObjeto)

console.log('decodificar')

let decodificado = jwtdecode(elToken)
console.log(decodificado)
