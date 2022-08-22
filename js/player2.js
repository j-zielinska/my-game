class Player2 {
    constructor() {
        this.pos = new p5.Vector(0,0)
        this.height = 50
        this.width = 50       
        
        
	    this.velocity 
        this.acceleration
        this.angle = 0
        
    }

    draw() {  
        
        
 
        angleMode(DEGREES) 
        // let x = this.pos.x +  100 
        // let y = this.pos.y +  100
        let dx =  mouseX - (this.pos.x + this.width/2)
        let dy =  mouseY - (this.pos.y + this.height/2)
        // this.angle = atan2(dy, dx)
        this.velocity = createVector(dx, dy) 
              
        translate (this.pos.x, this.pos.y)
        this.angle = this.velocity.heading()    
        rotate(this.angle)  
        image(game.playerImg, this.pos.x - this.width/2 , this.pos.y - this.height/2, this.width , this.height)
        //this.angle += 2
        
       
    }


}