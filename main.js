
// scroll navbar

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})


// Carrossel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function passarSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
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

// Dropdown.addEventListener("click", () => {
//   DropdownContent.classList.toggle("mostrar");
// });


document.addEventListener('mousedown', (e) => {
  if (Dropdown.contains(e.target)) {
    DropdownContent.classList.toggle("mostrar");
  } else {
    DropdownContent.classList.remove("mostrar");
  }
})