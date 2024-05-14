let menu = document.getElementById("menu")
let iconex = document.getElementById("icone-x")
let iconebarras = document.getElementById("icone-barras")

function abrirFecharMenu(){
    
    if(menu.classList.contains("menu-fechado")){
        menu.classList.remove("menu-fechado")

        iconex.style.display = "inline"
        iconebarras.style.display = "none"
    } else {
        menu.classList.add("menu-fechado")

        iconex.style.display = "none"
        iconebarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")

    iconex.style.display = "inline"
    iconebarras.style.display = "none"
}

let slides = [
    'primeiro-banner',
    "segundo-banner",
    'terceiro-banner'
]

let slideAtual = 0

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    banner.classList.remove(slides[slideAtual])

    if(slideAtual < 2){
        slideAtual++
    } else {
        slideAtual = 0
    }

    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {
    banner.classList.remove(slides[slideAtual])
    
    if(slideAtual > 0){
        slideAtual--
    } else {
        slideAtual = 2
    }
    
    banner.classList.add(slides[slideAtual])
}