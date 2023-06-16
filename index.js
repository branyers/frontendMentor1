document.addEventListener("DOMContentLoaded", (() =>{

    let burgerButtom = document.getElementById("burger-buttom");
    let curtain = document.getElementById("curtain");
    let menu = document.getElementById("menu")
    let buttomClose = document.getElementById("closeMenu")


    burgerButtom.addEventListener("click", (() =>{
        menu.classList.toggle("hidden")
        curtain.classList.toggle("hidden")
        console.log("Estoy haciendo click")
    }))

    buttomClose.addEventListener("click", () =>{
        menu.classList.toggle("hidden")
        curtain.classList.toggle("hidden")
    })


}))