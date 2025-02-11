var img;

function preload() {
    img = loadImage('assets/rock.jpg');
    angleMode(DEGREES);
}

function setup() {
    createCanvas(900, 600, WEBGL);

}

function draw() {
    background(0);
    texture(img);
    noStroke();
    rotateY(frameCount);
    plane(500, 500);
    //box(300);
}
