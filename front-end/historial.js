
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
    <div class="home">
   ${objDialogo.usuario}<br>
   ${objDialogo.PrimerDialogo}<br>
   ${objDialogo.SegundoDialogo}<br>
   ${objDialogo.TercerDialogo}<br>
   ${objDialogo.CuartoDialogo}<br>
      </div> 
 `)
 })
}
historialAventureros(resumen)
