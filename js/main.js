const game = new Game()

function preload() {
    game.preload()

}

function setup() {
    createCanvas(600, 600)
    strokeWeight(7);
    noCursor();
}

function draw() {
    cursor(CROSS)
    game.draw()

}


function keyPressed() {
    if (keyCode === 32) {        
        game.bullets.push(new Bullet(game.player.pos, mouseX, mouseY))
    }
}
