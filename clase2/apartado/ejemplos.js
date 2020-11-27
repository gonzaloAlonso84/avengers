const _ = require('underscore')

function a(uno, dos) {
    return uno + dos
}

function b(cb) {
    return cb(3, 5, 7)
}

let z = b(a)

console.log(z)

/************************************************* */

function fnObj() {
    let a = 1;
    return {
        incrementara : () => a++
    }
}

function hacerAlgo1() {
    console.log('hacer algo 1')
}

function hacerAlgo2() {
    console.log('hacer algo 2')
}

let unaInstancia = fnObj()
console.log(unaInstancia.incrementara())
console.log(unaInstancia.incrementara())
console.log(unaInstancia.incrementara())
console.log(unaInstancia.incrementara())
console.log(unaInstancia.incrementara())
console.log(unaInstancia.incrementara())

let hacerAlgo = null;

for (let x = 0;x < 10;x++) {
    hacerAlgo = (x%2===0) ? hacerAlgo1 : hacerAlgo2;
    hacerAlgo()
}

/************************************************* */
// Cada operacion sincronica o asincronica 
// se puede encapsular dentro de una promise.

// Partial application
// Nacio en la programacion funcional
// En haskell, no existe una funcion que reciba
// mas de un parametro.

function suma(x) {
    return function(z) {
        return x + z; 
    }
}

// si quiero llamar a suma
console.log(suma(200)(400))

let suma2 = suma(2)
console.log(suma2(100))

// como se hace en javascript

let concatenar = (primero, segundo) => {
    return primero.concat(segundo)
}

console.log(concatenar('hola ', 'mundo'))

let saludar = _.partial(concatenar, 'hola: ')

let p = z => console.log(z)

p(saludar('gaby'))
p(saludar('juan'))
p(saludar('gonzalo'))

