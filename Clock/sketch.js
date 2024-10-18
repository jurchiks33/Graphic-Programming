function setup() {
    createCanvas(900, 600);
    background(0);
}

function draw() {
    background(0);
    fill(255);
    ellipse(width/2, height/2, 50, 50); //  mouse x and y for following to the mouse instead of the fixed parameters
    rect(mouseX, mouseY, 100, 100);
}
