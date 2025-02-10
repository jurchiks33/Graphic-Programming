function setup() {
    createCanvas(900, 600, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background(125);

    var zLoc = (sin(frameCount)+1) / 2 * height + 200;
    var zLoc = map(sin(frameCount)+1, -1, 1, 200, 800);
    camera(0, 0, zLoc, 0, 0, 0, 0, 1, 0);

    normalMaterial();
    torus(200, 50, 50, 50);
    translate(0, 100, 0);
    rotateX(90);
    fill(200);
    plane(500, 500);

}
