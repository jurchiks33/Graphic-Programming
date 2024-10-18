var secLength = 160;
var secWidth = 1;
var minLenght = 140;
var minWidth = 3;
var hourLength = 90;
var hourWidth = 5;


function setup() 
{
    createCanvas(900, 600);
    background(0);
}

function draw() 
{
    background(255);
    translate(width/2, height/2);
    ellipse(0, 0, 350, 350);

    push();
    strokeWeight(secWidth);
    stroke(200, 0, 0);
    var secAngle = map(second(), 0, 60, 0, 360);
    rotate(radians(secAngle));
    line(0, 0, 0, -secLength);
    pop();
}
