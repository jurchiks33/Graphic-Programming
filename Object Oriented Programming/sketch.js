var state = false;
var locX = 200;
var locY = 200;
var w = 200;
var h = 100;

function setup() {
    createCanvas(900, 600);
}

function draw() {
    background(125);

    if (state==true) 
    {
        fill(255);
    } else {
        fill(0);
    }

    rect(locX, locY, w, h);
}
