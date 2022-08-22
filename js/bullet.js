class Bullet {

    constructor(v) {
        this.pos = new p5.Vector(v.x,v.y)    
        this.direction  // vector
        this.speed = 5
        this.r = 10
        this.move = new p5.Vector(0,0) // vector of the movement
      
        this.angle = 0.0
        this.v // vector of the player
       
    }

    draw(){       
        angleMode(DEGREES) 

        this.direction = createVector(mouseX - (this.pos.x ),  mouseY - (this.pos.y )) 
        this.direction.setMag(this.speed)
        this.angle = this.direction.heading()

        
       // this.velocity = createVector(dx, dy) 
       // this.velocity.setMag(1)
        this.pos.add(this.move)
        //this.x = this.pos.x  + this.move
        //this.y = this.pos.y  + this.moveY
        
       fill (255,255,255)
       circle (this.pos.x ,this.pos.y, this.r )


        //to mimic player movement below
       
        
        this.v = createVector(mouseX - (this.pos.x ),  mouseY - (this.pos.y )) 
        this.angle = this.v.heading()  // for player direction
        
          this.acceleration = createVector(mouseX , mouseY ).setMag(0.1)  // for the player movement
          this.v.add(this.acceleration)  // for the player movement 
          this.v.setMag(1)     // for the player movement          
          this.pos.add(this.v) // fot the player moevement

       
        
    }   

    shut() {       
        this.move.add(this.direction) //.mult(this.speed)      
            
       
    }


}