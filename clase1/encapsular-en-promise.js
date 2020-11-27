const _ = require('underscore')
const {ver, showIfExist} = require('./lib/utiles')
// const encapsuladorPromise = require('./lib/encapsuladorpromise')
const { system } = require('faker')

// partial application Que es ?

function suma(x, y) {
    return x + y
}

let suma2 = _.partial(suma, 2)
let suma4 = _.partial(suma, 4)


/************************************************/

function sumaCavernicola(x) {
    return function(y) {
        return x + y
    }
} 

/************************************************/

function sumaAsincronica(x, y, callBack) {
    setTimeout(()=>{
        callBack(undefined, x + y)
    }, 1000)
}

sumaAsincronica(2, 3, (err, resultado) => {
    if (err) {
        showIfExist(err)
        return
    }
    ver(resultado)
})

let sumaAsincPartialApp = _.partial(sumaAsincronica, 20, 40)

sumaAsincPartialApp((err, resultado) => {
    if (err) {
        showIfExist(err)
        return
    }
    ver(resultado)
})

/************************************************/

function encapsuladorPromise(fnParcialmenteAplicada) {
    return new Promise((resolve, reject) => {
        fnParcialmenteAplicada((err, resultado)=>{
            if (err) {
                reject(err)
                return
            }
            resolve(resultado)
        })        
    })
}

/*
encapsuladorPromise(sumaAsincPartialApp)
.then(z=>ver(z))
.catch(err=>ver(err))
*/

(async function() {
    for (let x = 1; x < 100; x++) {
        let partialFn = _.partial(sumaAsincronica, 20, x)
        let res = await encapsuladorPromise(partialFn)            
        ver(res)
    }
})()