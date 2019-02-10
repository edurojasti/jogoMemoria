//logica do game Memoria
//@author: Eduardo Rojas

const cardboard = document.querySelector("#cardboard");
const imagens = ['angular.svg', 'aurelia.svg', 'backbone.svg', 'ember.svg', 'react.svg', 'vue.svg']; // <-- Array 

let cardHTML = '';

//bloco para criar uma div no html por cada elemento do array
imagens.forEach(img => {
    cardHTML += `
    <div>
        <img src="imgs/${img}">
        <img src="imgs/js.svg">
    </div>
   `
})

//adiciona todo conteudo criado no cardHTML para a variável cardboard
cardboard.innerHTML = cardHTML