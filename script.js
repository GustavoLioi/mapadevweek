const btnAvancar=document.getElementById("btn-avancar");
const cartoes =document.querySelectorAll(".cartao");
let cartaoAtual =0;

function esconderCartaoSelecionado(){

}


btnAvancar.addEventListener("click",function(){
if(cartaoAtual===cartoes.length - 1) return;

cartaoAtual++;
cartoes[cartaoAtual].classList.add("selecionado");

const cartaSelecionado = document.querySelector(".selecionado");
cartaSelecionado.classList.remove("selecionado");


});
//voltar
btnVoltar.addEventListener("click",function(){
if(cartaoAtual ===0) return;

esconderCartaoSelecionado();
const cartaSelecionado = document.querySelector(".selecionado");

const btnAvancar=document.getElementById("btn-avancar");


cartaoAtual--;
cartoes[cartaoAtual].classList.add("selecionado");

const cartaSelecionado = document.querySelector(".selecionado");
cartaSelecionado.classList.remove("selecionado");


});
