// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;

var engine;
var ground;


function setup() {
  createCanvas(800, 600);

  //creating engine
  engine = Engine.create();

  //creating ground
  ground = Bodies.rectangle(width / 2, height - 20, 800, 10, {
    isStatic: true
  });

  // addingg ground to the world
  World.add(engine.World, [ground]);

  // adding objects with dynamic behavior.
  addJumpyObject(700, 100, 6, 30, "red", {x: 700, y: 50}) //Hexagon Red
  addJumpyObject(300, 300, 5, 40, "blue", {x: 400, y: 100}) //Pentagon Blue
  addJumpyObject(500, 150, 4, 50, "green", {x: 450, y: 100}) //square Green
  addJumpyObject(200, 100, 8, 25, "purple", {x: 250, y: 50}) //Octagon Purple
  addJumpyObject(600, 50, 3, 35, "yellow", {x: 650, y: 100}) //Triangle Yellow

  // adding spiral constraints
  addSpiralConstraint(400, 300, 100, 6, 0.3);
  addSpiralConstraint(200, 200, 80, 8, 0.02);

  // adding mouse interaction
  let canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: canvasMouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });

  World.add(engine.world, mouseConstraint);
}

function draw() {
  background(30, 30, 50);
  Engine.update(engine);

  // drawing all objects and constraints
  for (let obj of objects) {
    fill(obj.color);
    drawVertices(obj.body.vertices);
    if (obj.constraint) {
      stroke(255);
      strokeWeight(2);
      drawConstraint(obj.constraint);
    }
  }

  // drawing spiral constraints
  for (let spiral of spiralContraints) {
    drawSpiral(spiral);
  }

  // drawing ground
  fill(100);
  drawVertices(ground.vertices);

  // display mouse interaction
  if (mouseConstraint.body) {
    fill(255, 0, 0, 150);
    let pos = mouseConstraint.body.position;
    ellipse(pos.x, pos.y, 20, 20);
  }
}

