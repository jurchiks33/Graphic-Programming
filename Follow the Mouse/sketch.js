var ball;

function setup() 
{
    createCanvas(900, 600);
    background(0);
    ball = new Ball;
}

function draw() 
{
    ball.run();
}

class Ball 
{
    constructor()
    {
        this.velocity = new createVector(0, 0);
        this.location = new createVector(width/2, height/2);
        this.prevLocation = new createVector(width/2, height/2);
        this.acceleration = new createVector(0, 0);
        this.maxVelocity = 10;
    }

    // run function for the ball
    run() 
    {
        this.draw();
        this.move();
        this.edges();
    }

    draw()
    {
        stroke(255);
        strokeWeight(2);
        line(this.location.x, this.location.y, this.prevLocation.x, this.prevLocation.y);
        this.prevLocation = this.location.copy();
    }

    // function to move the ball
    move()
    {
        var mouse = createVector(mouseX, mouseY);
        var dir = p5.Vector.sub(mouse, this.location);
        dir.normalize();
        dir.mult(0.3);
        this.acceleration = dir;
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxVelocity);
        this.location.add(this.velocity);
    }

    edges() 
    {
        if (this.location.x < 0) this.location.x=width;
        else if (this.location.x > width) this.location.x = 0;
        else if (this.location.y < 0) this.location.y = height;
        else if (this.location.y > height) this.location.y = 0;
    }

}