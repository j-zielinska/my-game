class Game  {
    constructor() {
        this.background = new Background()
       
        this.player = new Player()
        this.bullets = []  //  should be an array ... how to connect position of the player to the bullet so the shut on bullet do not chane position of the player???
        

        this.obstacles = []
        
        this.backgroundImg        
        this.playerImg 
        this.obstacleImg
    }

    preload () {
        this.backgroundImg = [
            {src: loadImage('../assets/background/background-1.jpg')}
        ],
        this.playerImg = loadImage('../assets/player/Main Ship - Base - Full health.png')
        this.obstacleImg = loadImage('../assets/obstacles/asteroid.png')
    }
    draw() {
        clear ()
        this.background.draw()         
        this.player.draw()     
          
        this.bullets.forEach(function(bullet) {            
            bullet.draw()  

        })        
        this.bullets = this.bullets.filter((bullet)=>{
            if (bullet.pos.x < 10 || bullet.pos.x > width -10 ) {
                return false    
            }
            if (bullet.pos.y < 10 || bullet.pos.y > height -10) {
                return false      
            }   
            if ( dist(bullet.pos.x, bullet.pos.y , bullet.currentX , bullet.currentY) < 10) {
                return false 
            }   
            else {
                return true
            }
        })   

        if (frameCount % 90 === 0) {
			this.obstacles.push(new Obstacle(this.obstacleImg))
			
		}
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})
        

        
    }




   

}