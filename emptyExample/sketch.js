function setup() {
    createCanvas(900, 600, WEBGL);
    angleMode(DEGREES);
    noStroke();
}

function draw() {
    background(30, 30, 70);

    // adding dynamic light
    directionalLight(250, 250, 250, -1, -1, -1);

    rectMode(CENTER);
    rotateY(frameCount);
    translate(200, 0, 0);
    rotateX(frameCount);
    rotateY(frameCount);
    rotateZ(frameCount);
    box(200);
}
