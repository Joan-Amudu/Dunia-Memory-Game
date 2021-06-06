
class SoundControls{
    constructor() {
        this.flipSound = new Audio('Assets/sounds/flipsound.wav');
    }
    flipMusic() {
        this.flipSound.play();
    }
}
class cardGame {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;

        this.scores = document.getElementsByClassName('score');
        this.timer = document.getElementsByClassName('time');
    }

    startGame() {
        this.cardsToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchCards = [];
        this.busy = true; 
        
        this.cardShuffle();
    }

    flipCard(card){
        if(this.canFlipCard(card)) {
            soundControls.flipMusic();
            this.totalClicks++;
            this.scores.innerText = this.totalClicks;
        }

    }
 
    cardShuffle() {
        for(let i = this.cardsArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1)); 
            this.cardsArray[j].style.order = i;
            this.cardsArray[i].style.order = j;
        }
    }

    canFlipCard(card) {
        return true;
        //return !this.busy && !this.matchCards.includes(card) && card !== this.cardsToCheck;
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('flip-card-inner'));
    let game = new cardGame(100, cards);
    
    overlays.forEach(overlay =>{
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
            
        });
    });

    cards.forEach(card => {
        card.addEventListener('click',() => {
            game.flipCard(card);

        });
    });
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