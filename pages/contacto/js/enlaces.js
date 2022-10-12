const itemLinks = document.querySelectorAll(".link");

itemLinks.forEach((item)=>{
    item.addEventListener("click", ()=>{

        url = item.lastElementChild
        if(url == "tel:24535101") return
        window.open(url)
    })
})
