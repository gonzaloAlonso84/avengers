const _ = require('underscore')

const meConsumeVivo = () => {
    let contador = 0
    for (x in _.range(100)) {
        for (z in _.range(1000000)) {
            contador++
        }
        console.log([x, z, contador])
    }
    return contador
}

process.send(meConsumeVivo())