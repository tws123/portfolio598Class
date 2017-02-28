/* The background line of code appears to conceal each redrawing of
the robot by masking it with another color so that only the most recent
drawing is visible. At least I think that's what's happening.
*/function setup() {
  createCanvas(850, 480); // Width and height of canvas
  smooth(); // What does this do?
  strokeWeight(2);
}
function draw() {
  background(7, 175, 97); // Playfield color
  translate(mouseX, mouseY); // Redraws at x,y location of mouse
  // Neck
  stroke(102); // Color of neck lines
  line(266, 257, 266, 162); // Left neck (x,y [start], x,y [end])
  line(276, 257, 276, 162); // Middle neck (x,y [start], x,y [end])
  line(286, 257, 286, 162); // Right neck (x,y [start], x,y [end])
  
  // Antennae
  line(276, 155, 236, 112); // Left antenna (x,y [start], x,y [end])
  line(276, 155, 306, 56); // Middle antenna (x,y [start], x,y [end])
  line(276, 155, 342, 170); // Right antenna (x,y [start], x,y [end])
  fill(102);
  ellipse(236, 112, 10, 10); // Antenna ball L
  ellipse(306, 56, 10, 10); // Antenna ball middle
  ellipse(342, 170, 10, 10); // Antenna ball R
  
  // Body
  noStroke(); // No stroke applied unless otherwise stated
  fill(102); // RGB color fill of outside wheel
  ellipse(264, 377, 66, 66); // Outside wheel shape(x, y, width, height)
  fill(255); // White wall fill
  ellipse(264, 377, 40, 40); // White wall shape(x, y, width, height)
  fill(255,182,18); // RGB color fill of inside wheel
  ellipse(264, 377, 20, 20); // Inside wheel shape(x, y, width, height)
  fill(33,61,48);// RGB color fill of main body and part of right sleeve
  rect(300, 257, 40, 30); // Right sleeve horz rec
  rect(219, 257, 90, 120); // Body shape(x, y, width, height)
  fill(255,182,18); // RGB color fill of body stripe
  rect(219, 274, 90, 6); // Stripe shape(x, y, width, height)
  stroke(102); // Color of arm lines
  line(195, 305, 195, 330) // Left arm vert
  line(195, 330, 335, 330) // Arm horz
  line(335, 310, 335, 330) // Right arm vert
  noStroke(); // Takes stroke off
  fill(33,61,48);// RGB color fill of left sleeve
  rect(180, 257, 30, 55); // Left sleeve vert rec
  rect(180, 257, 40, 30); // Left sleeve horz rec
  rect(320, 257, 30, 55); // Right sleeve vert rec
  fill(175);// RGB color fill of hands 
  rect(250, 315, 80, 30); // hands rect shape
 
  // Football
  fill(135, 102, 70); // RGB color fill of football
  ellipse(295, 330, 66, 36); // Football shape(x, y, width, height)
  stroke(252); // Color of stitches
  line(285, 325, 285, 335) // Football vert stitch
  line(295, 325, 295, 335) // Football vert stitch
  line(305, 325, 305, 335) // Football vert stitch
  line(315, 325, 315, 335) // Football vert stitch
  line(275, 330, 320, 330) // Football horz stitch

  // Head
  noStroke();
  fill(255,182,18); // RGB color fill of head
  ellipse(276, 155, 90, 90); // Head shape(x, y, width, height)
  fill(255); // RGB color fill of eye
  ellipse(288, 150, 28, 28); // Eye shape(x, y, width, height)
  fill(0);  // RGB color fill of pupil
  ellipse(288, 150, 6, 6); // Pupil shape(x, y, width, height)
  fill(33,61,48); // RGB color fill of circles around eye 
  ellipse(263, 148, 10, 10); // Left eye circle shape(x, y, width, height)
  ellipse(296, 130, 8, 8); // Middle eye circle shape(x, y, width, height)
  ellipse(305, 162, 6, 6); // Right eye circle shape(x, y, width, height)
  
}

