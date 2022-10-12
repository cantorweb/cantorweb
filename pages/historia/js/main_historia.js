const footers = document.querySelectorAll(".pie");
const $x = document.querySelectorAll(".x");


const capa = document.getElementById('capa');
const main = document.querySelector("main")


footers.forEach( foo => {
    foo.addEventListener("click", ()=>{   toogleCard(foo)  })
})

var PieActual = undefined;

function toogleCard(foo){
    
    capa.classList.toggle('active--capa') // modal bg
    

    let Arrow = foo.lastElementChild //flechita del pie
        Arrow.classList.toggle('active--i') // activamos/desactivamos que de vuelta

    let Text = foo.firstElementChild // texto del pie
    // si esta activo dira cerrar sino abrir
    if(Arrow.classList.contains('active--i'))Text.innerText = ('Cerrar')
    else Text.innerText = ('Abrir')


        let card = foo.closest(".card")
        card.classList.toggle('active--c')

        let oculto = card.children[1].children[1]

        oculto.classList.toggle('mostrar')


        main.classList.toggle("active--main")

        return PieActual = foo

        

}



capa.addEventListener("click", ()=>{
    toogleCard(PieActual)
})


