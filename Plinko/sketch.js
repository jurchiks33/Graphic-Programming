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