// Modulos, variables y puerto
var key
var path = require("path")
express = require("express");
var app = express();
var bodyParser = require('body-parser');
var puerto = process.env.PORT || 3000;
var ClienteMongo = require('mongodb').MongoClient;
var url = `${key}`;
var nombre_db = 'los_dialogos'
var db;


ClienteMongo.connect(url,{ useUnifiedTopology: true}, async function (err, cliente) {
   if (err) {
     console.error('An error occurred connecting to MongoDB: ', err);
 } else {
   db = cliente.db(nombre_db);

  var dialogos = await db.collection('dialogos')


  console.log("conexion exitosa");

//  console.log('los dialogos son:' + JSON.stringify(dialogos))
 
  //  cliente.close();
 }}
 )
 

// Usos de app
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../front-end')))

// Metodo GET
app.get('/', function (consulta, respuesta) {
  console.log("se hizo get a la raiz");
  respuesta.sendFile(path.join(__dirname, "../front-end/home.html"))
})

app.get('/juego', function (consulta, respuesta) {
  respuesta.sendFile(path.join(__dirname, "../front-end/juego.html"))
})

app.get('/resumen', function (consulta, respuesta) {

  respuesta.sendFile(path.join(__dirname, "../front-end/resumenHistoria.html"))

})



app.get('/Historial',async function (consulta, respuesta) {


  var Dialogos = await db.collection('dialogos').find().toArray()

  respuesta.send(Dialogos)
  

})


// Metodo POST
app.post('/dialogo', async function (consulta, respuesta) {

  console.log(consulta.body)

   var mongo_dialogos = await db.collection('dialogos').insertOne(consulta.body);
  
  console.log('dialogoso guardados en mongo:' + mongo_dialogos )
    respuesta.send(console.log("se guardo los dialogos"))
})

// Escucha del puerto
app.listen(puerto, function () {
  console.log('servidor escuchando en puerto:' + puerto)
})

