
function historialAventureros(callback) { 
    var url = '/Historial'

    fetch(url)
    .then(res => res.json())
    .then(res => callback(res))
 }
 
var resumenDilaogos = document.getElementById('resumenDilaogos')

function resumen(dialogos) {
    
 dialogos.forEach(function(objDialogo){

   resumenDilaogos.insertAdjacentHTML('afterbegin', `
    <div >
    <h2> Aventurero:</h2>
  <h2 class="verde"> ${objDialogo.usuario} </h2>

 <h2> Hey!, ¿no sos demaciado joven como para andar por los acantilados?</h2>
  <h2 class="verde">${objDialogo.PrimerDialogo} </h2> 

<h2>¿Por que estas aca?</h2> 
  <h2 class="verde"> ${objDialogo.SegundoDialogo}</h2> 
 <h2>¡Una maldad se avecina! </h2>
  <h2 class="verde"> ${objDialogo.TercerDialogo}</h2> 

<h2>Bienvenido a mi tienda </h2> 
  <h2 class="verde"> ${objDialogo.CuartoDialogo}</h2> 

<h2>¿venis por la caceria? </h2> 
<h2 class="verde"> ${objDialogo.QuintoDialogo}</h2> 
      </div>   
 `)
 })
}
historialAventureros(resumen)
