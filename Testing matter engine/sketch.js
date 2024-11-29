
// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;

var box1;
var ground;

function setup() {
  createCanvas(900, 600);

  // create an engine
  engine = Engine.create();

  // create a box and a ground
  box1 = Bodies.rectangle(200, 200, 80, 80, {restitution:.8, friction: .5});

  ground1 = Bodies.rectangle(100, 200, 500, 10, {isStatic: true, angle: Math.PI * 0.08});
  ground2 = Bodies.rectangle(500, 500, 500, 10, {isStatic: true, angle: Math.PI * -0.08});

  // add all of the bodies to the world
  World.add(engine.world, [box1, ground1, ground2]);
}

function draw(){
    background(0);

    Engine.update(engine);

    fill(255);
    drawVertices(box1.vertices);

    fill(125);
    drawVertices(ground1.vertices);
    drawVertices(ground2.vertices);
}

function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
