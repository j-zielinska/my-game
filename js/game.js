class Game  {
    constructor() {
        this.background = new Background()
       
        this.player = new Player()
        this.bullets = []  
        

        this.obstacles = []

        this.lifeScore = new LifeScore()

        
        this.backgroundImg        
        this.playerImg 
        this.obstacleImg
    }

    preload () {
        this.backgroundImg = [
            {src: loadImage('../assets/background/sky1.jpg')},
            {src: loadImage('../assets/background/sky2.jpg')}
        ],
        this.playerImg = loadImage('../assets/player/Main Ship - Base - Full health.png')
        this.obstacleImg = loadImage('../assets/obstacles/asteroid.png')
    }
    draw() {
        clear ()
        this.background.draw()         
        this.player.draw()    
        this.lifeScore.draw() 
        
          
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

     
        if (frameCount % 45 === 0) {
			this.obstacles.push(new Obstacle( ))
			
		}
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})


        this.obstacles = this.obstacles.filter((obstacle) => {
            if (obstacle.hit(this.player)){
                this.lifeScore.reduceLife()
                return false
            }            
            if (obstacle.pos.x < 0 - obstacle.size || obstacle.pos.x > 600 + obstacle.size || obstacle.pos.y < 0 - obstacle.size || obstacle.pos.y > 600 + obstacle.size) {
                return false
            }
             else {
                                
                return true
            }
        })

        for (let i = this.obstacles.length -1 ; i >= 0; i--) {            
            for (let j = this.bullets.length-1; j >= 0; j--){
                this.bullets[j].draw() 
                if (this.obstacles[i].shutdown(this.bullets[j])) {
                    if (this.obstacles[i].size > 60) {
                        let newA = this.obstacles[i].explode(this.obstacles[i].pos)
                        this.obstacles = this.obstacles.concat(newA)
                    }
                    this.lifeScore.addPoint()                    
                    this.obstacles.splice(i, 1)
                    this.bullets.splice(j,1)
                    break                
                  
                } 
            }
        }     
        
                    
            
    }
 }
        

        





   

