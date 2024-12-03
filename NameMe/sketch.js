
// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine;
var box, circle, polygon;
var ground1, ground2;

function setup() {
  createCanvas(800, 600);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  box = Bodies.rectangle(50, 0, 50, 50, {restitution:.8, friction: .5});
  circle = Bodies.circle(80, 0, 20, {restitution:.8, friction: .5});
  polygon = Bodies.polygon(100, 0, 5, 30, {restitution:.8, friction: .5});
  ground1 = Bodies.rectangle(100, 200, 500, 10, {isStatic: true, angle: Math.PI * 0.06});
  ground2 = Bodies.rectangle(500, 500, 500, 10, {isStatic: true, angle: Math.PI * -0.06});

  // add all of the bodies to the world
  World.add(engine.world, [box, ground1, ground2, circle, polygon]);
}

function draw() {
  background(0);
  Engine.update(engine);

  fill(255);
  drawVertices(box.vertices);
  drawVertices(circle.vertices);
  drawVertices(polygon.vertices);

  fill(128);
  drawVertices(ground1.vertices);
  drawVertices(ground2.vertices);
}

// HELPER FUNCTIONS
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
