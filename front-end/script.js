

var dialogo = document.getElementById('dialogo');
var personaje = document.getElementById("personaje");
var mov = 300;
var action = 0;
console.log(NombreUsuario)

function mover(event) {

   if (event.key === "ArrowRight") {
      mov += 10
      personaje.style.animation = "mymove 0.8s infinite step-end"
      personaje.style.left = "200px"
      personaje.style.left = mov + "px";

   }
   if (event.key === "ArrowLeft") {
      mov -= 10
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
    <p>Hey!, ¿no sos demaciado joven como para andar por los acantilados? </p>
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
var cont1 = document.getElementById('cont1')
var dialogo = 0
var dato = {}
//................... felix ......................

function conversar(event) {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', mover)
      if (dialogo == 0) {
         cont1 = document.getElementById('cont1')
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
                <option value="res2">quiza, pero no es de su incunbencia</option>
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

   var select = document.getElementById("dialogo")
   dato.PrimerDialogo = select.options[select.selectedIndex].innerText;
 
   console.log(dato)
   document.body.removeEventListener('keydown', conversar)

   selectValue = document.getElementById("dialogo").value;
   cont1 = document.getElementById('cont1')
   cont1.remove()
   if (selectValue == "res1") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 

    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>¿Un poco...? en los acantilados existen criaturas que te pueden devorar si no prestas atencion, pero tu tienes pinta de saber de lo que haces, ¿verdad? </p>
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
           <p>Niño arrogante... ¿acaso no sabes quien soy? </p>
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
           <p>Dicelo al ultimo aventurero que fue devorado por no saber cuidarse, como sea, me presento, mi nombre es marta y vine aqui en busca de nuevas especies de plantas  </p>
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
      cont1 = document.getElementById('cont1')
      cont1.remove()


      if (selectValue == "res1") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>quiza... eh entrenado mucho antes de salir del pueblo de donde vengo </p>
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
      cont1 = document.getElementById('cont1')
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
           <p>¿como que bruja? mi nombre es marta y soy una druida... ¿que haces aca de todos modos?  </p>
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
           <p>si tu lo dices... ¿rondas por aca por algo en especial? </p>
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

      cont1 = document.getElementById('cont1')
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
   
   var select = document.getElementById("dialogo1")
   dato.SegundoDialogo = select.options[select.selectedIndex].innerText;
   console.log(dato)
   document.body.removeEventListener('keydown', conversar4)
   selectValue = document.getElementById("dialogo1").value;
   cont1 = document.getElementById('cont1')
   cont1.remove()

   if (selectValue == "res4") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo1">
   </div> 

    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Aca mas que plantas y especies raras de animales no vas a encontrar... quiza en el siguiente pueblo puedas hablar con alguien que te pueda pagar bien </p>
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
           <p>uy... ¡cuanta energia! esa es la actitud, aunque por estas horas no hay muchas criaturas de alto nivel</p>
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
      cont1 = document.getElementById('cont1')
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
      cont1 = document.getElementById('cont1')
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

      cont1 = document.getElementById('cont1')
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
               <option value="res4">Que maldad se avecina?</option>
                <option value="res5">Por supuesto!</option>
                <option value="res6">Intentas asustarme?</option>
            </select>
        </fieldset>
    </form>
    </div> 
    </div>
        `)
   }
}
// ................... marta ......................

function conversar9() {

   var select = document.getElementById("dialogo1")
   dato.TercerDialogo = select.options[select.selectedIndex].innerText;
   console.log(dato)
   selectValue = document.getElementById("dialogo1").value;

   if (selectValue == "res4" || selectValue == "res5" || selectValue == "res6") {
      document.body.removeEventListener('keydown', conversar8)
      cont1 = document.getElementById('cont1')
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

   }
   document.body.addEventListener('keydown', conversar10)
}

// ................... marta ......................

function conversar10() {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar9)

      cont1 = document.getElementById('cont1')
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
      cont1 = document.getElementById('cont1')
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

var dialogo1 = 0


function conversar_part2_(event) {


   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar12)
      document.body.removeEventListener('keydown', mover)
      if (dialogo1 == 0) {
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
         dialogo1++
      }
   }
}

// ..............................Elis...............................

function continuar_dialogo1() {

   var select = document.getElementById("dialogo")
   dato.CuartoDialogo = select.options[select.selectedIndex].innerText;
   console.log(dato)
   selectValue = document.getElementById("dialogo").value;
   cont1 = document.getElementById('cont1')
   cont1.remove()

   if (selectValue == "res7") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo2">
      </div> 

    <div id='globoDialogo'>
           <h1>Elis</h1>
           <p>Si, se me ocurrio cuando salto el boom de cuando todos querian ser aventureros, pero... todos morian antes de llegar aca y no esta teniendo mucho exito por eso </p>
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
           <p>Si, quizá un poco, el estilo es algo nuevo que quice probar, puedes llamarme innovadora quiza? jejeje </p>
       </div> 
       </div>`
      )
   }
   document.body.addEventListener('keydown', conversar_part2_3)
}



//................... felix ......................

function conversar_part2_3(event) {

   if (event.key === "Enter") {

      document.body.removeEventListener('keydown', continuar_dialogo1)
      cont1 = document.getElementById('cont1')
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
   }
   document.body.addEventListener('keydown', conversar_part2_4)
}


function conversar_part2_4() {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar_part2_3)
      cont1 = document.getElementById('cont1')
      cont1.remove()
      if (selectValue == "res7") {

         stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo2">
   </div> 

    <div id='globoDialogo'>
           <h1>Elis</h1>
           <p>Me las se arreglar sola, siempre ando con mi arco a mano, veo que vienes de las colinas, buscas a esas criaturas del bosque para cazarlas ?</p>
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
           <p>no te preocupes, ya podras volver en algun momento, vienes por la cazeria? </p>
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
           <h1>Elis</h1>
           <p>NO. uno nunca sabe cuando algun goblin atacar, hablando de criaturas horribles te interesaria ir de caceria? pago bien </p>
       </div> 
       </div>`
         )
      }
   }
   document.body.addEventListener('keydown', conversar_part2_5)
}

//................... felix ......................

function conversar_part2_5(event) {

   if (event.key === "Enter") {

      document.body.removeEventListener('keydown', conversar_part2_4)
      cont1 = document.getElementById('cont1')
      cont1.remove()
      stage1.insertAdjacentHTML('afterbegin', `
    <div id="cont1">
       <div id="imgDialogo">
       </div>
        <div id='globoDialogo'>
        <h1>Felix</h1>
        <form>
        <fieldset>
            <select name="dialogo" id="dialogo" onchange="continuar_dialogo2()" >
            <option>Seleccionar respuesta:</option>
               <option value="res10">Que caseria?</option>
                <option value="res11">Justamente por eso vine!</option>
                <option value="res12">En absoluto, pero si hay paga...</option>
            </select>

        </fieldset>
    </form>
    </div> 
    </div>
        `)
   }
}

// ....................Elis..................
function continuar_dialogo2() {

   var select = document.getElementById("dialogo")
   dato.CuartoDialogo = select.options[select.selectedIndex].innerText;
   console.log(dato)
   document.body.removeEventListener('keydown', conversar_part2_5)
   selectValue = document.getElementById("dialogo").value;
   cont1 = document.getElementById('cont1')
   cont1.remove()

   if (selectValue == "res10") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo2">
      </div> 

    <div id='globoDialogo'>
           <h1>Elis</h1>
           <p>Una que se organizo todos los años, en esta oportunidad ofresco recompensas muy interesantes ya que son muchas para cazar yo sola </p>
       </div> 
       </div>`
      )
   }
   if (selectValue == "res11") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo2">
      </div> 

    <div id='globoDialogo'>
           <h1>Elis</h1>
           <p>muy bien! me alegra oir que se corrio la vos en los pueblos de mi cazeria anual</p>
       </div> 
       </div>`
      )
   }
   if (selectValue == "res12") {

      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo2">
      </div> 
    <div id='globoDialogo'>
           <h1>Marta</h1>
           <p>Con que eres ese tipo de "heroe"... bueno mientras me traigas los materiales que consigas te dare la paga</p>
       </div> 
       </div>`
      )
   }
   document.body.addEventListener('keydown', conversar_part2_6)
}

function conversar_part2_6(event) {



   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', continuar_dialogo2)
      cont1 = document.getElementById('cont1')
      cont1.remove()
      if (selectValue == "res10") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>Perfecto, una aventura asi es lo que necesitaba ! ya mismo voy a partir</p>
       </div> 
       </div>
   
           `)
      }

      if (selectValue == "res11") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>Emmm... si, se habla mucho de eso... por ahi en donde vivo... mejor si me apresuro al lugar ¿donde es?</p>
       </div> 
       </div>
   
           `)
      }
      if (selectValue == "res12") {

         stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont1">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>En es caso acepto, cuentame mas  de lo que tengo que hacer </p>
       </div> 
       </div>
           `)
      }
      document.body.addEventListener('keydown', conversar_part2_7)
   }
}

function conversar_part2_7(event) {



   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar_part2_6)
      cont1 = document.getElementById('cont1')
      cont1.remove()
      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo2">
      </div> 

    <div id='globoDialogo'>
           <h1>Elis</h1>
           <p>De acuerdo... tu tarea no sera muy dificil, solo derrota slimes y traeme sus cuerpos, pero antes de entrar al bosque debes esperar que sea de noche sino los slimes no apareceran!</p>
       </div> 
       </div>`
      )
   }

   document.body.addEventListener('keydown', conversar_part2_8)
}

function conversar_part2_8(event) {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar_part2_7)

      cont1 = document.getElementById('cont1')
      cont1.remove()
      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo">
      </div> 

    <div id='globoDialogo'>
           <h1>FeliX</h1>
           <p>Slimes? esas criaturas viscosa? claro que lo haré!  puedo esperar en tu tienda hasta el anochecer? </p>
       </div> 
       </div>`
      )
   }
   document.body.addEventListener('keydown', conversar_part2_9)
}

function conversar_part2_9(event) {

   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar_part2_8)

      cont1 = document.getElementById('cont1')
      cont1.remove()
      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont1">
      <div id="imgDialogo2">
      </div> 

    <div id='globoDialogo'>
           <h1>Elis</h1>
           <p>Por supuesto, como no voy a invitar a un participante de la 3° edicion de Caza Slimes a entrar a mi tienda, pasa!</p>
       </div> 
       </div>`
      )
      document.body.addEventListener('keydown', conversar_part2_10)
   }

}


function conversar_part2_10(event) {


   document.body.removeEventListener('keydown', conversar_part2_9)
   if (event.key === "Enter") {

      document.body.removeEventListener('keydown', conversar_part2_)
      cont1 = document.getElementById('cont1')
      cont1.remove()
      var Fondo2 = document.getElementById('Fondo2')
      Fondo2.remove()
      var personaje3 = document.getElementById('personaje3')
      personaje3.remove()
      personaje.remove()

      stage1.insertAdjacentHTML('afterbegin', ` 
      <div id="telon">
      <h2>5 HOURS LATER . . .</h2>
      <h3>Press enter to continue -> </h3> 
      </div>
      ` )

   }
   document.body.addEventListener('keydown', conversar_part2_11)
}

function conversar_part2_11() {


   if (event.key === "Enter") {
      document.body.removeEventListener('keydown', conversar_part2_10)
      var telon = document.getElementById("telon")
      telon.remove()

      stage2.insertAdjacentHTML('afterbegin', ` 

      <div id="Fondo3">
      </div>
      <div class="personaje" id="personaje" oninput="mover(event)" >
      </div>
      <div id="EnemigoFinal">
      </div>
  `)
      document.body.addEventListener('keydown', conversar_part2_12)
   }
}

var cont2

function conversar_part2_12(event) {

   document.body.removeEventListener('keydown', conversar_part2_11)
   if (event.key === "Enter") {

      stage1.insertAdjacentHTML('afterbegin', `
       <div id="cont2">
          <div id="imgDialogo">
          </div>
           <div id='globoDialogo'>
           <h1>Felix</h1>
           <p>¿Que clase de criatura es esa...? ¿no se suponia que deberia de encontrar slimes?</p>
       </div> 
       </div>
           `)         
     cont2 = document.getElementById('cont2')
      document.body.addEventListener('keydown', conversar_part2_13)
   }
}

function conversar_part2_13(event) {

  

   document.body.removeEventListener('keydown', conversar_part2_12)
   if (event.key === "Enter") {
    
      cont2.remove()
      stage1.insertAdjacentHTML('afterbegin', `
      <div id="cont2">
           <div id="imgDialogo3">
           </div>
            <div id='globoDialogo'>
            <h1>???</h1>
            <p> . . . . . </p>
        </div> 
        </div>
           `)         
      // document.body.addEventListener('keydown', conversar_part2_13)
   }
}


function enviar_dialogo(dato) {

   var url = 'http://localhost:3000/dialogo';
   var data = {dialogo: strUser};

   fetch(url, {
     method: 'POST', 
     body: JSON.stringify(data), 
     headers:{
       'Content-Type': 'application/json'
     }
   }).then(res =>{ 
      console.log(res)
   })
}


// function conversar_part2_13(event) {

//    document.body.removeEventListener('keydown', conversar_part2_12)
//    if (event.key === "Enter") {


//       var cont2 = document.getElementById('cont1')
//       cont2.remove()
//       stage1.insertAdjacentHTML('afterbegin', `
//        <div id="cont2">
//           <div id="imgDialogo3">
//           </div>
//            <div id='globoDialogo'>
//            <h1>???</h1>
//            <p> . . . . . </p>
//        </div> 
//        </div>
   
//            `)
//    }

//    // document.body.addEventListener('keydown', conversar_part2_14)
// }


