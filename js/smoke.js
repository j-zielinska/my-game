class Smoke {
    constructor(v){
    this.pos = new p5.Vector(v.x , v.y  )
    this.r = 10
    this.x = v.y
    this.a =0

    this.velocity = new p5.Vector(random(-.3, .3), random(0, this.a))
    
    this.transparency = 200
    }


    draw (){   
        if (this.x  < 0){
            this.a = 2
        }
        if (this.x > 0) {
            this.a = -2
        }
       
        fill(255, this.transparency)
        noStroke ()
        circle( this.pos.x, this.pos.y, this.r)
        
    }

    move()  {
        this.transparency -= 5
        this.pos.add(this.velocity)
    }
}

    