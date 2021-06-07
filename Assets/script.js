document.addEventListener('DOMContentLoaded', () => {
      // array of cards
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
    {name: 'Bulgaira', img:'Assets/images/flags/Bulgaria.svg.png'},
    {name: 'Bulgaria', img:'Assets/images/flags/Bulgaria.svg.png'},
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

  // randomise the cards array

  cardArray.sort(() => 0.5 - Math.random())

  // creating  game board

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []



  function gameBoard() {
   
        let startText = Array.from(document.getElementsByClassName('start-text'));
               
        startText.forEach(start =>{
            start.addEventListener('click', () => {
                start.classList.remove('visible');
                               
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
      resultDisplay.textContent = cardsWon.length
      if (cardsWon.length === cardArray.length/2) {
          resultDisplay.textContent = 'Congrats'
      }
  }


  // flip card

  function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500)
      }

  }

  gameBoard()

})