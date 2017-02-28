
// 400 × 320
var dog;
var dogWidth = 400;
var aspectRatio = 320 / 400;

function preload() {
  dog = loadImage("borderCollie.jpg");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  // background(255);
  // image(cat, 0, 0, mouseX, mouseX * aspectRatio);
}

function mousePressed() {
  background(255);
  dogWidth = random(10, 600);
  image(dog, random(0, 700), random(0, 700), dogWidth, dogWidth * aspectRatio);
}