
    // creating an array of cards(12 pair images of flags of European Countries)
    let cardArray = [
    {name: "Albania", img:"assets/images/flags/Albania.svg.png"},
    {name: "Albania", img:"assets/images/flags/Albania.svg.png"},  
    {name: "Andorra", img:"assets/images/flags/Andorra.svg.png"},
    {name: "Andorra", img:"assets/images/flags/Andorra.svg.png"},    
    {name: "Armenia", img:"assets/images/flags/Armenia.svg.png"}, 
    {name: "Armenia", img:"assets/images/flags/Armenia.svg.png"},    
    {name: "Austria", img:"assets/images/flags/Austria.svg.png"},
    {name: "Austria", img:"assets/images/flags/Austria.svg.png"},    
    {name: "Ireland", img:"assets/images/flags/Ireland.svg.png"},
    {name: "Ireland", img:"assets/images/flags/Ireland.svg.png"},     
    {name: "Belarus", img:"assets/images/flags/Belarus.svg.png"},
    {name: "Belarus", img:"assets/images/flags/Belarus.svg.png"},    
    {name: "Malta", img:"assets/images/flags/Malta.svg.png"},
    {name: "Malta", img:"assets/images/flags/Malta.svg.png"},    
    {name: "Croatia", img:"assets/images/flags/Croatia.svg.png"}, 
    {name: "Croatia", img:"assets/images/flags/Croatia.svg.png"},  
    {name: "Cyprus", img:"assets/images/flags/Cyprus.svg.png"}, 
    {name: "Cyprus", img:"assets/images/flags/Cyprus.svg.png"},   
    {name: "France", img:"assets/images/flags/France.svg.png"},
    {name: "France", img:"assets/images/flags/France.svg.png"},    
    {name: "Estonia", img:"assets/images/flags/Estonia.svg.png"},
    {name: "Estonia", img:"assets/images/flags/Estonia.svg.png"},    
    {name: "Finland", img:"assets/images/flags/Finland.svg.png"},        
    {name: "Finland", img:"assets/images/flags/Finland.svg.png"},   
];

// Using Math.random to shuffle to game board.
cardArray.sort(() => 0.5 - Math.random());

// declaring variables and getting DOM elements.
let grid = document.querySelector(".grid");
let results = document.querySelector("#result");
let elem = document.getElementById("countTimer");
let flippedCard = []
let flippedCardId = []
let cardsWon = []
let restartGame;


document.addEventListener("DOMContentLoaded", function () {
    gameBoard()
    

    restartGame = document.getElementById("startGame");
    restartGame.addEventListener("click", startClock);

});

// Audio Controls
window.addEventListener("load", initAudioPlayer); 
var music, playbtn;
 function initAudioPlayer() {
     music = new Audio("Assets/sounds/BackgroundMusic.mp3");     
     music.loop = true;
     
     // set onject references
     playbtn = document.getElementById("playpausebtn");
     
     // Add event handling
     playbtn.addEventListener("click", playPause);
    
     // Functions
     function playPause() {
         if(music.paused) {
             music.play();
         } else {
             music.pause();
         }
     }
 }

// Timer







function gameBoard() {         
  let startText = Array.from(document.getElementsByClassName("start-text"));               
      startText.forEach(start =>{
          start.addEventListener("click", () => {
              start.classList.remove("visible");               
              music.play();              
           
          });

      });          
  for (let i = 0; i < cardArray.length; i++)  {
      var card = document.createElement("img")
      card.setAttribute("src", "Assets/images/backface.jpg")
      card.setAttribute("data-id", i)
      card.addEventListener("click", flipCard)          
      grid.appendChild(card)        
  }      
}

// check for match
function checkForMatch() {   
    let cards = document.querySelectorAll("img")
    let firstCardId = flippedCardId[0]
    let secondCardId = flippedCardId[1]
    if (flippedCard[0] === flippedCard[1] && firstCardId !== secondCardId) {
        cardsWon.push(flippedCard)
    } else {
        cards[firstCardId].setAttribute("src", "Assets/images/backface.jpg")
        cards[secondCardId].setAttribute("src", "Assets/images/backface.jpg")
        
    }
    flippedCard = []
    flippedCardId = []
    results.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        results.textContent = "You Won!!"
                      
         
    }        
}

// flip card
function flipCard() {
    let cardId = this.getAttribute("data-id")
    flippedCard.push(cardArray[cardId].name)
    flippedCardId.push(cardId)
    this.setAttribute("src", cardArray[cardId].img) 
               
    if(flippedCard.length === 2) {
      setTimeout(checkForMatch, 500)      
  }
      
}

  

