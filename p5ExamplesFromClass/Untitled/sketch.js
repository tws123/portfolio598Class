// MONSTER
var page = 0; // sets page to be displayed
var eyeDirection = 0; // sets eye val at zero

function setup() {
  createCanvas(450, 850); // creates a vertical rectangle canvas
  background(209, 153, 185); // sets the background color to pink
  rectMode(CENTER); // sets rects to be drawn from the center
}

function draw() {
  background(209, 153, 185);
  monster(225, 150); // draws the monster at 225, 150
  mousePressed();
  if (page == 0) {
    if (mouseX > 225) { // add code here to move eyes
      eyeDirection = eyeDirection + 0.9;

    } else {
      eyeDirection = eyeDirection - 0.9;
    }
  // } else {
  //   page = 1 - page; // add code here to jump
}
}

function mousePressed() {
  page = 1 - page;

}

// draws a monster at the x,y location passed
// this monster includes a body, head, and wheels
function monster(x, y) {
  body(x, y + 180);
  head(x, y);
  wheels(x, y + 450);
}

// draws the body of the monster at thhe x, y location
function body(x, y) {
  noStroke();
  fill(183, 255, 229);
  rect(x, y + 45, 350, 150, 7);
  rect(x, y, 25, 450, 7);
}

// draws the head at the x, y location
// the head includes the ears and the eyes
function head(x, y) {
  ears(x, y);
  fill(183, 255, 229);
  rect(x, y, 250, 150, 7);
  ellipse(x, y - 25, 125, 125);
  stroke(183, 255, 229);
  strokeWeight(5);
  line(x - 15, y - 75, x - 50, y - 130);
  line(x + 15, y - 75, x + 50, y - 130);
  eyes(x + eyeDirection, y); // calls eye function
  rect(x, y + 50, 40, 20, 7);
}

// draws the ears at the x, y location
function ears(x, y) {
  fill(183, 255, 229);
  rect(x, y + 25, 300, 75, 7);
  fill(209, 153, 185);
  rect(x, y + 25, 280, 55, 7);
}

// draws the eyes at the x, y location
function eyes(x, y) {
  noStroke();
  // fill(183, 255, 229);
  // // outside part of eyes
  // fill(209, 153, 185);
  // ellipse(x + 40, y + 15, 55, 55);
  // ellipse(x - 45, y + 15, 55, 55);
  // // middle part of eyes
  // fill(225, 225, 225);
  // ellipse(x + 40, y + 15, 40, 40);
  // ellipse(x - 45, y + 15, 40, 40);
  // inner part of eyes
  fill(0);
  ellipse(x + 40, y + 15, 25, 25);
  ellipse(x - 45, y + 15, 25, 25);
}

// draws the wheels at the x, y location
function wheels(x, y) {
  fill(183, 255, 229);
  stroke(209, 153, 185);
  strokeWeight(2);
  ellipse(x, y, 125, 125);
  fill(225, 225, 225);
  strokeWeight(4);
  ellipse(x, y, 100, 100);
  ellipse(x, y, 75, 75);
}



//RECT HOVER
// function setup() {
//   createCanvas(400, 400);
//   noStroke();
// }

// function draw() {
//   background(204);
//   rect(100, 200, 180, 160);

//   if (mouseX > 100 && mouseX < 280 && mouseY > 200 && mouseY < 360) {
//     fill(0);
//   } else {
//     fill(255);
//   }
// }



//DRAWS WITH ELLIPSE
// function setup() {
//   createCanvas(500, 500);
//   background(255, 0, 0);
// }

// function draw() {
//   ellipse(mouseX, mouseY, 25, 25);
// }

// function mousePressed() {
//   fill(random(255), random(255), random(255));
// }



// DRAWS LINE FROM MOUSE TO POINT
// function setup() {
//   createCanvas(500, 500);
//   background(0, 0, 255);
// }

// function draw() {
//   if(mouseIsPressed) {
//     stroke(255, 255, 255);
//     line(150, 150, mouseX, mouseY);
//   }
// }


// GROWING ELLIPSE WHEN MOUSE IN CIRCLE
// var x = 250;
// var y = 250;
// var w = 50;

// function setup() {
//   createCanvas(500, 500);
//   background(255);
//   noStroke();
// }

// function draw() {
//   background(255);
//   fill(120);
//   ellipse(x, y, w, w);
//   distance = dist(x, y, mouseX, mouseY);
//   if (distance < w / 2) {
//     w = w + 1; 
//   } else {
//     w = 50;  
//   }
// }