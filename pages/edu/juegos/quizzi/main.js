
//  addEventListener("load", scrollDown)
//  function scrollDown(){
//  scroll.scrollTop = scroll.scrollHeight;

//  }
window.onload = function(){
  window.scroll(0,200)
// window.scroll.scrollTop =  window.scroll.scrollHeight;
}



let INDEX_PREGUNTA = 0;
let puntaje = 0;

cargarPregunta(INDEX_PREGUNTA)


function cargarPregunta(index){
    objetoPregunta = baseDePreguntas[index]

    opciones = [...objetoPregunta.distractores]
    opciones.push(objetoPregunta.respuesta)

    opciones.sort(()=>Math.random()-0.5)

    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
     
    if(objetoPregunta.img){
        document.getElementById("imagen").src = objetoPregunta.img
        document.getElementById("imagen").style.display = ""
    } 
    else document.getElementById("imagen").style.display = "none"

    if(!objetoPregunta.ayuda) document.querySelector(".btn-ayuda").style.display = "none"
    if(objetoPregunta.ayuda) document.querySelector(".btn-ayuda").style.display = ""


    document.getElementById("opcion1").innerHTML = opciones[0]
    document.getElementById("opcion2").innerHTML = opciones[1]
    document.getElementById("opcion3").innerHTML = opciones[2]
    document.getElementById("opcion4").innerHTML = opciones[3]



}

async function seleccionarOpcion(index){
    let validez = opciones[index] == objetoPregunta.respuesta
    if(validez){
        await Swal.fire({
        title: 'Respuesta correcta',
        text: `"${objetoPregunta.respuesta}" es correcto`,
        icon:"success",
        background:"var(--barra-bg)",
        color:"var(--color-text)"
        // width:"70%"
        });
        puntaje++

    }
    else{
        await Swal.fire({
        title: 'Respuesta incorrecta',
        text: `La repuesta correcta es "${objetoPregunta.respuesta}"`,
        icon:"error",
        background:"var(--barra-bg)",
        color:"var(--color-text)",
        // width:"70%",
        // toast:"true"
        })
    }


    INDEX_PREGUNTA++
    if (INDEX_PREGUNTA>= baseDePreguntas.length){
        let mensaje;
        let imgGameOver = undefined
        
        if(puntaje == (baseDePreguntas.length) || puntaje == (baseDePreguntas.length - 1)){
            mensaje = "¡¡Felicidades!!"
            imgGameOver = "https://i.ibb.co/D7hbLrb/trofeo.png"
        }
        else if(puntaje=>(baseDePreguntas.length/2)){
            mensaje = "¡Muy bueno!"
            imgGameOver = "https://i.ibb.co/9WpK01m/medalla.png"
        }
        else if(puntaje<(baseDePreguntas.length/2)){
            mensaje = "¡Muy bueno!"
            imgGameOver = "https://i.ibb.co/2575GpN/triste.png"
         }

        
        await Swal.fire({
            customClass:{
                image:"width"
            },
            title: 'JUEGO TERMINADO',
            text: `
            ${mensaje}. \n
            Tu Puntaje fue de de "${puntaje}/${baseDePreguntas.length}"
            `,
            imageUrl:imgGameOver,
            background:"var(--color-i)",
            color:"var(--color-text)",
            confirmButtonColor:"#444"

        

            
            // width:"70%"
        })

    INDEX_PREGUNTA = 0;
    puntaje = 0;
    }

    
    cargarPregunta(INDEX_PREGUNTA)
}

function ayuda(){

        Swal.fire({
        title: '¿Ayuda?',
        text: objetoPregunta.ayuda,
        imageUrl: objetoPregunta.ayudaImg,
        // imageWidth: 400,
        // imageHeight: 200,
        // imageAlt: 'Custom image',
        background:"var(--color-i)",
        color:"#333",
        confirmButtonColor:"#444"
        
        })


}

