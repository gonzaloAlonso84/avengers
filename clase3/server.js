const express = require('express')
const path = require('path')
const jwtutil = require('./lib/jwtuitl')

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


app.use('/peliculas', (req, res, next) => {
    // en este paso, voy a validar el token
    // si es valido voy a next
    let elToken = req.header('X-JWT-TOKEN')
    console.log(elToken)
    if (!elToken) {
        res.status(401).send('no esta permitido')    
        return;
    }
    let maybeToken = jwtutil.verificarToken(elToken)
    if (maybeToken.isPresent == false) {
        res.status(401).send(maybeToken.mensaje)    
        return;
    }
    let datosToken = maybeToken.datos
    let hora = () => Math.floor(new Date() / 1000)
    // ver si esta vencido
    if (datosToken.exp > hora) {
        res.status(401).send('Token vencido')    
        return;
    }
    next()
})
app.use('/peliculas', (req, res, next)=>{
    console.log('I am ñoqui')
    req.misPermisosPersonalisados = 'MIS PERMISO'
    next()
})
app.use('/', peliculasRouter)
app.use('/peliculas', (error, req, res, next) => {
    res
    .status(500)
    .send('guarda que hay un error, manejalo')   
})

app.use('/', seguridadRouter)

app.listen(3000, ()=>{
    console.log('listening...')
})