//logica do game Memoria
//@author: Eduardo Rojas

const cardboard = document.querySelector("#cardboard");
const imagens = ['angular.svg', 'aurelia.svg', 'backbone.svg', 'ember.svg', 'react.svg', 'vue.svg']; // <-- Array 

let cardHTML = '';

//bloco para criar uma div no html por cada elemento do array
imagens.forEach(img => {
    cardHTML += `
    <div class="memory-card">
        <img class="front-face" src="imgs/${img}">
        <img class="back-face" src="imgs/js.svg">
    </div>
   `
})

//adiciona todo conteudo criado no cardHTML para a variável cardboard
//(cardHTML + cardHTML = duplica o conteudo)
cardboard.innerHTML = cardHTML + cardHTML

//fim de renderização HMTL

function flipcard(){
    console.log(this)
}


const cards = document.querySelectorAll(".memory-card")
cards.forEach(card => card.addEventListener('click', flipcard))