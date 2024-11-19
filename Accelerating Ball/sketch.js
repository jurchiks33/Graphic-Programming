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
        this.velocity = createVector(random(-3, 3), random(-3, 3));
        this.location = createVector(random(width), random(height));
        this.acceleration = createVector(random(-0.02, 0.02), random(-0.2, 0.2));
        this.maxVelocity = random(4, 15);
        this.ballSize = random(20, 80);
        this.color = color(random(50, 255),
                           random(50, 255),
                           random(50, 255));
        this.trail = [];
        this.trailLimit = 15;
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
        //drawing trail
        noStroke();
        for (let i = 0; i < this.trail.length; i++)
        {
            let t = this.trail[i];
            fill(red(this.color), 
                 green(this.color), 
                 blue(this.color), 
                 255 - (i * 15));
            ellipse(t.x, t.y, this.ballSize * 0.8 - (i * 2));
                
        }
    }

    // function to move the ball
    move()
    {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxVelocity);
        this.location.add(this.velocity);
    

    //randomly adjusted acceleration.
    if (random(1) < 0.02)
        {
            this.acceleration = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
        }
    }

    edges() 
    {
        if (this.location.x < 0) this.location.x=width;
        else if (this.location.x > width) this.location.x = 0;
        else if (this.location.y < 0) this.location.y = height;
        else if (this.location.y > height) this.location.y = 0;
    }

}
