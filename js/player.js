class Player {
    constructor() {
        this.pos = new p5.Vector(300,300)
        this.height = 50
        this.width = 50 
       

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
        
        // this.acceleration = createVector(mouseX , mouseY ).setMag(0.1) 
        // this.v.add(this.acceleration)
        // this.v.setMag( 1)

        
        this.angle = this.v.heading()    

        push()
        translate (this.pos.x, this.pos.y)
        
        rotate(this.angle)  
        image(game.playerImg, -this.width/2 ,  -this.height/2, this.width , this.height)
       
        pop()            
       

      
    }

   



}
