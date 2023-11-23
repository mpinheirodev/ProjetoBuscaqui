    //Script para carrosel de fotos
    document.addEventListener("DOMContentLoaded", function () {
        const mainImage = document.querySelector(".imagem_principal");
        const thumbnails = document.querySelectorAll(".thumbnail");
      
        thumbnails.forEach((thumbnail) => {
          thumbnail.addEventListener("click", () => {
            mainImage.src = thumbnail.src;
            mainImage.alt = thumbnail.alt;
          });
        });
      });
      
      function showTab(tabId) {
        // Oculta todos os conteúdos das abas
        document.querySelectorAll('.tab-content').forEach(tab => {
          tab.classList.remove('active');
        });
      
        // Remove a classe 'active' de todos os botões
        document.querySelectorAll('.tab-button').forEach(button => {
          button.classList.remove('active');
        });
      
        // Exibe o conteúdo da aba clicada
        document.getElementById(tabId).classList.add('active');
      
        // Adiciona a classe 'active' ao botão clicado
        event.target.classList.add('active');
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
