const game = new Game()

function preload() {
    game.preload()

}

function setup() {
    createCanvas(600, 600)
}

function draw() {
    
    game.draw()

}


function keyPressed() {
    if (keyCode === 32) {        
        game.bullets.push(new Bullet(game.player.pos, mouseX, mouseY))
    }
}
