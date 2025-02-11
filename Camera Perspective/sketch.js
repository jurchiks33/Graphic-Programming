function setup() {
    createCanvas(900, 600, WEBGL);
    angleMode(DEGREES);
   
}

function draw() {
    background(125);

    camera(0, -200, height, 0, 0, 0, 0, 1, 0);
    perspective(60, width/height, mouseY, mouseX);

    normalMaterial();

    for (var i = -600; i<=600; i+= 150){
        push();
        translate(i, 0, 0);
        box(80, 80, 500);
        pop(); 
    }
}
