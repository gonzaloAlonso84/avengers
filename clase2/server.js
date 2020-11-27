const express = require('express')
const path = require('path')

let app = express()

app.get('/', (request, response)=>{
    console.log(request.headers)
    response.send({contenido:'si'})
})

app.use(express.static(path.join(__dirname, '/public/')))
app.use('/underscore', express.static(path.join(__dirname, '/node_modules/underscore/underscore.js')))

const peliculasRouter = require('./routes/peliculasRouter')
app.use('/', peliculasRouter)

app.listen(3000, ()=>{
    console.log('listening...')
})