const express = require('express')
const path = require('path')
const _ = require('underscore')
let app=express()


app.get('/', (request, response)=>{
    response.status(200).send({
        nombre: process.env.USER,
        apellido: 'Farias' 
    })
})

app.listen(3000, ()=>{
    console.log('escuchando puerto 3000')
})

