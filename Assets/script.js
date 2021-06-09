document.addEventListener('DOMContentLoaded', () => {
      // creating an array of cards(12 pair images of flags of European Countries)
const cardArray = [
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Andorra', img:'Assets/images/flags/Andorra.svg.png'},
    {name: 'Andorra', img:'Assets/images/flags/Andorra.svg.png'},
    {name: 'Armenia', img:'Assets/images/flags/Armenia.svg.png'},
    {name: 'Armenia', img:'Assets/images/flags/Armenia.svg.png'},
    {name: 'Austria', img:'Assets/images/flags/Austria.svg.png'},
    {name: 'Austria', img:'Assets/images/flags/Austria.svg.png'},
    {name: 'Ireland', img:'Assets/images/flags/Ireland.svg.png'},
    {name: 'Ireland', img:'Assets/images/flags/Ireland.svg.png'},
    {name: 'Belarus', img:'Assets/images/flags/Belarus.svg.png'},
    {name: 'Belarus', img:'Assets/images/flags/Belarus.svg.png'},
    {name: 'Malta', img:'Assets/images/flags/Malta.svg.png'},
    {name: 'Malta', img:'Assets/images/flags/Malta.svg.png'},
    {name: 'Croatia', img:'Assets/images/flags/Croatia.svg.png'},
    {name: 'Croatia', img:'Assets/images/flags/Croatia.svg.png'},
    {name: 'Cyprus', img:'Assets/images/flags/Cyprus.svg.png'},
    {name: 'Cyprus', img:'Assets/images/flags/Cyprus.svg.png'},
    {name: 'France', img:'Assets/images/flags/France.svg.png'},
    {name: 'France', img:'Assets/images/flags/France.svg.png'},
    {name: 'Estonia', img:'Assets/images/flags/Estonia.svg.png'},
    {name: 'Estonia', img:'Assets/images/flags/Estonia.svg.png'},
    {name: 'Finland', img:'Assets/images/flags/Finland.svg.png'},
    {name: 'Finland', img:'Assets/images/flags/Finland.svg.png'},
]

  // Using Math.random to shuffle to game board.

  cardArray.sort(() => 0.5 - Math.random())

  // creating  the game board

  const grid = document.querySelector('.grid')
  const results = document.querySelector('#result')
  //const timer = document.querySelector('#time')   
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

class SoundControls {
    constructor() {
        this.backGroundMusic = new Audio('Assets/sounds/BackgroundMusic.mp3');
        this.cardFlip = new Audio('Assets/sounds/flipsound.wav');
        this.victorySound = new Audio('Assets/sounds/victorysound.mp3');
        this.gameOver = new Audio('Assets/sounds/gameover.mp3');
        this.backGroundMusic.loop = true;
    }
   startMusic() {
       this.backGroundMusic.play();
   }
   stopMusic() {
       this.backGroundMusic.pause();
       this.backGroundMusic.currentTime = 0;
   }
   flip() {
    this.cardFlip.play();
   }
    victory() {
       this.stopMusic();
       this.victorySound.play();  
   }
   gameOver() {
       this.stopMusic();
       this.gameOver.play();
   }
   
}

class memoryGame {
    constructor(totalTime) {
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('#countTimer')
        this.soundControls = new SoundControls();
    }
    
    startGame() {
        this.cardsChosen = null;
        this.timeRemaining = this.totalTime;
        this.busy = true;
    }
    canFlipCard() {
        return !this.busy && !this.cardsWon.includes(card) && card !==this.cardsChosen;
    }

}
let audioController = new SoundControls();
function gameBoard() {  
         
    let startText = Array.from(document.getElementsByClassName('start-text'));               
        startText.forEach(start =>{
            start.addEventListener('click', () => {
                start.classList.remove('visible');
                //game.startGame() ;               
                
                audioController.startMusic();        
                                    
            });

        });          
    for (let i = 0; i < cardArray.length; i++)  {
        var card = document.createElement('img')
        card.setAttribute('src', 'Assets/images/backface.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)          
        grid.appendChild(card)
        
    }      
}

  // check for match
  function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      if (cardsChosen[0] === cardsChosen[1]) {
          alert ('You found a match')
          cardsWon.push(cardsChosen)
      } else {
          cards[optionOneId].setAttribute('src', 'Assets/images/backface.jpg')
          cards[optionTwoId].setAttribute('src', 'Assets/images/backface.jpg')
          //alert('sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      results.textContent = cardsWon.length
      if (cardsWon.length === cardArray.length/2) {
          results.textContent = 'Congrats'
          audioController.victory();
      }
  }

  // flip card
  function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)             
      if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)   
       
      }
        
  }
  gameBoard()
})

