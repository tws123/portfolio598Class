// var x = 250;
// var dir = 1;

// function setup() {
//   createCanvas(500, 500);
//   background(25, 100, 235);

// }

// function draw() {
//   background(25, 100, 235);
//   fill(255, 0, 0);
//   ellipse(x, 250, 50, 50);
//   x = x + 2 * dir;

// if (x < 25 || x > 475) {
//   dir = dir * -1;
//   // min
//   //  x = min(x + 1, 475);
// }
// }
var postion = 0;
var x = 25;
var dir = 1;


function setup() {
  createCanvas(1000, 700);
  background(249, 243, 224);
}

function draw() {

  background(249, 243, 224);
  
   if (x > 675 || x < 25) {
    dir = dir * -1;
  }
  x = x + dir;
  
  // yoda
  noStroke();
  fill(50, 163, 63); // green
  rect(275, 287.5, 50, 50); // head
  rect(225, 300, 150, 12.5); // ear tops
  rect(250, 312.5, 100, 12.5); // ear bottom
  fill(130, 99, 61); // brown
  rect(275, 337.5, 50, 62.5); // body
  fill(0); // black
  rect(275, 362.5, 50, 12.5); // belt

  // r2d2
  fill(200); // gray
  rect(400, 275, 75, 25);
  fill(27, 42, 249); // blue
  rect(400, 300, 75, 25); // band
  fill(255); // white
  rect(400, 325, 75, 75); // body
  rect(375, 375, 125, 25); // feet
  fill(0);
  ellipse(437.5, 312.5, 30, 30); // eye

  // c3po
  fill(242, 223, 16); // gold 
  rect(525, 150, 50, 250); // body
  fill(170, 132, 17); // dark gold  
  rect(525, 275, 50, 25); // waist shadow
  stroke(170, 132, 17);
  noFill();
  strokeWeight(3);
  ellipse(550, 237.5, 30, 30);
  ellipse(550, 237.5, 10, 10);

  // chewy
  noStroke()
  fill(130, 99, 61); // brown
  rect(625, 100, 75, 300); // main body
  fill(107, 79, 51); // dark brown
  rect(625, 100, 75, 25);
  fill(175); // dark grey
  quad(700, 200, 700, 225, 625, 300, 625, 275); // shoulder strap


}