let ball;
let numBalls = 10;

function setup() 
{
    createCanvas(900, 600);
    background(0);
    for (let i = 0; i < numBalls; i++)
    {
        balls.push(new Ball());
    }
}

function draw() 
{
    for (let ball of balls)
    {
        ball.run();
    }
}

class Ball 
{
    constructor()
    {
        // random starting position for a ball
        let randomX = width / 2 + random(-100, 100);
        let randomY = height / 2 + random(-100, 100);
        this.location = new createVector(randomX, randomY);
        this.prevLocation = new createVector(randomX, randomY);

        // initial velocity and acceleration
        this.velocity = new createVector(0, 0);
        this.acceleration = new createVector(0, 0);

        // maximum velocity
        this.maxVelocity = random(5, 10);

        // random color for ball trails
        this.color = color(random(50, 255), random(50, 255), random(50, 255));
    }

    // run function for the ball
    run() 
    {
        this.draw();
        this.move();
    }

    draw()
    {
        // draw for the trail
        stroke(this.color);
        strokeWeight(2);
        line(this.location.x, this.location.y, this.prevLocation.x, this.prevLocation.y);

        // updating previous location
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