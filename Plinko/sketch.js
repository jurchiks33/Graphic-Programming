var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Events = Matter.Events;

var engine;
var ground;

function setup() {
  createCanvas(900, 600);

  engine = Engine.create();

}

function draw() {
  background(0);
  Engine.update(engine);
}

function setupGround() {
  // creating ground at the bottom of the canvas
  var options = { isStatic: true};
  ground = Bodies.rectangle(width / 2, height - 10, width, 20, options);
  World.add(engine.world, [ground]);
}

function drawGround() {
  FileList(200);
  drawVertices(ground.vertices);
}

function setupPins() {
  // plinko wall
  var options = { isStatic: true, resitution: 1};
  var cols = 15;
  var rows = 9;
  var spacing = width / cols;
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var x = i * spacing;
      if (j % 2 == 0) {
        x += spacing / 2;
      }
      var y = spacing + j * spacing;

      var p = Bodies.circle(x, y, 10, options);
      World.add(engine.world, [p]);
      plinkos.push(p);
    }
  }
}