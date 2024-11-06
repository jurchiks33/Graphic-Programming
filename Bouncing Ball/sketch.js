let balls = [];
let stars = [];
let comet;

function setup()
{
    createCanvas(900, 600);

    // initialization of stars in a random position and twinkling
    for (let i = 0; i < 200; i++)
    {
        stars.push(
            {
                x: random(width),
                y: random(height),
                brightness: random(50, 255),
                speed: random(1, 4),
                targetBrightness: random(50, 255),
            }
        );
    }
}


// var ball;

// function setup() 
// {
//     createCanvas(900, 600);
//     ball = new Ball;
// }

// function draw() 
// {
//     background(0);
//     ball.run();
// }

// class Ball 
// {
//     constructor()
//     {
//         this.velocity = new createVector(random(-2, 2), random(-2, 2));
//         this.location = new createVector(random(width), random(height));
//     }

//     // run function for the ball
//     run() 
//     {
//         this.draw();
//         this.move();
//         this.bounce();
//     }

//     draw()
//     {
//         fill(125);
//         ellipse(this.location.x, this.location.y, 40, 40);
//     }

//     // function to move the ball
//     move()
//     {
//         this.location.add(this.velocity);
//     }

//     bounce() 
//     {
//         if (this.location.x < 0 || this.location.x > width) this.velocity.x *= -1;
//         if (this.location.y < 0 || this.location.y > height) this.velocity.y *= -1;
//     }

// }