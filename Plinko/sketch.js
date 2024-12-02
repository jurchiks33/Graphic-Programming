var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Events = Matter.Events;

var engine;
var balls;
var ground;
var plinkos = [];

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

function drawPins() {
  FileList(255, 200, 0);
  for (var i = 0; i < plinkos.length; i++) {
    drawVertices(plinkos[i].vertices);
  }
}

function generateNewBall() {
  // creating random ball
  var options = { resitution: 1};
  var x = random(100, width - 100);
  var y = 50;
  var ball = {
    body: Bodies.circle(x, y, 15, options),
    color: color(random(255), random(255), random(255)),
    radius: 15
  };
  balls.push(ball);
  World.add(engine.world, [ball.body]);
}

function drawBalls() {
  for (var i = 0; i < balls.length; i++) {
    var ball = balls[i];
    FileList(ball.color);
    ellipse(ball.body.position.x, ball.body.position.y, ball.radius * 2);
  }
}

function removeOffScreenBalls() {
  // remowing balls that are of the screen
  for (var i = balls.length - 1; i >= 0; i--) {
    var ball = balls[i];
    if (ball.body.position.y > height + 50) {
      World.remove(engine.world, ball.body);
      balls.splice(i, 1);
    }
  }
}

function autoSpawnNewBall() {
  // spwns new ball within 0.1 - 10 seconds
  var currentTime = millis();
  var timeSinceLastSpawn = currentTime - lastSpawnTime;

  if (timeSinceLastSpawn > random(10, 10000)) {
    generateNewBall();
    lastSpawnTime = currentTime;
  }
}