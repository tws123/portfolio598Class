/* Code by Tess Wolfe-Stelzer, submitted Jan 1, 2017. Code contains
digital artwork inspired by Miro's Constellation series. All coding
original (which is probably evident in how uninformed it's structure
is), though all for statements were adapted from the p5js.org Examples
page https://p5js.org/examples/ */

function setup() {

  createCanvas(1000, 855); // Width and height of canvas
  smooth(); // I've noticed this in our exercises. What does it do?
  background(229, 216, 179); //sets background color to cream

  stroke(0); // Sets color of stroke
  strokeWeight(3); // Weight of stroke
  line(100, 70, 100, 0); // Left corner line
  line(160, 120, 190, 50); // Left cherry stem
  line(220, 120, 190, 50); // Right cherry stem
  line(168, 220, 175, 280); // Dumbell
  line(55, 165, 135, 165); // Vert line above L triangle
  line(0, 700, 68, 700); // Gingo leaf line
  line(355, 750, 355, 855); // Lower left dumbell line
  line(95, 120, 95, 300); // Vert line above triangle

  // Line Stars
  strokeWeight(3);
  translate(400, 100); // Sets location of shape
  for (var i = 0; i < 10; i++) { // Top middle star
    line(0, 0, 40, 40); // Beginning and end of line
    rotate(PI / 4); // # of rotations
  }
  resetMatrix();

  translate(500, 500); // Sets location
  for (var i = 0; i < 10; i++) { // Middle star
    line(0, 0, 50, 50); // Beginning and end of line
    rotate(PI / 4); // # of rotations
  }
  resetMatrix(); // Resets rotation

  translate(20, 800); // Sets location
  for (var i = 0; i < 10; i++) { // Bottom L star
    line(0, 0, 30, 30); // Beginning and end of line
    rotate(PI / 4); // # of rotations
  }
  resetMatrix(); // Resets rotation

  translate(450, 750); // Sets location
  for (var i = 0; i < 10; i++) { // Bottom L star
    line(0, 0, 20, 20); // Beginning and end of line
    rotate(PI / 4); // # of rotations
  }
  resetMatrix(); // Resets rotation

  // Misc shapes
  noStroke();
  fill(0); // Fill color
  ellipse(25, 15, 40, 35); // Top left corner 1
  ellipse(100, 70, 45, 40); // Top left corner 2
  ellipse(160, 120, 46, 44); // Top L cherry 
  ellipse(220, 120, 40, 35); // Top R cherry 
  ellipse(168, 220, 48, 45); // Top dumbell R of triangle
  ellipse(175, 280, 44, 38); // Bottom dumbell R of triangle
  ellipse(240, 270, 44, 42); // L of arc 
  ellipse(330, 250, 64, 62); // R of arc
  triangle(95, 260, 15, 345, 170, 365); // Upper L triangle
  ellipse(25, 470, 64, 62); // Left middle running off canvas 
  ellipse(95, 700, 60, 90); // Lower L of flower
  ellipse(250, 500, 120, 190); // Vert flower
  ellipse(285, 550, 140, 100); // Horz flower
  ellipse(350, 450, 35, 35); // Top flower stamen
  ellipse(395, 520, 35, 35); // Lower flower stamen
  ellipse(355, 750, 40, 35); // Lower L dumbell
  ellipse(355, 855, 40, 35); // Lower L dumbell
  ellipse(720, 220, 318, 318); // Giant top R circle

  // Black circles arranged around large circle
  translate(720, 220); // Sets location of shape
  for (var i = 0; i < 10; i++) {
    ellipse(150, 50, 70, 70, 2, 5); // (x, y, w, h, )
    rotate(PI / 3);
  }
  resetMatrix() // Resets rotation

  // Eyelashes
  stroke(0); // Stroke color
  noFill();
  strokeWeight(3);
  translate(723, 690); // Location of shape
  for (var i = 0; i < 10; i++) {
    arc(0, 100, 90, 90, 1, 5); // (x, y, w, h, start, stop)
    rotate(PI / 4); // Sets number of rotaions
  }
  resetMatrix(); // Resets rotation

  noStroke();
  fill(0);
  ellipse(702, 698, 300, 155); // Eye
  triangle(939, 696, 800, 639, 800, 755); // R eye triangle
  triangle(520, 700, 585, 650, 585, 746); // L eye triangle

  fill(58, 6, 201);
  triangle(775, 510, 1000, 350, 1000, 495); // Top R (blue) triangle
  triangle(1000, 490, 950, 490, 1000, 650); // Lower R (blue) triangle

  fill(229, 216, 179); // Same as background color
  ellipse(350, 450, 200, 250); // Horz flower
  triangle(65, 699, 95, 655, 40, 600); // Gingo leaf triangle 1
  triangle(40, 750, 65, 703, 95, 750); // Gingo leaf triangle 2

  fill(72, 178, 60); // Green eye triangles
  triangle(527, 700, 670, 668, 670, 733); // L eye triangle
  triangle(929, 696, 770, 665, 770, 735); // R eye triangle
  ellipse(723, 700, 185, 80); // Green eye center

  fill(224, 51, 35); // Red fill
  ellipse(723, 690, 110, 100); // Red eye large 

  fill(255); // White fill
  ellipse(723, 690, 85, 80); // White eye center

  fill(0);
  ellipse(723, 690, 60, 60); // Black iris 

  fill(0);
  ellipse(330, 440, 35, 35); // Top flower stamen
  ellipse(375, 510, 35, 35); // Lower flower stamen
  triangle(723, 665, 723, 625, 850, 680); // Eyelid R
  triangle(723, 665, 723, 625, 560, 680); // Eyelid

  fill(224, 51, 35);
  ellipse(238, 590, 65, 80); // Red fill on flower

  translate(720, 220); // Red half arc
  for (var i = 0; i < 10; i++) {
    arc(150, 50, 70, 70, 2, 5); // Not sure how this works
    rotate(PI / 3); // # of rotations
  }
  resetMatrix() // Resets rotation

  stroke(0);
  strokeWeight(3);
  line(230, 500, 330, 440); // Stamen line 1
  line(275, 560, 375, 510); // Stamen line 2

  fill(224, 51, 35); // Red fill
  ellipse(723, 690, 40, 40); // Red eye center

  fill(0);
  noStroke();
  ellipse(723, 690, 20, 20); // Pupil
  quad(209, 570, 270, 599, 220, 855, 127, 855) // Black flower stem
  triangle(775, 510, 860, 504, 825, 475);
  fill(58, 6, 201);
  quad(127, 855, 220, 855, 209, 570, 270, 599); // Blue flower stem

  //Bowties
  fill(255); // White fill
  quad(300, 300, 450, 370, 450, 280, 300, 350); // Bowtie upper L
  quad(870, 555, 950, 600, 950, 550, 870, 595); // Bowtie lower R
}