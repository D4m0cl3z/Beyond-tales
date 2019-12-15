// Modulos, variables y puerto
express = require("express");
var app = express();
var bodyParser = require('body-parser');
var puerto = process.env.PORT || 3000;
var db_dialogos = [];
var path = require("path")


// Usos de app
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('front-end'))

// Metodo GET
app.get('/', async function (consulta, respuesta) {
  respuesta.sendFile(path.join(__dirname, "../front-end/index.html"))
})

// Metodo POST
app.post('/dialogo', function (consulta, respuesta) {

    console.log(consulta.body)

    respuesta.send("se hizo un post :)")
})

// Escucha del puerto
app.listen(puerto, function () {
  console.log('servidor escuchando en puerto:' + puerto)
})