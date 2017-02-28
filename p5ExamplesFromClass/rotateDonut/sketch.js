var s = 1
var d = 1

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(255, 0, 100);
  rotateX(frameCount / 20);
  resetMatrix();
  torus(150, 25);
  rotateY(frameCount / 30);
  torus(250, 25);
  torus(50, 25);
}
