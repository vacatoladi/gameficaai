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

const selecionarSlide = (indiceSlide) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}

let listaCases = [

    {
        imagem: "https://unsplash.it/600/400?image=21",
        descricao: "Uma Empresa de tecnologia lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias inovadoras"
    },
    {
        imagem: "https://unsplash.it/600/400?image=584",
        descricao: "Uma empresa de consultorias, cria uma narrativa interativa de gameficação para seu programa de treinamento"
    },
    {
        imagem: "https://unsplash.it/600/400?image=410",
        descricao: "Uma empresa de vendas implementa uma competição de gamificada entre equipes que competem pelo topo do rank"
    },
    {
        imagem: "https://unsplash.it/600/400?image=1001",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento"
    }

]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    let template = ""

    listaCases.forEach( cardCase => {
        template += `<div class="card">
        <img src="${cardCase.imagem}" alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver mais</button>
    </div>`
})
elementoLista.innerHTML = template
}