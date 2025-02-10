function setup() {
    createCanvas(900, 600, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background(125);

    //var zLoc = (sin(frameCount)+1) / 2 * height + 200;
    //var zLoc = map(sin(frameCount)+1, -1, 1, 200, 800);
    var xLoc = map(noise(frameCount / 100), 0, 1, -500, 500);
    var yLoc = map(noise(frameCount / 100 + 100), 0, 1, -500, 500);
    var zLoc = map(noise(frameCount / 100 + 150), 0, 1, 300, 800);

    camera(xLoc, yLoc, zLoc, 0, 0, 0, 0, 1, 0);

    normalMaterial();
    torus(200, 50, 50, 50);
    translate(0, 100, 0);
    rotateX(90);
    fill(200);
    plane(500, 500);

}
