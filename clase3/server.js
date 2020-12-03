const express = require('express')
const path = require('path')

let app = express()

app.get('/', (request, response)=>{
    console.log(request.headers)
    response.send({contenido:'si'})
})

app.use(express.static(path.join(__dirname, '/public/')))
app.use('/underscore', express.static(path.join(__dirname, '/node_modules/underscore/underscore.js')))
app.use('/jwtdecode', express.static(path.join(__dirname, '/node_modules/jwt-decode/build/jwt-decode.js')))

const peliculasRouter = require('./routes/peliculasRouter')
const seguridadRouter = require('./routes/seguridadRouter.js')

app.use('/', peliculasRouter)
app.use('/', seguridadRouter)

app.listen(3000, ()=>{
    console.log('listening...')
})