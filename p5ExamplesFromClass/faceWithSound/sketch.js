/*  Originally created by Alysse Galo
    Modified by Susan Evans
    Last edited 01/22/2017
    
    Draws a bald man, that "sings" to music
*/

// holds the audio input object
var mic;
// holds the current volume
var vol;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();
}

function draw() {
  background(255);
  // Get the overall volume (between 0 and 1.0)
  vol = mic.getLevel();

  if (vol > 0.1) {
    background(random(255), random(255), random(255));
  }

  allHair();
  ears();
  head();
  eyes();
  nose();
  mouth(249, 325);
  eyebrows();
}

function allHair() {
  hair(131, 235);
  hair(370, 235);
}

function hair(x, y) {
  var adjustedVol = map(vol, 0, 1, 0, 50);
  fill(226, 194, 79);
  ellipse(x, y, 40 + adjustedVol, 150 + adjustedVol);

}

function ears() {
  ear(135, 275);
  ear(367, 275);
}

function ear(x, y) {
  noStroke();
  fill(243, 205, 159);
  ellipse(x, y, 50, 70);

  fill(234, 184, 125);
  ellipse(x, y, 30, 40);
}

function head() {
  noStroke();
  strokeWeight(2);
  fill(243, 205, 159);
  ellipse(250, 250, 250, 350);
}

function eyes() {
  eye(196, 224);
  eye(300, 224);
}

function eye(x, y) {
  var adjustedVol = map(vol, 0, 1, 1, 150);
  noStroke();
  strokeWeight(1);
  fill(255, 255, 255);
  ellipse(x, y, 50, 30 - adjustedVol);

  noStroke();
  fill(0);
  ellipse(x, y, 30, 30 - adjustedVol);

}

function nose() {
  noStroke();
  fill(234, 184, 125);
  ellipse(248, 260, 20, 60);

  nostril(264, 281);
  nostril(232, 281);
}

function nostril(x, y) {
  noStroke(0);
  fill(234, 184, 125);
  ellipse(x, y, 20, 10);
}

function mouth(x, y) {
  var adjustedVol = map(vol, 0, 1, 1, 15);
  noStroke();
  fill(242, 159, 159);
  ellipse(x + 10, y + 15, 40 + adjustedVol, 30 * adjustedVol);
  ellipse(x - 10, y + 15, 40 + adjustedVol, 30 * adjustedVol);
  fill(0);
  ellipse(x, y +15, 55 + adjustedVol, 15 * adjustedVol);
}



function eyebrows() {
  eyebrow(279, 180);
  eyebrow(180, 180);
}

function eyebrow(x, y) {
  stroke(226, 194, 79);
  strokeWeight(15);
  fill(255, 255, 255);
  line(x, y + 10, x + 40, y + 10);
}