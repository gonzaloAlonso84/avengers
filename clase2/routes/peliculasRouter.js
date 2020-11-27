const express = require('express')
const peliculasRouter = express.Router()

peliculasRouter.route('/peliculas')
   .get((request, response)=>{
       console.log(request.headers)
       response.header('X-JWT-TOKEN','ELJWT')
       response.send({peliculas:[]})
   })

module.exports = peliculasRouter