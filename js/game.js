class Game  {
    constructor() {
        this.background = new Background()
       
        this.player = new Player()
        this.bullet= new Bullet() // how to connect position of the player to the bullet so the shut on bullet do not chane position of the player???

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
        this.bullet.draw()  
         
             

        
    }




   

}