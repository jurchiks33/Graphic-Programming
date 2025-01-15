function setup() {
    createCanvas(900, 600, WEBGL);
    angleMode(DEGREES);
    noStroke();
}

function draw() {
    background(30, 30, 70);

    // adding dynamic light
    directionalLight(250, 250, 250, -1, -1, -1);
    pointLight(255, 0, 150, mouseX - width / 2, mouseY - height / 2, 200);

    rotateY(frameCount * 0.5);
    translate(200 * sin(frameCount * 0.01), 0, 200 * cos(frameCount * 0.01));

    rectMode(CENTER);
    rotateY(frameCount);
    translate(200, 0, 0);
    rotateX(frameCount);
    rotateY(frameCount);
    rotateZ(frameCount);
    box(200);
}
