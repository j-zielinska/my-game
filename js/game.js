class Game  {
    constructor() {
        this.background = new Background ()
        this.player = new Player()
        this.player2 = new Player2()
        this.backgroundImg        
        this.playerImg 
    }

    preload () {
        this.backgroundImg = [
            {src: loadImage('../assets/background/background-1.jpg')}
        ],
        this.playerImg = loadImage('../assets/player/idle.gif')
    }
    draw() {
        clear ()
        this.background.draw()
        this.player.draw()
        this.player2.draw()
    }
}