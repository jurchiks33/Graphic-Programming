var ball;

function setup() 
{
    createCanvas(900, 600);
    ball = new Ball;
}

function draw() 
{
    background(0);
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
}