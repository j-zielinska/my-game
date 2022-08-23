class Game  {
    constructor() {
        this.background = new Background()
       
        this.player = new Player()
        this.bullets = []  //  should be an array ... how to connect position of the player to the bullet so the shut on bullet do not chane position of the player???
        
        this.backgroundImg        
        this.playerImg 
    }

    preload () {
        this.backgroundImg = [
            {src: loadImage('../assets/background/background-1.jpg')}
        ],
        this.playerImg = loadImage('../assets/player/Main Ship - Base - Full health.png')
    }
    draw() {
        clear ()
        this.background.draw()         
        this.player.draw()
        if (frameCount % 90 === 0) {
            this.bullets.push(new Bullet(this.player.pos)) 
        }
        this.bullets.forEach(function(bullet) {            
            bullet.draw()  

        })        
        this.bullets = this.bullets.filter((bullet)=>{
            if (bullet.pos.x < 0 || bullet.pos.x > width ) {
                return false    
            }
            if (bullet.pos.y < 0 || bullet.pos.y > height) {
                return false      
            } else {
                return true
            }
        })   
        

        
    }




   

}