const express = require('express')
const path = require('path')
const _ = require('underscore')
let app=express()


app.get('/', (request, response)=>{
    response.status(200).send({
        nombre: process.env.USUARIO,
        apellido: 'Farias' 
    })
})

app.listen(80, ()=>{
    console.log('escuchando puerto 80')
})
