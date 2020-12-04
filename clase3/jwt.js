const jwtlib = require('jsonwebtoken')
const jwtdecode = require('jwt-decode')
const jwtutil = require('./lib/jwtuitl')

jwtutil.verificarToken(
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMzQ1Njc4OSwiaWF0IjoxNjA3MDM3ODcwLCJleHAiOjE2MDcwMzgwNzAsInJvbGVzIjpbIlJPTEVfVVNFUiIsIlJPTEVfQURNSU4iXX0.Ls2a7v4BUQMUR6LF_Dry68BZGb-the6vN_lbB898aSQ'
)

process.exit()

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


