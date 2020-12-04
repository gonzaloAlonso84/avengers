const bcrypt = require('bcrypt')
const sha2 = require('sha256')

let saltGenerado = undefined

/*
bcrypt.genSalt(5, function(err, salt) {
    if (!saltGenerado) {
        saltGenerado = salt    
    }
    bcrypt.hash('lapepapig', saltGenerado, function(err, hash) {
        console.log(saltGenerado)
        console.log(hash)
    });
});
*/

let miclave = 'pepapig'
let salt = 'ksi3jgldkdiejrefeeefsddlkjdfirrrr123k4j5n43'

let voyhashear = salt + miclave + salt
for (let x in [1,2,3,4,5,6,7,8,9,10]) {
    console.log(voyhashear)
    voyhashear = sha2(voyhashear + salt)
}

console.log(sha2('miclave'))

