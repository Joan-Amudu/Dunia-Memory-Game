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

  cardArray.sort(() => 0.5 - Math.random());

  // creating  the game board

  const grid = document.querySelector('.grid');
  const results = document.querySelector('#result');
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

// Audio Controls
 var audio, playbtn, mutebtn;
 function initAudioPlayer() {
     audio = new Audio('Assets/sounds/BackgroundMusic.mp3');
     victory = new Audio('Assets/sounds/victorysound.mp3');
     audio.loop = true;
     audio.play();
     // set onject references
     playbtn = document.getElementById('playpausebtn');
     mutebtn = document.getElementById('mutebtn');
     // Add event handling
     playbtn.addEventListener('click', playPause);
     mutebtn.addEventListener('click', mute);
     // Functions
     function playPause() {
         if(audio.paused) {
             audio.play();
         } else {
             audio.pause();
         }

     }
     function mute() {
         if(audio.muted) {
             audio.muted = false;
         } else {
             audio.muted = true;
         }
    }
 }
  
function gameBoard() {         
    let startText = Array.from(document.getElementsByClassName('start-text'));               
        startText.forEach(start =>{
            start.addEventListener('click', () => {
                start.classList.remove('visible');               
                playPause();                   
             
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
          alert ('Match found!')
          cardsWon.push(cardsChosen)
      } else {
          cards[optionOneId].setAttribute('src', 'Assets/images/backface.jpg')
          cards[optionTwoId].setAttribute('src', 'Assets/images/backface.jpg')
          
      }
      cardsChosen = []
      cardsChosenId = []
      results.textContent = cardsWon.length
      if (cardsWon.length === cardArray.length/2) {
          results.textContent = 'You Won!!'
          //audioController.victory();               
           
      }
          
  }

// Timer
    var elem = $('#countTimer');
    var count = 0;
    setInterval(function() {
      if (count > 60) { // We check if the timer is in seconds or mins
        var time = ++count; // We get a copy of the time in 'seconds'
        time = parseInt(time / 60); // We convert it to mins
        $(elem).text(time + 'm');
    } else { // Simmilarly we can also add a condition to check hours with s=3600
        $(elem).text(++count + 's');
    }
    }, 1000);

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
  window.addEventListener('load', initAudioPlayer);
})

