class Smoke {
    constructor(v){
    this.pos = new p5.Vector(v.x , v.y  )
    this.r = 10

    this.velocity = new p5.Vector(random(-.1, .1), random(0, -2))
    this.transparency = 200
    }


    draw (){   
       
        fill(255, this.transparency)
        noStroke ()
        circle( this.pos.x, this.pos.y, this.r)
        
    }

    move()  {
        this.transparency -= 8
        this.pos.add(this.velocity)
    }
}

    