let balls = [];
let numBalls = 10;

function setup() 
{
    createCanvas(900, 600);
    for (let i = 0; i < numBalls; i++)
    {
        balls.push(new Ball());
    }
}

function draw() 
{
    drawGradientBackground();
    for (let ball of balls)
    {
        ball.run();
    }
}

// gradient background
function drawGradientBackground()
{
    for (let i = 0; i < height; i++)
    {
        let gradienColor = lerpColor(color(20, 30, 60), color(5, 0, 40), i / height);
        stroke(gradienColor);
        line(0, i, width, i);
    }
}


class Ball 
{
    constructor()
    {
        this.velocity = new createVector(0, 0);
        this.location = new createVector(0, height/2);
        this.acceleration = new createVector(0.03, 0);
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
        fill(125);
        ellipse(this.location.x, this.location.y, 40, 40);
    }

    // function to move the ball
    move()
    {
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
