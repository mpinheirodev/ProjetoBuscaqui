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