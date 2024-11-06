var ball;

function setup() 
{
    createCanvas(900, 600);
    ball = new Ball;
}

function draw() 
{
    background(0);
    ball.draw();
}

class Ball 
{
    constructor()
    {
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
        this.locX = random(width);
        this.locY = random(height);
    }

    draw()
    {
        fill(125);
        ellipse(this.locX, this.locY, 40, 40);
    }

}