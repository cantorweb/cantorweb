let timeLine = document.querySelector(".timeline");

let fragmento = document.createDocumentFragment();


for(let i = 0; i < Logros.length; i++){

    let titulo = Logros[i].titulo,
        año = Logros[i].año,
        contenido = Logros[i].contenido,
        img = Logros[i].img

        console.log(año)


    let div = document.createElement("DIV");
    div.classList.add("timeline-item");
    div.setAttribute("data-text", `${titulo}`)

    div.innerHTML = `
            <div class="timeline__content"><img class="timeline__img" src="${img}"/>
                <h2 class="timeline__content-title">${año}</h2>
                <p class="timeline__content-desc">${contenido}</p>
            </div>
    `

    fragmento.appendChild(div)
}

timeLine.appendChild(fragmento)

