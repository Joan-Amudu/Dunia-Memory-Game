
class SoundControls{
    constructor() {
        this.flipSound = new Sound('assets/sounds/flipsound.wav');
    }
    flip() {
        this.flipSound.play();
    }
}
class cardGame {
    constructor(cardArray) {
        this.cards = cardArray
        this.scores = document.getElementsByClassName('score');
        this.timer = document.getElementsByClassName('time')
    }
    playGame() {
        this.cardsToCheck = null;
        this.matchCards = [];
        this.busy = true;
    }

    flipCard(card){
        if(this.cardFlipped(card)) {
            this.sound.flipsound();
        }

    }

    cardFlipped(card) {
        return true;
        //return !this.busy && !this.matchCards.includes(card) && card !== this.cardsToCheck;
    }
}

function ready() {
    let cardArray = Array.from(document.getElementsByClassName('flip-card-inner'));
    let game = new cardGame(cardArray);
    cardArray.forEach(card => {
        card.addEventListener('click',() => {
            game.flipCard(card);

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


if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

let soundControls = new SoundControls();