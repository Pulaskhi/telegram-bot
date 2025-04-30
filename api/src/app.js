const express = require('express')
const app = express()
const errorHandler = require('./middlewares/error-handler')
// si se hace require a una carpeta, se ejecuta el archivo index.js
const routes = require('./routes')
// transforma el json a objeto, es un midddleware
app.use(express.json({ limit: '10mb', extended: true }))
// aqui le dices que todas tus rutas van a empezar por api
app.use('/api', routes)
app.use(errorHandler)

module.exports = app
