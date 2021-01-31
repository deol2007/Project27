const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var blob1, blob2, blob3, blob4, blob5
var rope1, rope2, rope3, rope4, rope5
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  roof = new Roof_(600,height,1200,20);
  blob1 = new Blob(150,300)
  blob2 = new Blob(250,300)
  blob3 = new Blob(350,300)
  blob4 = new Blob(450,300)
  blob5 = new Blob(550,300)
  rope1 = new Rope(blob1.body, roof.body, -blobDiameter*2, 0)
  rope2 = new Rope(blob2.body, roof.body, -blobDiameter*2, 0)
  rope3 = new Rope(blob3.body, roof.body, -blobDiameter*2, 0)
  rope4 = new Rope(blob4.body, roof.body, -blobDiameter*2, 0)
  rope5 = new Rope(blob5.body, roof.body, -blobDiameter*2, 0)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}