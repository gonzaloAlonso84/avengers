const express = require('express')
const seguridadRouter = express.Router()
const jwtutil = require('../lib/jwtuitl')

seguridadRouter.route('/loginweb')
    .post((request, response) => {
        console.log('entra a loginweb')
        let token = jwtutil.crearToken(
            123456789,
            ['ROLE_USER', 'ROLE_ADMIN']
        )
        response.header('X-JWT-TOKEN', token)
        response.send({
            token: token,
            refreshtoken: token
        })
    })

seguridadRouter.route('/altausuario')
    .post((request, response) => {
        console.log('entra a altausuario')
        response.header('X-JWT-TOKEN','ELJWT')
        response.send({peliculas:'alta usuario'})
    })

module.exports = seguridadRouter