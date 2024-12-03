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



//   // Polygon 1 with a constraint
//   poly1A = Bodies.polygon(700, 100, 6, 20);
//   poly1B = Bodies.polygon(700, 250, 3, 50); // Fixed the incorrect '1' in the polygon sides
//   constraint1 = Constraint.create({
//     bodyA: poly1A,
//     pointA: {x: 0, y: 0},
//     bodyB: poly1B,
//     pointB: {x: -10, y: -10},
//     stiffness: 0.01
//   });

//   // Polygon 2 with a constraint
//   poly2 = Bodies.polygon(300, 200, 5, 40);
//   constraint2 = Constraint.create({
//     pointA: {x: 150, y: 50},
//     bodyB: poly2,
//     pointB: {x: -10, y: -10},
//     stiffness: 0.01
//   });

//   // Additional Polygon 3
//   poly3 = Bodies.polygon(500, 150, 4, 30);
//   constraint3 = Constraint.create({
//     bodyA: poly3,
//     pointA: {x: 0, y: 0},
//     pointB: {x: 500, y: 100},
//     stiffness: 0.02
//   });

//   // Additional Polygon 4
//   poly4 = Bodies.polygon(200, 100, 8, 25);
//   constraint4 = Constraint.create({
//     bodyA: poly4,
//     pointA: {x: 0, y: 0},
//     bodyB: poly3,
//     pointB: {x: 10, y: 10},
//     stiffness: 0.03
//   });

//   // Create the ground
//   ground = Bodies.rectangle(width / 2, height - 20, 800, 10, {
//     isStatic: true
//   });

//   // Add all bodies and constraints to the world
//   World.add(engine.world, [
//     ground,
//     poly1A,
//     poly1B,
//     constraint1,
//     poly2,
//     constraint2,
//     poly3,
//     constraint3,
//     poly4,
//     constraint4
//   ]);
// }

// function draw() {
//   background(0);
//   Engine.update(engine);

//   fill(255);
//   drawVertices(poly1A.vertices);
//   drawVertices(poly1B.vertices);
//   drawVertices(poly2.vertices);
//   drawVertices(poly3.vertices);
//   drawVertices(poly4.vertices);

//   stroke(128);
//   strokeWeight(3);
//   drawConstraint(constraint1);
//   drawConstraint(constraint2);
//   drawConstraint(constraint3);
//   drawConstraint(constraint4);

//   fill(128);
//   drawVertices(ground.vertices);
// }

// // HELPER FUNCTIONS
// function drawVertices(vertices) {
//   beginShape();
//   for (var i = 0; i < vertices.length; i++) {
//     vertex(vertices[i].x, vertices[i].y);
//   }
//   endShape(CLOSE);
// }

// function drawConstraint(constraint) {
//   var offsetA = constraint.pointA || {x: 0, y: 0};
//   var posA = constraint.bodyA ? constraint.bodyA.position : {x: 0, y: 0};
//   var offsetB = constraint.pointB || {x: 0, y: 0};
//   var posB = constraint.bodyB ? constraint.bodyB.position : {x: 0, y: 0};

//   line(
//     posA.x + offsetA.x,
//     posA.y + offsetA.y,
//     posB.x + offsetB.x,
//     posB.y + offsetB.y
//   );
// }
