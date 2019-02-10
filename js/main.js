//logica do game Memoria
//@author: Eduardo Rojas

 

    function gameMEMORIA(){
        var numAleat = Math.floor(Math.random() * 4) + 1
        switch(numAleat){
            case 1:
                var imagens = ['01.jpg', '02.jpg','angular.svg','aurelia.svg', 'backbone.svg', 'ember.svg', 'react.svg', 'vue.svg']; // <-- Array
                break

            case 2:
                var imagens = ['vue.svg','ember.svg', 'backbone.svg', 'aurelia.svg', '01.jpg', '02.jpg','react.svg', 'angular.svg']; // <-- Array
                break

            case 3:
                var imagens = ['backbone.svg', 'aurelia.svg', 'react.svg','vue.svg','ember.svg', 'angular.svg', '01.jpg', '02.jpg']; // <-- Array
                break
            
            case 4:
                var imagens = ['ember.svg', '01.jpg', '02.jpg','react.svg', 'vue.svg', 'angular.svg','aurelia.svg', 'backbone.svg']; // <-- Array
                break
        }

        const cardboard = document.querySelector("#cardboard");
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

        const cards = document.querySelectorAll(".memory-card")
        let primeiraCard, segundaCard

        function flipcard(){
            this.classList.add("flip")
            
            if(!primeiraCard){
                primeiraCard = this;

                return false
            }

        }

        cards.forEach(card => card.addEventListener('click', flipcard))
    }