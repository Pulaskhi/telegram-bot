// variable global que devuelve la ruta de donde esta el archivo index.js
global.__basedir = __dirname
const app = require('./src/app.js')
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT} `)
})
