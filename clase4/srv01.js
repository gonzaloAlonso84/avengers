const express = require('express')
const path = require('path')
let app=express()


app.get('/', (request, response)=>{
    response.status(200).send({message: 'hola amigos'})
})

app.listen(3000, ()=>{
    console.log('escuchando puerto 3000')
})
