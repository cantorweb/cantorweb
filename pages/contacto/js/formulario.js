// VALIDACIÓN DE DATOS 

let nombre = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel")


const form = document.querySelector(".formulario");

form.addEventListener("submit", ()=>{
    e.preventDefault()

    let mensaje = ""
    let regexEmail = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";


    if(nombre.value.lenght > 6){
        mensaje = "El nombre es muy corto"
    }

    console.log(mensaje)
    console.log(nombre.value + email.value)
    // if(regexEmail.test(email.value))

})