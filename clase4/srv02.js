const express = require('express')
const path = require('path')
let app=express()

app.get('/', (request, response)=>{
    response.status(200).send({message: 'como estan ?'})
})

app.listen(3001, ()=>{
    console.log('escuchando puerto 3001')
})
