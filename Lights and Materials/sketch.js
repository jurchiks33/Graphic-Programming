function setup() {
    createCanvas(500, 500, WEBGL);
}

// function draw() {
//     background(125);

//     noStroke();
//     specularMaterial(255);
//     pointLight(255, 0, 0, mouseX - width/2, mouseY - height/2, 100);
//     pointLight(0, 255, 0, 0, - 200, 100);
//     sphere(100, 30, 30);

// }

function draw() {
    background(125);

    noStroke();
    ambientMaterial(255, 255, 255);
    directionalLight(255, 0, 0, 1, 0, 0);
    sphere(100, 30, 30);

}
