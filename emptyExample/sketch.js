function setup() {
    createCanvas(900, 600);
}

function draw() {
    background(125);

    var mouse = createVector(mouseX, mouseY);
    var center = createVector(width/2, height/2);

    mouse.sub(center);

    translate(width/2, height/2);
    strokeWeight(3);

    line(0, 0, mouseX, mouseY);


}
