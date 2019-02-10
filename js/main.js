//logica do game Memoria
//@author: Eduardo Rojas

const cardboard = document.querySelector("#cardboard");
const imagens = ['angular.svg', 'aurelia.svg', 'backbone.svg', 'ember.svg', 'react.svg', 'vue.svg']; // <-- Array 

let cardHTML = '';

imagens.forEach(img => {
    cardHTML += `
    <div>
        <img src="imgs/${img}"
        <img src="imgs/js.svg">
    </div>
   `
})

cardboard.innerHTML = cardHTML