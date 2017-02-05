/*
created by tess wolfe-stelzer
last edited 2/3/17
this sketch draws a monster that either moves its eyes and tail
or jumps with bended knees and arms.
*/

var page = 0; // sets page to be displayed
var eyeDirection = 0; // sets eye val at zero
var tailDirection = 0; // sets tail val at zero
var jumpValue = 0; // value added to y-pos of monster 
var jumpDir = 1; // speed and direction monster moving

function setup() {
  createCanvas(900, 800); // creates a vertical rectangle canvas
  rectMode(CENTER); // sets rects to be drawn from the center
  angleMode(DEGREES); // allows arcs to be set w/ degrees
}

function draw() {
  background(208, 221, 43); // green
  monster(450, 150 + jumpValue); // draws the monster at x, and adds jump to y
  unmovingParts(450, 150); // parts anchored in one place


  if (page == 0) {
    if (mouseX > 450) { // moves eyes and tail R if mouse R of center
      eyeDirection = eyeDirection + 0.5; // moves R slowly
      tailDirection = tailDirection + 5; // moves R more quickly
      eyeDirection = min(eyeDirection, 11); // keeps pupils in eyes
      tailDirection = min(tailDirection, 120) // keeps tail on page

    } else { // moves eyes and tail L if mouse L of center
      eyeDirection = eyeDirection - 0.5; // moves L slowly
      eyeDirection = max(eyeDirection, -9); // keeps pupils in eyes
      tailDirection = tailDirection - 5; // moves L quickly
      tailDirection = max(tailDirection, -400); // keeps tail on page
    }
  } else { // changes between jump and eye movement pages
    jumpValue = jumpValue - jumpDir // adds jumping
    if (jumpValue > 50 || jumpValue < -45) { // specifies jump range
      jumpDir = jumpDir * -1; // changes jump direction
    }
  }
}

// mousePressed function lives outside draw and doesn't need call
function mousePressed() {
  page = 1 - page;
}

// draws a monster at the x,y location passed
// this monster includes a body, head, and wheels
function monster(x, y) {
  tail(x + tailDirection, y); // calls tail function and allows movements
  legR(x, y); // calls R leg function
  armR(x, y); // calls R arm function
  horns(x, y); // calls horns function
  body(x, y + 180); // calls body function
  head(x, y); // calls head function
  armL(x, y); // calls L arm function
  legL(x, y); // calls L leg function
}

// this function creates parts that will not be moved
function unmovingParts(xU, yU) { // 450, 150 parameters above
  noStroke();
  fill(103, 205, 220); // light blue
  arc(648, 424, 65, 95, 180, 0); // R hand
  arc(202, 400, 65, 95, 180, 0); // L hand;
  arc(xU + 255, yU + 480, 100, 100, 160, 340); // R foot 
  arc(xU - 116, yU + 620, 100, 100, 180, 0); // L foot 
  claws(xU + 175, yU + 280); // R hand claw
  claws(xU + 190, yU + 280); // R hand claw
  claws(xU + 205, yU + 280); // R hand claw
  claws(xU + 221, yU + 280); // R hand claw
  claws(xU - 225, yU + 255); // L hand claw
  claws(xU - 240, yU + 255); // L hand claw
  claws(xU - 255, yU + 255); // L hand claw
  claws(xU - 271, yU + 255); // L hand claw
}

// draws R arm
function armR(x, y) {
  noFill();
  stroke(1, 169, 224); // dark blue)
  strokeWeight(50);
  bezier(x, y + 190, x + 100, y + 300, x + 150, y + 150, 648, 400); // R arm w/ unmoving point
}

// draws L arm
function armL(x, y) {
  noFill();
  stroke(1, 169, 224); // dark blue)
  strokeWeight(50);
  bezier(x - 150, y + 250, x - 200, y + 290, x - 200, y + 300, 200, 400); // Left arm w/ unmoving point
}

// draws L leg
function legL(x, y) {
  noFill();
  stroke(1, 169, 224); // dark blue)
  strokeWeight(50);
  bezier(x - 110, y + 400, x - 128, y + 450, x - 200, y + 500, 350, 745); // L leg w/ unmoving point
}

// draws R leg
function legR(x, y) {
  noFill();
  stroke(1, 169, 224); // dark blue)
  strokeWeight(50);
  bezier(x + 100, y + 375, x + 128, y + 450, x + 200, y + 200, 674, 615); // R leg w/ unmoving point
}

// draws main body
function body(x, y) {
  noStroke();
  fill(1, 169, 224); // dark blue
  ellipse(x - 65, y + 40, 200, 450); // back of body
  ellipse(x - 2, y + 153, 290, 270); // belly
  ellipse(x, y - 100, 250, 250); // head
  fill(103, 205, 220); // light blue
  ellipse(x + 23, y + 153, 235, 215); // belly
}

// draws horns that sit behind head
function horns(x, y) {
  stroke(0);
  strokeWeight(15);
  noFill(); // keeps arcs from getting filled in
  arc(x - 40, y - 100, 250, 250, 1, 160); // XL arc
  strokeWeight(25);
  arc(x - 40, y - 100, 250, 250, 10, 150); // L arc
  strokeWeight(35);
  arc(x - 40, y - 100, 250, 250, 20, 140); // M arc
  strokeWeight(45);
  arc(x - 40, y - 100, 250, 250, 30, 90); // S arc
}

// draws head
function head(x, y) {
  fill(1, 169, 224); // dark blue)
  eyes(x, y); // calls eye function
  mouth(x, y); // calls mouth
  nose(x, y); // calls nostrils
  noFill(); // keeps horn arc on top of head from being filled in
  stroke(0);
  strokeWeight(45);
  arc(x - 40, y - 100, 250, 250, 120, 130); // L horn on top of head
}

// draws mouth
function mouth(x, y) {
  noStroke();
  fill(1, 169, 224); // dark blue)
  arc(x + 20, y + 80, 250, 250, 1, 140); // jutting jaw
  fill(0);
  arc(x + 45, y + 80, 200, 60, 1, 180); // mouth interior
  fill(1, 169, 224); // dark blue)
  arc(x + 25, y + 79, 200, 40, 1, 180); // covers mouth interior
}

// draws nostrils
function nose(x, y) {
  noStroke();
  fill(103, 205, 220); // light blue
  ellipse(x + 65, y + 62, 13, 22, 10, 150); // R nostril
  ellipse(x + 40, y + 65, 15, 25, 10, 150); // L nostril
  // rect(x, y + 75, 15, 20, 7);
}

// draws the eyes at the x, y location
function eyes(x, y) {
  noStroke();
  fill(255);
  ellipse(x + 80, y + 25, 35, 35); // R eye
  ellipse(x - 20, y + 40, 50, 50); // L eye
  pupil(x + eyeDirection, y);
}

// inner pupil that moves
function pupil(x, y) {
  fill(0);
  ellipse(x + 78, y + 27, 18, 18); // R
  ellipse(x - 19, y + 45, 25, 25); // L
}

// draws claw
function claws(xU, yU) {
  stroke(103, 205, 220); // light blue
  strokeWeight(5);
  strokeJoin(ROUND); // softens claws
  triangle(xU - 7, yU - 5, xU + 7, yU - 5, xU, yU + 26); // claws
}

// draws tail
function tail(x, y) {
  noFill();
  stroke(0); // black
  strokeWeight(10);
  bezier(450, y + 350, x + 100, y + 400, x + 200, y + 350, x + 150, y + 150); // tail line
}