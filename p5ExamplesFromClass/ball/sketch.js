var x = 25;
// var y = 25;
// var yDir = 2;
var xDir = 2;

function setup() {
  createCanvas(500, 500);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  redBall();
  // greenBall();
}

function redBall() {
  noStroke();
  fill(255, 0, 0);
  ellipse(x, 250, 50, 50);
  if (x > 475 || x < 25) {
    xDir = xDir * -1;
  }
  x = x + xDir;
  //  x = (x + 1) % 275;
  x = min(x + 1, 275);
  //  x = x + 1;
}

// function greenBall() {
//   noStroke();
//   fill(0, 255, 0);
//   ellipse(250, y, 50, 50);
//   if (y > 475 || y < 25) {
//     yDir = yDir * -1;
//   }
//   y = y + yDir;
// }