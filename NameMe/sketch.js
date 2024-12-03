
// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;
var ground1;

function setup() {
  createCanvas(800, 600);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  ground = Bodies.rectangle(100, 200, 500, 10, {isStatic: true, angle: Math.PI * 0.06});


  // add all of the bodies to the world
  World.add(engine.world, [ground]);
}

function draw() {
  background(0);
  Engine.update(engine);

  fill(255);

  fill(128);
  drawVertices(ground.vertices);
}

// HELPER FUNCTIONS
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
