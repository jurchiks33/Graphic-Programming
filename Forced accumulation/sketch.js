var ball;

function setup() 
{
    createCanvas(900, 600);
    ball = new Ball;
}

function draw() 
{
    background(0);
    ball.run();
}

class Ball 
{
    constructor()
    {
        this.acceleration = new createVector(0, 0);
        this.velocity = new createVector(0, 0);
        this.location = new createVector(width/2, height/2);
        this.size = 40;
    }

    // run function for the ball
    run() 
    {
        this.draw();
        this.move();
        this.bounce();
    }

    draw()
    {
        fill(125);
        ellipse(this.location.x, this.location.y, this.size, this.size);
    }

    // function to move the ball
    move()
    {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
    }

    bounce() 
    {
        if (this.location.x < 0 || this.location.x > width) this.velocity.x *= -1;
        if (this.location.y < 0 || this.location.y > height) this.velocity.y *= -1;
    }

}