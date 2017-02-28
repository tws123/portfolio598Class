function setup() {
  createCanvas(500, 500);
  strokeWeight(1);
}

function draw() {
  for (y = 30; y < 499 - 30; y = y + 10) {
    for (x = 30; x < 499 - 30; x = x + 10) {
      point(x, y);
    }
  }
}