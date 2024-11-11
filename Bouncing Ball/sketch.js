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

    // initialization of multiple balls
    for ( let i = 0; i < 10; i++)
    {
        balls.push(new ball())
    }
}

// drawing stars with twinkling effect
function drawStars()
{
    background(10, 10, 30);
    noStroke();
    for (let star of stars)
    {
        fill(255, 255, 255, star.brightness);
        ellipse(star.x, star.y, 2, 2);

        //star brightness
        star.brightness += star.speed * (star.targetBrightness > star.brightness ? 1 : -1);

        // switching directions when brightness reaches maximum and switch to other target
        if(abs(star.brightness - star.targetBrightness) < 5) 
        {
            star.targetBrightness = random(50, 255);
            star.speed = random(2, 6);
        }
    }
}

// comet class with fading trail
class Comet 
{
    constructor()
    {
        this.reset();
        this.trail = [];
        this.trailLength = 20;
    }

    reset()
    {
        //comet starting at the random left position
        this.position = createVector(random(-width, -100), random(height / 2));
        this.velocity = createVector(random(5, 8), random(-2, 2));
        this.size = random(10, 15);
        this.opacity = 255;
    }

    run() 
    {
        this.updateTrail();
        this.drawTrail();
        this.move();
    }

    // trail for the comet position
    updateTrail() 
    {
        this.trail.push 
            ({
                position: this.position.copy(),
                opacity: this.opacity
            });
            if (this.trail.length > this.trailLength)
            {
                this.trail.shift();
            }
    }

    //drawing comet and its trail
    drawTrail()
    {
        // comets trail
        for (let i = 0; i < this.trail.length; i++)
        {
            let trailPos = this.trail[i].position;
            let trailOpacity = map(i, 0, this.trail.length, 0, this.trail[i].opacity);
            fill(255, 255, 255, trailOpacity);
            ellipse(trailPos.x, trailPos.y, this.size * 0.5, this.size * 0.5);
        }

        //drawing comet
        fill(255, 255, 255, this.opacity);
        ellipse(this.position.x, this.position.y, this.size, this.size);
    }

    // comet movement and reset of the screen.
    move()
    {
        this.position.add(this.velocity);
        this.opacity -= 2;

        //reset of the comet of the screen
        if (this.position.x > width + 100 || this.opacity <= 0)
        {
            this.reset();
        }
    }
}

// clas for each ball properties and behavior
class Ball
{
    constructor()
    {
        this.velocity = createVector(random(-3, 3), random(-3, 3));
        this.location = createVector(random(width), random(height));
        this.size = random(20, 50);
        this.color = color(random(255), random(255), random(255));
        this.trail = [];
        this.trailLength = int(random(5, 15));
    }

    //main function for each ball
    run()
    {
        this.updateTrail();
        this.drawTrail();
        this.drawBall();
        this.move();
        this.bounce();
    }

    //drawing balls with colors and different sizes
    drawBall()
    {
       fill(this.color);
       noStroke();
       let oscillateSize = this.size + sin(frameCount * 0.1) * 5;
       ellipse(this.location.x, this.location.y, oscillateSize, oscillateSize);
    }

    // function to add curent location to the trail
    updateTrail()
    {
        this.trail.push 
        ({
            position: this.location.copy(),
            color: this.color
        });
        if (this.trail.length > this.trailLength)
        {
            this.trail.shift()
        }
    }

    // drawing trail behind the ball
    drawTrail()
    {
        for (let i = 0; i < this.trail.length; i++)
        {
            let pos = this.trail[i].position;
            let col = this.trail[i].color;
            fill(col.levels[0], col.levels[1], col.levels[2], map(i, 0, this.trail.length, 0, 100));
            ellipse(pos.x, pos.y, this.size * 0.6, this.size * 0.6);
        }
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