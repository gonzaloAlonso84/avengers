const fs = require('fs')
const _ = require('underscore')
// const encapsuladorPromise = require('./lib/encapsuladorpromise')
const { ver } = require('./lib/utiles')

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


(async function() {
    const leerCarpeta = _.partial(fs.readdir, '/var/avengers')
    let todosLosArchivosDeLaCarpeta = await leerCarpeta()
    console.log(todosLosArchivosDeLaCarpeta)
})()