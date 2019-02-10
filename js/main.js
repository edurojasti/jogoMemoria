//logica do game Memoria
//@author: Eduardo Rojas

const cardboard = document.getElementById("cardboard");
const imagens = ['angular.svg', 'aurelia.svg', 'backbone.svg', 'ember.svg', 'react.svg', 'vue.js']; // <-- Array 

var cardHTML = '';

imagens.forEach(img => {
    cardHTML += `
    <div>
        <img src="imgs/${img}"
        <img src="imgs/js-badge.svg">
    </div>
   `
})
