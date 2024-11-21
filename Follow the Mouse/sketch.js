let balls = []; // Array to hold multiple balls
let numBalls = 10; // Number of balls

function setup() 
{
    createCanvas(900, 600);
    background(0); 
    for (let i = 0; i < numBalls; i++) {
        balls.push(new Ball()); // Initialize each ball and push to the array
    }
}

function draw() 
{
    // Do not repaint the background to let the trails persist
    for (let ball of balls) {
        ball.run(); 
    }
}

class Ball 
{
    constructor()
    {
        // Random starting position for the ball
        let randomX = width / 2 + random(-100, 100);
        let randomY = height / 2 + random(-100, 100);
        this.location = createVector(randomX, randomY); // Current position
        this.prevLocation = createVector(randomX, randomY); // Previous position

        // Initial velocity and acceleration
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);

        // Maximum velocity for smooth movement
        this.maxVelocity = random(5, 10);

        // Random color for ball trails
        this.color = color(random(50, 255), random(50, 255), random(50, 255));
    }

    // Run function for the ball
    run() 
    {
        this.draw(); 
        this.move(); 
    }

    draw()
    {
        // Draw the trail
        stroke(this.color);
        strokeWeight(2);
        line(this.location.x, this.location.y, this.prevLocation.x, this.prevLocation.y);

        // Update the previous location
        this.prevLocation = this.location.copy();
    }

    // Function to move the ball
    move()
    {
        // Attract the ball to the mouse position
        let mouse = createVector(mouseX, mouseY);
        let dir = p5.Vector.sub(mouse, this.location); // Direction vector
        dir.normalize();
        dir.mult(0.3); // Control the strength of the attraction
        this.acceleration = dir;

        // Update velocity and location
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxVelocity);
        this.location.add(this.velocity);
    }
}
