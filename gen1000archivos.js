const genfake = require('./lib/genfake')
const fs = require('fs')
const _ = require('underscore')
const forEachAsync = require('./lib/foreachasync')
const {executeIfExist} = require('./lib/utiles')

forEachAsync(_.range(1000), (item, fnNext, fnAbort) => {
    let objInventado = genfake()
    let path = [
        '/var/avengers/', 
        objInventado.id, 
        '.json'].join('')

    console.log(path)
    fs.writeFile(path, JSON.stringify(objInventado), 'utf8', err => {
        if (err) {
            console.log(err)
            fnAbort(err)
            return
        }
        fnNext()
    })
    
},
err => {
    executeIfExist(err, z=>console.log(z))
})

