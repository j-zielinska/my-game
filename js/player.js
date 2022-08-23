class Player {
    constructor() {
        this.pos = new p5.Vector(300,300) // starts in the middle of the screen
        this.height = 80
        this.width = 80 
       

        this.v
        //this.acceleration
        this.angle = 0
        //this.reach = 1


        
    }

    draw() {    
        angleMode(DEGREES) 
       
        let dx =  mouseX - (this.pos.x )
        let dy =  mouseY - (this.pos.y )
        
        this.v = createVector(dx, dy) 
        this.angle = this.v.heading()  // for player direction
        
           this.acceleration = createVector(mouseX , mouseY ).setMag(0.1)  // for the player movement
           this.v.add(this.acceleration)  // for the player movement 
           this.v.setMag(1)     // for the player movement
           
           this.pos.add(this.v) // fot the player moevement

        push()
        translate (this.pos.x, this.pos.y)
        
        rotate(this.angle)  
        image(game.playerImg, -this.width/2 ,  -this.height/2, this.width , this.height)
       
        pop()          
       
      
    }

   



}
