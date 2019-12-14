
// function inicio() {
//   var h1 = document.getElementById('titulo');
//   h1 = h1.remove()
//   var boton = document.getElementById('boton');
//   boton = boton.remove()

var dialogo = document.getElementById('dialogo');
var personaje = document.getElementById("personaje");
var mov = 300;
var action = 0;

function mover(event) {

   if (event.key === "ArrowRight") {
      mov += 5
      personaje.style.animation = "mymove 0.8s infinite step-end"
      personaje.style.left = "200px"
      personaje.style.left = mov + "px";

   }
   if (event.key === "ArrowLeft") {
      mov -= 5
      personaje.style.animation = "mymove2 0.8s infinite step-end"
      personaje.style.left = mov + "px";
   }

   // .......................marta..........................

   if (mov == 900 && action == 0) {
      
      document.body.removeEventListener('keydown', mover)
      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
   <div id="imgDialogo1">
   </div> 
    <div id='globoDialogo'>
    <h1>Marta</h1>
    <p>Hey niño!, no sos demaciado joven como para andar jugando por los acantilados? </p>
       </div>
    `)
      document.body.addEventListener('keydown', conversar)
   }

   if (mov == 900 && action == 1) {
      document.body.removeEventListener('keydown', mover)
      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
   <div id="imgDialogo2">
   </div> 
    <div id='globoDialogo'>
       <h1>Elis</h1>
   <p>Hola! bienvenido a mi tienda aventurero  </p>
   </div> 
       </div> 
       </div>
    `)
      document.body.addEventListener('keydown', conversar_part2_)
   }

   if (mov == 1750) {
      action++
      mov = 200
      var Fondo = document.getElementById('Fondo')
      Fondo.remove()
      var personaje2 = document.getElementById('personaje2')
      personaje2.remove()
      var stage2 = document.getElementById('stage2')

      stage2.insertAdjacentHTML('beforebegin', `
   <div id="Fondo2">
   </div>
   <div id="personaje3" >
   </div>

 `)
   }
}
document.body.addEventListener('keydown', mover)
var stage1 = document.getElementById("stage1");

var dialogo = 0

//................... felix ......................

function conversar(event) {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', mover)
      if (dialogo == 0) {
         var cont1 = document.getElementById('cont1')
         cont1.remove()
         stage1.insertAdjacentHTML('afterbegin', `
    <div id="cont1">
       <div id="imgDialogo">
       </div>
        <div id='globoDialogo'>
        <h1>Felix</h1>
        <form>
        <fieldset>
            <select name="dialogo" id="dialogo" onchange="continuar_dialogo()" >
            <option>Seleccionar respuesta:</option>
               <option value="res1">Hola! solo un poco</option>
                <option value="res2">Me da igual si no te gusta</option>
                <option value="res3">No... en absoluto, para las aventuras no hay edad </option>
            </select>

        </fieldset>
    </form>
    </div> 
    </div>
        `)
         dialogo++
      }
   }
}

// .......................marta..........................

var selectValue

function continuar_dialogo() {
   selectValue = document.getElementById("dialogo").value;
   var cont1 = document.getElementById('cont1')
   cont1.remove()
   if (selectValue == "res1") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 

    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Un poco...? en los acantilados existen criaturas que te pueden devorar si no prestas atencion, pero tu tienes pinta de saber de lo que haces, ¿verdad? </p>
       </div> 
       </div>`
      )
   }
   if (selectValue == "res2") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 

    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Niño arrogante... acaso no sabes quien soy? </p>
       </div> 
       </div>`
      )
   }
   if (selectValue == "res3") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 
    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Dicelo a el ultimo aventurero que fue devorado por no saber cuidarse, como sea me presento, mi nombre es marta y vine aqui en busca de nuevas especies de plantas  </p>
       </div> 
       </div>`
      )
   }
   document.body.addEventListener('keydown', conversar2)
}

//................... felix ......................

function conversar2(event) {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', continuar_dialogo)
      var cont1 = document.getElementById('cont1')
      cont1.remove()


      if (selectValue == "res1") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>quiza... eh entrenado mucho antes de salir del pueblo de donde vengo, dia y noche por cierto  </p>
       </div> 
       </div>
   
           `)
      }

      if (selectValue == "res2") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>Una bruja quiza...? </p>
       </div> 
       </div>
   
           `)
      }

      if (selectValue == "res3") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>no creo que me pase, vengo preparado </p>
       </div> 
       </div>
           `)
      }
      document.body.addEventListener('keydown', conversar3)
   }
}
//................... marta ......................

function conversar3() {

   if (event.key === "Enter") {

      document.body.removeEventListener('keydown', conversar2)
      var cont1 = document.getElementById('cont1')
      cont1.remove()

      if (selectValue == "res1") {

         stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 

    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>De todos modos debes tener cuidado con esas criaturas maliciosas, por cierto por que vniste a parar aca, no es un lugar muy vistaso por aventureros </p>
       </div> 
       </div>`
         )
      }
      if (selectValue == "res2") {
         stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 

    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>bruja tu abuela! soy marta, una druida... que haces aca de todos modos?  </p>
       </div> 
       </div>`
         )
      }
      if (selectValue == "res3") {

         stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 
    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>si tu lo dices... rondas por aca por algo en especial? </p>
       </div> 
       </div>`
         )
      }
      document.body.addEventListener('keydown', conversar4)
   }
}



// ...........................................parte 2..................................................


//................... felix ......................


function conversar4(event) {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar3)

      var cont1 = document.getElementById('cont1')
      cont1.remove()
      stage1.insertAdjacentHTML('afterbegin', `
    <div id="cont1">
       <div id="imgDialogo">
       </div>
        <div id='globoDialogo'>
        <h1>Felix</h1>
        <form>
        <fieldset>
            <select name="dialogo1" id="dialogo1" onchange="conversar5()" >
            <option>Seleccionar respuesta:</option>
               <option value="res4">A buscar fortunas</option>
                <option value="res5">Para volverme un aclamado y famoso guerrero!  </option>
                <option value="res6">Para salvar al mundo de las maldad </option>
            </select>
        </fieldset>
    </form>
    </div> 
    </div>
        `)

   }

}


// .......................marta..........................


function conversar5() {
   document.body.removeEventListener('keydown', conversar4)
   selectValue = document.getElementById("dialogo1").value;
   var cont1 = document.getElementById('cont1')
   cont1.remove()

   if (selectValue == "res4") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 

    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Aca mas que plantas y especies raras de animales no vas a encontrar... quiza en el siguiente pueblo puedas hablar con alguien que necesite ayuda </p>
       </div> 
       </div>`
      )
   }
   if (selectValue == "res5") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 

    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>uy... cuanta energia! esa es la actitud, aunque por estas horas no hay muchas criaturas de alto nivel</p>
       </div> 
       </div>`
      )
   }
   if (selectValue == "res6") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 
    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Eso es demaciado dificil si te lo pones a pensar, con tanto villano suelto , aunque me gusta tu energia</p>
       </div> 
       </div>`
      )
   }
   document.body.addEventListener('keydown', conversar6)
}


// ................... felix ......................

function conversar6(event) {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar5)
      var cont1 = document.getElementById('cont1')
      cont1.remove()

      if (selectValue == "res4") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>Que pena... supongo que me servira como una pratica mas </p>
       </div> 
       </div>
   
           `)
      }

      if (selectValue == "res5") {


         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>No es necesario que sean de alto nivel, la maldad sigue siendo mladad aunque no sea de alto rango</p>
       </div> 
       </div>
   
           `)
      }

      if (selectValue == "res6") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>Si, quiza lo sea, pero no es algo me va a detener tan facilmente </p>
       </div> 
       </div>
           `)
      }
      document.body.addEventListener('keydown', conversar7)
   }
}
// //................... marta ......................

function conversar7() {
   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar6)
      var cont1 = document.getElementById('cont1')
      cont1.remove()

      if (selectValue == "res4") {

         stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 

    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>No te desanimes, seguro encontras algo que te interese en tu viaje, ademas un terrible mal acechará estas tierras en poco tiempo </p>
       </div> 
       </div>`
         )
      }
      if (selectValue == "res5") {
         stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 

    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Que veo un aventurero que deja atras la fama para derrotar a la horrible maldad que se avecina</p>
       </div> 
       </div>`
         )
      }
      if (selectValue == "res6") {

         stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 
    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Muy bien, es mejor que pienses asi, te preparas para la pesadilla que se avecina </p>
       </div> 
       </div>`
         )
      }
      document.body.addEventListener('keydown', conversar8)
   }
}


// ................... felix ......................

function conversar8(event) {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar7)

      var cont1 = document.getElementById('cont1')
      cont1.remove()
      stage1.insertAdjacentHTML('afterbegin', `
    <div id="cont1">
       <div id="imgDialogo">
       </div>
        <div id='globoDialogo'>
        <h1>Felix</h1>
        <form>
        <fieldset>
            <select name="dialogo1" id="dialogo1" onchange="conversar9()" >
            <option>Seleccionar respuesta:</option>
               <option value="res4">Que maldad de avecina?</option>
                <option value="res5">Por supuesto!</option>
                <option value="res6">Intentas asustarme?</option>
            </select>
        </fieldset>
    </form>
    </div> 
    </div>
        `)

   }
   document.body.addEventListener('keydown', conversar9)
}
// ................... marta ......................

function conversar9() {
   document.body.removeEventListener('keydown', conversar8)
   var cont1 = document.getElementById('cont1')
   cont1.remove()

   stage1.insertAdjacentHTML('afterbegin', `
          <div id="cont1">
             <div id="imgDialogo1">
             </div>
              <div id='globoDialogo'>
              <h1>Marta</h1>
              <p>Te contare a que me refiero, las antiguas leyendes cuentan que en este año un terrible creador liberara atrosidades y solo aquel con la valentia de enfrentarlo, prodra evitar la ruinas de estas tierras, nadie sabe muy bien en que dia sera, pero se rumorea que en las noches mas oscuras las criaturas deciden salir </p>
          </div> 
          </div>
      
              `)
   document.body.addEventListener('keydown', conversar10)

}

// ................... marta ......................

function conversar10() {

   if (event.key === "Enter") {

      document.body.removeEventListener('keydown', conversar9)
      var cont1 = document.getElementById('cont1')
      cont1.remove()

      stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo1">
          </div>
           <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>quien sabe? a lo mejor son puros cuentos para dormir¿o no? comoo sea... si continuas por este camino te contraras con una tienda, a lo mejor se te hace interesante </p>
       </div> 
       </div>
   
           `)
   }
   document.body.addEventListener('keydown', conversar11)
}
function conversar11() {


   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar10)
      var cont1 = document.getElementById('cont1')
      cont1.remove()
      stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Muchas gracias, </p>
       </div> 
       </div>
   
           `)
   }

   document.body.addEventListener('keydown', conversar12)
}


function conversar12(event) {
   document.body.removeEventListener('keydown', conversar11)
   if (event.key === "Enter") {
      var cont1 = document.getElementById('cont1')
      cont1.remove()
      document.body.addEventListener('keydown', mover)
   }
}


// ...............................segunda pantalla..........................

// .......................Felix..........................

function conversar_part2_(event) {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', mover)
         stage1.insertAdjacentHTML('afterbegin', `
    <div id="cont1">
       <div id="imgDialogo">
       </div>
        <div id='globoDialogo'>
        <h1>Felix</h1>
        <form>
        <fieldset>
            <select name="dialogo" id="dialogo" onchange="continuar_dialogo1()" >
            <option>Seleccionar respuesta:</option>
               <option value="res7">Una tienda en medio de la nada?</option>
                <option value="res8">Hola! mi nombre es felix</option>
                <option value="res9">Que tienda tan rara tenes</option>
            </select>

        </fieldset>
    </form>
    </div> 
    </div>
        `)
   }
}

// ..............................Elis...............................

function continuar_dialogo1() {
   selectValue = document.getElementById("dialogo").value;
   var cont1 = document.getElementById('cont1')
   cont1.remove()
   if (selectValue == "res7") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo2">
      </div> 

    <div id='globoDialogo'>
           <h1>Elis</h1>
           <p>Si, se ocurrio cuando salto el boom de cuando todos querian ser aventureros, pero... todos morian antes de llegar aca y no esta teniendo mucho exito por eso </p>
       </div> 
       </div>`
      )
   }
   if (selectValue == "res8") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo2">
      </div> 

    <div id='globoDialogo'>
           <h1>Elis</h1>
           <p>Hola felix, mi nombre es Elia y soy la dueña de esta tienda, quieres pasar y comprar algo ?</p>
       </div> 
       </div>`
      )
   }
   if (selectValue == "res9") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo2">
      </div> 
    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Si, quizá un poco, el estilo es algo nuevo que quice provar, puedes llemarme innovadora quiza? jejeje </p>
       </div> 
       </div>`
      )
   }
   document.body.addEventListener('keydown', conversar_part2_2)
}





// //................... felix ......................

function conversar_part2_2(event) {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', continuar_dialogo1)
      // var cont1 = document.getElementById('cont1')
      cont1.remove()

      if (selectValue == "res7") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>Todos morian antes de llegar hasta aca ? y vos como lograste sobrevivir? </p>
       </div> 
       </div>
   
           `)
      }

      if (selectValue == "res8") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>Quiza en otra oportunidad, al decir verdad ando corto de oro, pero ya podré comprarte algo </p>
       </div> 
       </div>
   
           `)
      }

      if (selectValue == "res9") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>Si en absoluto, nunca vi algo similar en estas tierras, por cierto... en algun momento sueltas ese arco que tienes ahí ?</p>
       </div> 
       </div>
           `)
      }
      // document.body.addEventListener('keydown', conversar3)
   }
}


// function conversar(event) {

// if (event.key === "Enter") {
//    document.body.removeEventListener('keydown', mover)
//    if (dialogo == 0) {
//       var cont1 = document.getElementById('cont1')
//       cont1.remove()
//       stage1.insertAdjacentHTML('afterbegin', `
//  <div id="cont1">
//     <div id="imgDialogo">
//     </div>
//      <div id='globoDialogo'>
//      <h1>Felix</h1>
//      <form>
//      <fieldset>
//          <select name="dialogo" id="dialogo" onchange="continuar_dialogo()" >
//          <option>Seleccionar respuesta:</option>
//             <option value="res1">Hola! solo un poco</option>
//              <option value="res2">Me da igual si no te gusta</option>
//              <option value="res3">No... en absoluto, para las aventuras no hay edad </option>
//          </select>

//      </fieldset>
//  </form>
//  </div> 
//  </div>
//      `)
//       dialogo++
//    }
// }
// }

// // .......................marta..........................

// var selectValue

// function continuar_dialogo() {
// selectValue = document.getElementById("dialogo").value;
// var cont1 = document.getElementById('cont1')
// cont1.remove()
// if (selectValue == "res1") {

//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 

//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>Un poco...? en los acantilados existen criaturas que te pueden devorar si no prestas atencion, pero tu tienes pinta de saber de lo que haces, ¿verdad? </p>
//     </div> 
//     </div>`
//    )
// }
// if (selectValue == "res2") {

//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 

//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>Niño arrogante... acaso no sabes quien soy? </p>
//     </div> 
//     </div>`
//    )
// }
// if (selectValue == "res3") {

//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 
//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>Dicelo a el ultimo aventurero que fue devorado por no saber cuidarse, como sea me presento, mi nombre es marta y vine aqui en busca de nuevas especies de plantas  </p>
//     </div> 
//     </div>`
//    )
// }
// document.body.addEventListener('keydown', conversar2)
// }

// //................... felix ......................

// function conversar2(event) {

// if (event.key === "Enter") {
// document.body.removeEventListener('keydown', continuar_dialogo)
// var cont1 = document.getElementById('cont1')
// cont1.remove()


// if (selectValue == "res1") {

//    stage1.insertAdjacentHTML('afterbegin', `
//     <div id="cont1">
//        <div id="imgDialogo">
//        </div>
//         <div id='globoDialogo'>
//         <h1>Felix</h1>
//         <p>quiza... eh entrenado mucho antes de salir del pueblo de donde vengo, dia y noche por cierto  </p>
//     </div> 
//     </div>

//         `)
// }

// if (selectValue == "res2") {

//    stage1.insertAdjacentHTML('afterbegin', `
//     <div id="cont1">
//        <div id="imgDialogo">
//        </div>
//         <div id='globoDialogo'>
//         <h1>Felix</h1>
//         <p>Una bruja quiza...? </p>
//     </div> 
//     </div>

//         `)
// }

//    if (selectValue == "res3") {

//       stage1.insertAdjacentHTML('afterbegin', `
//     <div id="cont1">
//        <div id="imgDialogo">
//        </div>
//         <div id='globoDialogo'>
//         <h1>Felix</h1>
//         <p>no creo que me pase, vengo preparado </p>
//     </div> 
//     </div>
//         `)
//    }
//    document.body.addEventListener('keydown', conversar3)
// }
// }
// //................... marta ......................

// function conversar3() {

// if (event.key === "Enter") {

//    document.body.removeEventListener('keydown', conversar2)
//   var cont1 = document.getElementById('cont1')
//    cont1.remove()

// if (selectValue == "res1") {

//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 

//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>De todos modos debes tener cuidado con esas criaturas maliciosas, por cierto por que vniste a parar aca, no es un lugar muy vistaso por aventureros </p>
//     </div> 
//     </div>`
//    )
// }
// if (selectValue == "res2") {
//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 

//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>bruja tu abuela! soy marta, una druida... que haces aca de todos modos?  </p>
//     </div> 
//     </div>`
//    )
// }
// if (selectValue == "res3") {

//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 
//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>si tu lo dices... rondas por aca por algo en especial? </p>
//     </div> 
//     </div>`
//    )
// }
// document.body.addEventListener('keydown', conversar4)
// }}



// // ...........................................parte 2..................................................


// //................... felix ......................


// function conversar4(event) {

// if (event.key === "Enter") {  
//    document.body.removeEventListener('keydown', conversar3)

//    var cont1 = document.getElementById('cont1')
//      cont1.remove()
//       stage1.insertAdjacentHTML('afterbegin', `
//  <div id="cont1">
//     <div id="imgDialogo">
//     </div>
//      <div id='globoDialogo'>
//      <h1>Felix</h1>
//      <form>
//      <fieldset>
//          <select name="dialogo1" id="dialogo1" onchange="conversar5()" >
//          <option>Seleccionar respuesta:</option>
//             <option value="res4">A buscar fortunas</option>
//              <option value="res5">Para volverme un aclamado y famoso guerrero!  </option>
//              <option value="res6">Para salvar al mundo de las maldad </option>
//          </select>
//      </fieldset>
//  </form>
//  </div> 
//  </div>
//      `)

// }

// }


// // .......................marta..........................


// function conversar5() {
// document.body.removeEventListener('keydown', conversar4)
// selectValue = document.getElementById("dialogo1").value;
// var cont1 = document.getElementById('cont1')
// cont1.remove()

// if (selectValue == "res4") {

//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 

//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>Aca mas que plantas y especies raras de animales no vas a encontrar... quiza en el siguiente pueblo puedas hablar con alguien que necesite ayuda </p>
//     </div> 
//     </div>`
//    )
// }
// if (selectValue == "res5") {

//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 

//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>uy... cuanta energia! esa es la actitud, aunque por estas horas no hay muchas criaturas de alto nivel</p>
//     </div> 
//     </div>`
//    )
// }
// if (selectValue == "res6") {

//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 
//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>Eso es demaciado dificil si te lo pones a pensar, con tanto villano suelto , aunque me gusta tu energia</p>
//     </div> 
//     </div>`
//    )
// }
// document.body.addEventListener('keydown', conversar6)
// }


// // ................... felix ......................

// function conversar6(event) {

// if (event.key === "Enter") {
// document.body.removeEventListener('keydown', conversar5)
// var cont1 = document.getElementById('cont1')
// cont1.remove()

// if (selectValue == "res4") {

//    stage1.insertAdjacentHTML('afterbegin', `
//     <div id="cont1">
//        <div id="imgDialogo">
//        </div>
//         <div id='globoDialogo'>
//         <h1>Felix</h1>
//         <p>Que pena... supongo que me servira como una pratica mas </p>
//     </div> 
//     </div>

//         `)
// }

// if (selectValue == "res5") {


//    stage1.insertAdjacentHTML('afterbegin', `
//     <div id="cont1">
//        <div id="imgDialogo">
//        </div>
//         <div id='globoDialogo'>
//         <h1>Felix</h1>
//         <p>No es necesario que sean de alto nivel, la maldad sigue siendo mladad aunque no sea de alto rango</p>
//     </div> 
//     </div>

//         `)
// }

//    if (selectValue == "res6") {

//       stage1.insertAdjacentHTML('afterbegin', `
//     <div id="cont1">
//        <div id="imgDialogo">
//        </div>
//         <div id='globoDialogo'>
//         <h1>Felix</h1>
//         <p>Si, quiza lo sea, pero no es algo me va a detener tan facilmente </p>
//     </div> 
//     </div>
//         `)
//    }
//    document.body.addEventListener('keydown', conversar7)
// }
// }
// // //................... marta ......................

// function conversar7() {
// if (event.key === "Enter") {
//    document.body.removeEventListener('keydown', conversar6)
//   var cont1 = document.getElementById('cont1')
//    cont1.remove()

// if (selectValue == "res4") {

//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 

//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>No te desanimes, seguro encontras algo que te interese en tu viaje, ademas un terrible mal acechará estas tierras en poco tiempo </p>
//     </div> 
//     </div>`
//    )
// }
// if (selectValue == "res5") {
//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 

//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>Que veo un aventurero que deja atras la fama para derrotar a la horrible maldad que se avecina</p>
//     </div> 
//     </div>`
//    )
// }
// if (selectValue == "res6") {

//    stage1.insertAdjacentHTML('afterbegin', `
//    <div id="cont1">
//    <div id="imgDialogo1">
// </div> 
//  <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>Muy bien, es mejor que pienses asi, te preparas para la pesadilla que se avecina </p>
//     </div> 
//     </div>`
//    )
// }
// document.body.addEventListener('keydown', conversar8)
// }}


// // ................... felix ......................

// function conversar8(event) {

// if (event.key === "Enter") {  
//    document.body.removeEventListener('keydown', conversar7)

//    var cont1 = document.getElementById('cont1')
//      cont1.remove()
//       stage1.insertAdjacentHTML('afterbegin', `
//  <div id="cont1">
//     <div id="imgDialogo">
//     </div>
//      <div id='globoDialogo'>
//      <h1>Felix</h1>
//      <form>
//      <fieldset>
//          <select name="dialogo1" id="dialogo1" onchange="conversar9()" >
//          <option>Seleccionar respuesta:</option>
//             <option value="res4">Que maldad de avecina?</option>
//              <option value="res5">Por supuesto!</option>
//              <option value="res6">Intentas asustarme?</option>
//          </select>
//      </fieldset>
//  </form>
//  </div> 
//  </div>
//      `)

// }
// document.body.addEventListener('keydown', conversar9)
// }
// // ................... marta ......................

// function conversar9() {  
//    document.body.removeEventListener('keydown', conversar8)
//    var cont1 = document.getElementById('cont1')
//    cont1.remove()

//       stage1.insertAdjacentHTML('afterbegin', `
//        <div id="cont1">
//           <div id="imgDialogo1">
//           </div>
//            <div id='globoDialogo'>
//            <h1>Marta</h1>
//            <p>Te contare a que me refiero, las antiguas leyendes cuentan que en este año un terrible creador liberara atrosidades y solo aquel con la valentia de enfrentarlo, prodra evitar la ruinas de estas tierras, nadie sabe muy bien en que dia sera, pero se rumorea que en las noches mas oscuras las criaturas deciden salir </p>
//        </div> 
//        </div>

//            `)
//            document.body.addEventListener('keydown', conversar10)

// }

// // ................... marta ......................

// function conversar10() {  

// if (event.key === "Enter") { 

//    document.body.removeEventListener('keydown', conversar9)
// var cont1 = document.getElementById('cont1')
// cont1.remove()

//    stage1.insertAdjacentHTML('afterbegin', `
//     <div id="cont1">
//        <div id="imgDialogo1">
//        </div>
//         <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>quien sabe? a lo mejor son puros cuentos para dormir¿o no? comoo sea... si continuas por este camino te contraras con una tienda, a lo mejor se te hace interesante </p>
//     </div> 
//     </div>

//         `)}
//         document.body.addEventListener('keydown', conversar11)    
// }
// function conversar11() {  


// if (event.key === "Enter") { 
//       document.body.removeEventListener('keydown', conversar10)
// var cont1 = document.getElementById('cont1')
// cont1.remove()
//    stage1.insertAdjacentHTML('afterbegin', `
//     <div id="cont1">
//        <div id="imgDialogo">
//        </div>
//         <div id='globoDialogo'>
//         <h1>Marta</h1>
//         <p>Muchas gracias, </p>
//     </div> 
//     </div>

//         `)}

//  document.body.addEventListener('keydown', conversar12)   
// }


// function conversar12(event) {
// if (event.key === "Enter") {
//    var cont1 = document.getElementById('cont1')
//    cont1.remove()
//       document.body.addEventListener('keydown', mover)
// }
// }
























