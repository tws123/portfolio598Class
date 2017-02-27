function setup() {
  createCanvas(850, 500); // Width and height of canvas
  smooth(); // What does this do?
  //strokeWeight(2);
}

function draw() {
  background(255); // Background color (yellow)
  translate(mouseX, mouseY);

  noStroke();

  fill(0); // Black fill
  ellipse(250, 250, 200, 200); // Main black circle shape

  fill(255); // White fill
  rect(150, 150, 100, 200); // White rect

  fill(0); // Black fill
  ellipse(250, 300, 100, 100); // Lower black med circle shape

  fill(255); // White fill
  ellipse(250, 200, 100, 100); // Upper med circle shape
  ellipse(250, 300, 20, 20); // Lower small circle shape

  fill(0); // Black fill
  ellipse(250, 200, 20, 20); // Upper small black circle shape

  stroke(0); // Applies stroke. The # is the stroke color
  noFill(); // Removes last fill
  strokeWeight(2); // Thickness of stroke
  ellipse(250, 250, 200, 200); // Location and size of round frame









}
