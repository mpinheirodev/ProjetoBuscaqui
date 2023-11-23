window.onload = function(){
    deslizarMin();
    deslizarMax();
}
let valorMin = document.getElementById("slider-1");
let valorMax = document.getElementById("slider-2");
let telaMin = document.getElementById("range1");
let telaMax = document.getElementById("range2");
let minGap = 0;
let tamanhoFaixa = document.querySelector(".faixa_deslizante");
let tamanhoTotal = document.getElementById("slider-1").max;
function deslizarMin(){
    if(parseInt(valorMax.value) - parseInt(valorMin.value) <= minGap){
        valorMin.value = parseInt(valorMax.value) - minGap;
    }
    telaMin.textContent = valorMin.value;
    setarCor();
}
function deslizarMax(){
    if(parseInt(valorMax.value) - parseInt(valorMin.value) <= minGap){
        valorMax.value = parseInt(valorMin.value) + minGap;
    }
    telaMax.textContent = valorMax.value;
    setarCor();
}
function setarCor(){
    tamanho1 = -4 + (valorMin.value / tamanhoTotal) * 100;
    tamanho2 = -4 + (valorMax.value / tamanhoTotal) * 100;
    tamanhoFaixa.style.background = `linear-gradient(to right, #dadae5 ${tamanho1}% , #B81414 ${tamanho1}% , #B81414 ${tamanho2}%, #dadae5 ${tamanho2}%)`;
}

// scroll navbar

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})

// Dropdown de categorias

const Dropdown = document.querySelector(".categorias");
const DropdownContent = document.querySelector(".lista-categorias");

document.addEventListener('mousedown', (e) => {
  if (Dropdown.contains(e.target)) {
    DropdownContent.classList.toggle("mostrar");
  } else if (DropdownContent.contains(e.target)) {

  }
  else {
    DropdownContent.classList.remove("mostrar");
  }
})


// Dropdown de notificações

const DropdownNotificacoes = document.querySelector("#notificacao");
const DropdownNotificacoesContent = document.querySelector(".notificacao");

document.addEventListener('mousedown', (e) => {
  if (DropdownNotificacoes.contains(e.target)) {
    DropdownNotificacoesContent.classList.toggle("mostrar");
  } else {
    DropdownNotificacoesContent.classList.remove("mostrar");
  }
})


// Modal
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

