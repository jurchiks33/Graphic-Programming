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

    // seconds
    push();
        strokeWeight(secWidth);
        stroke(200, 0, 0);
        var secAngle = map(second(), 0, 60, 0, 360);
        rotate(radians(secAngle));
        line(0, 0, 0, -secLength);
    pop();

    //minutes
    push();
        strokeWeight(minWidth);
        var minAngle = map(minute(), 0, 60, 0, 360);
        rotate(radians(minAngle));
        line(0, 0, 0, -minLenght);
    push();
        translate(0, -minLenght + 20);
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
