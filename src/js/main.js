
// scroll navbar

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})


// Carrossel

let slideIndex = 1;
showSlides(slideIndex);

// controles Proxima/anterior 
function passarSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail imagem controles
function slideAtual(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let botoes = document.getElementsByClassName("botao");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < botoes.length; i++) {
    botoes[i].className = botoes[i].className.replace(" ativo", "");
  }
  slides[slideIndex - 1].style.display = "block";
  botoes[slideIndex - 1].className += " ativo";
}


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

