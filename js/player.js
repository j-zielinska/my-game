class Player {
    constructor() {
        this.pos = new p5.Vector(300,300) // starts in the middle of the screen
        this.height = 80
        this.width = 80 
       

        this.v
        //this.acceleration
        this.angle = 0
        //this.reach = 1
        this.life = 1000
        this.score = 0


        
    }

    draw() {    
        angleMode(DEGREES) 

        if (dist(this.pos.x, this.pos.y, mouseX, mouseY) > .5){
            let dx =  mouseX - (this.pos.x )
            let dy =  mouseY - (this.pos.y )
            this.v = createVector(dx, dy) 
            this.angle = this.v.heading()              
            this.acceleration = createVector(mouseX , mouseY ).setMag(1) 
            this.v.add(this.acceleration)            
            this.v.setMag(2)             
            this.pos.add(this.v) 
        }
            
        

        push()
        translate (this.pos.x, this.pos.y)        
        rotate(this.angle)  
        image(game.playerImg, -this.width/2 ,  -this.height/2, this.width , this.height)
       
        pop()        
             
    }

    
        

    

}
