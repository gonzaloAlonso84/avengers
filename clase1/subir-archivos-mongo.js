const fs = require('fs')
const forEachAsync = require('./lib/foreachasync')
const {ver, showIfExist} = require('./lib/utiles')
const mongoInterface = require('./lib/MongoInterface')

fs.readdir('/var/avengers', (err, data) => {
    // console.log(data)
    forEachAsync(data, (item, fnNext, fnAbort)=>{
        let pth = ['/var/avengers/', item].join('')
        fs.readFile(pth, 'utf8', (err, datosFile)=>{
            if (err) {
                ver(err)
                return
            }
            console.log(datosFile)
            let objDatosFile = JSON.parse(datosFile)
            mongoInterface.insert('avengers', 'personas', objDatosFile, err => {
                if (err) {
                    ver(err)
                    return
                }
                fs.unlink(pth, ()=>{
                    fnNext()
                })
            })
        })
    }, err=> {
        showIfExist(err)
    })
})