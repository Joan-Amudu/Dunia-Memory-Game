document.addEventListener('DOMContentLoaded', () => {
      // array of cards
const cardArray = [
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
    {name: 'Albania', img:'Assets/images/flags/Albania.svg.png'},
]

  // randomise the cards array

  cardArray.sort(() => 0.5 - Math.random())

  // creating  game board

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  function createBoard() {
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
          cards[optionOneId].setAttribute('src', 'Assets/images/background.jpg')
          cards[optionTwoId].setAttribute('src', 'Assets/images/background.jpg')
          cardsWon.push(cardsChosen)
      } else {
          cards[optionOneId].setAttribute('src', 'Assets/images/background.jpg')
          cards[optionTwoId].setAttribute('src', 'Assets/images/background.jpg')
          alert('sorry, try again')
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

  createBoard()

})