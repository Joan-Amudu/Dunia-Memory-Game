if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

function ready() {
    let cardArray = Array.from(document.getElementsByClassName('flip-card-inner'));
    cardArray.forEach(card => {
        card.addEventListener('click',() => {

        })
    })
}



//Flipping cards

//const cards = document.querySelectorAll('.flip-card-inner');
//function flipCard() {
//   this.classList.toggle('flip');  
//}

// random 

// start Game

// matching cards


// end game

// display results

//cards.forEach((card) => card.addEventListener('click', flipCard));