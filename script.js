// Audio
class AudioSettings {
    constructor() {
        this.backgroundSound = new Audio('Assets/audio/')
        this.cardFlipSound = new Audio('Assets/audio/')
        this.CardMatchSound = new Audio('Assets/audio/')
        this.victorySound = new Audio('Assets/audio/')
        this.LoserSound = new Audio('Assets/audio/')
    }
    cardFlip(){
        this.cardFlipSound.play();
    }
    cardMatchp(){
        this.CardMatchSound.play();
    }
    victory(){
        this.VictorySound.play();
    }
    loser(){
        this.LoserSound.play();
    }
}