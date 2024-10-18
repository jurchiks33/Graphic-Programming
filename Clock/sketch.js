var secLength = 160;
var secWidth = 1;
var minLenght = 140;
var minWidth = 3;
var hourLength = 90;
var hourWidth = 5;

var romanNumerals = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];

function setup() 
{
    createCanvas(900, 600);
    angleMode(DEGREES); // for better angle handling we will use DEGREES
}

function draw() 
{
    background(50);
    translate(width / 2, height / 2);

    // gradient background for watch surface
    drawGradienCircle(0, 0, 350, color(100, 100, 200), color(0, 0, 50));

    // Outer circle for watch
    stroke(200);
    strokeWeight(8);
    noFill();
    ellipse(0, 0, 350, 350);

    // seconds
    push();
        strokeWeight(secWidth);
        stroke(255, 0, 0);
        var secAngle = map(second(), 0, 60, 0, 360);
        rotate(secAngle);
        line(0, 0, 0, -secLength);
    pop();

    //minutes
    push();
        strokeWeight(minWidth);
        stroke(255, 255, 255);
        var minAngle = map(minute(), 0, 60, 0, 360);
        rotate(minAngle);
        line(0, 0, 0, -minLenght);
    push();
        translate(0, -minLenght + 20);
        fill(255, 255, 255)
        noStroke();
        ellipse(0, 0, 15, 15);
    pop();
    pop();

    //minutes
    push();
    strokeWeight(hourWidth);
    var hourAngle = map(hour(), 0, 12, 0, 360);
    rotate(radians(hourAngle));
    line(0, 0, 0, -hourLength);
        push();
            translate(0, -hourLength + 20);
            ellipse(0, 0, 15, 15);
        pop();
    pop();

    var hours = 12;
    var hourStep = 360 / hours;
    for (var i=0; i<hours; i++)
        {
            push();
                rotate(radians(hourStep * i));
                translate(0, -155);
                line(0, 0, 0, -20);
            pop();
        };

}
