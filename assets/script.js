/** An array of cards(12 pair images of flags of European Countries) 
 * @type {Array<string>}
 */
 let cardArray = [{
    name: "Albania",
    img: "assets/images/flags/Albania.svg.png"
},
{
    name: "Albania",
    img: "assets/images/flags/Albania.svg.png"
},
{
    name: "Andorra",
    img: "assets/images/flags/Andorra.svg.png"
},
{
    name: "Andorra",
    img: "assets/images/flags/Andorra.svg.png"
},
{
    name: "Armenia",
    img: "assets/images/flags/Armenia.svg.png"
},
{
    name: "Armenia",
    img: "assets/images/flags/Armenia.svg.png"
},
{
    name: "Austria",
    img: "assets/images/flags/Austria.svg.png"
},
{
    name: "Austria",
    img: "assets/images/flags/Austria.svg.png"
},
{
    name: "Ireland",
    img: "assets/images/flags/Ireland.svg.png"
},
{
    name: "Ireland",
    img: "assets/images/flags/Ireland.svg.png"
},
{
    name: "Belarus",
    img: "assets/images/flags/Belarus.svg.png"
},
{
    name: "Belarus",
    img: "assets/images/flags/Belarus.svg.png"
},
{
    name: "Malta",
    img: "assets/images/flags/Malta.svg.png"
},
{
    name: "Malta",
    img: "assets/images/flags/Malta.svg.png"
},
{
    name: "Croatia",
    img: "assets/images/flags/Croatia.svg.png"
},
{
    name: "Croatia",
    img: "assets/images/flags/Croatia.svg.png"
},
{
    name: "Cyprus",
    img: "assets/images/flags/Cyprus.svg.png"
},
{
    name: "Cyprus",
    img: "assets/images/flags/Cyprus.svg.png"
},
{
    name: "France",
    img: "assets/images/flags/France.svg.png"
},
{
    name: "France",
    img: "assets/images/flags/France.svg.png"
},
{
    name: "Estonia",
    img: "assets/images/flags/Estonia.svg.png"
},
{
    name: "Estonia",
    img: "assets/images/flags/Estonia.svg.png"
},
{
    name: "Finland",
    img: "assets/images/flags/Finland.svg.png"
},
{
    name: "Finland",
    img: "assets/images/flags/Finland.svg.png"
},
];

/** Using sort and Math.random to randomise/shuffle to cardsArray. */
cardArray.sort(() => 0.5 - Math.random());

/** declaring variables and getting DOM elements. */
let grid = document.querySelector(".grid");
let results = document.querySelector("#result");
let flippedCard = []
let flippedCardId = []
let cardsWon = []

/**The gameBoard function is called when the DOMContent is loaded */
document.addEventListener("DOMContentLoaded", function() {
gameBoard()
});

/**
* Audio controls
* @param {string} load - called when page is loaded
* @param {string} audioPlayer - background music
*/
window.addEventListener("load", audioPlayer);
var music, playbtn;
/**
* @type {function} audioPlayer - A function that generates background music 
*/
function audioPlayer() {
music = new Audio("assets/sounds/BackgroundMusic.mp3");
music.loop = true;
// set object references
playbtn = document.getElementById("playpausebtn");
// Add event handling
playbtn.addEventListener("click", playPause);
//A function to pause the background music  
function playPause() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
}

/**
* The gameBoard function starts with an overlay text - click to start.
* @param {} gameBaord
*/
function gameBoard() {
let startText = Array.from(document.getElementsByClassName("start-text"));
startText.forEach(start => {
    start.addEventListener("click", () => {
        start.classList.remove("visible");
        music.play();

    });
});
// A for loop that iterates through the cardArray and assigns a data id from 0 - 23
// An event listener to listen out if a card has been clicked and invorke the flipCard function
for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img")
    card.setAttribute("src", "assets/images/backface.jpg")
    card.setAttribute("data-id", i)
    card.addEventListener("click", flipCard)
    grid.appendChild(card)
}
}

/**
* check for match when cards are flipped
* cards are picked out using querySelectorAll
* we assign the first value in the flippedCardID array to firstCardId and we do the same for the secondCardID
* If the first card in the flippedCard array deeply equals to the second card, a match is found.
* If the cards dont match, they are flipped back over to be played again.
* @param {} checkForMatch
*/
function checkForMatch() {
let cards = document.querySelectorAll("img")
let firstCardId = flippedCardId[0]
let secondCardId = flippedCardId[1]
if (flippedCard[0] === flippedCard[1] && firstCardId !== secondCardId) {
    cardsWon.push(flippedCard)
} else {
    cards[firstCardId].setAttribute("src", "assets/images/backface.jpg")
    cards[secondCardId].setAttribute("src", "assets/images/backface.jpg")

}
flippedCard = []
flippedCardId = []
results.textContent = cardsWon.length
if (cardsWon.length === cardArray.length / 2) {
    results.textContent = "You Won!!"
}
}

/**
* A flip card function that flips a card.
* This fucntion will get the data-id from the gameBoard function.
* if the flipped card array is equal to 2, the CheckForMatch function will be invoked 
* With some buffer time, we want to check for a match after exaclty 500 milliseconds.
* @param {} flipCard 
*/
function flipCard() {
let cardId = this.getAttribute("data-id")
flippedCard.push(cardArray[cardId].name)
flippedCardId.push(cardId)
this.setAttribute("src", cardArray[cardId].img)
if (flippedCard.length === 2) {
    setTimeout(checkForMatch, 500)
}
}