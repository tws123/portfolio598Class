var x = 150
var y = 150


function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255);
    line(x, y, mouseX, mouseY);

  }
}