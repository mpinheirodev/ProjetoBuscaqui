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
