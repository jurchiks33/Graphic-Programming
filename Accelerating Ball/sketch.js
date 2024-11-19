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
        this.velocity = new createVector(0, 0);
        this.location = new createVector(0, height/2);
        this.acceleration = new createVector(0.03, 0);
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
        fill(125);
        ellipse(this.location.x, this.location.y, 40, 40);
    }

    // function to move the ball
    move()
    {
        this.velocity.add(this.acceleration);
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
