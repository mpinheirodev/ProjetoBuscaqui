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