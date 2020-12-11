const express = require('express')
const path = require('path')
const _ = require('underscore')
const { fork } = require('child_process')
let app=express()


app.get('/', (request, response)=>{
    const procForkeado = fork('meconsumevivo.js')
    procForkeado.on('message', total => {
        response.status(200).send({contador: total})    
    })
})

app.listen(80, ()=>{
    console.log('escuchando puerto 80')
})
