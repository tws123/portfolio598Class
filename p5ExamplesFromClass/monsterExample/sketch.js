// MONSTER
var page = 0; // sets page to be displayed
var eyeDirection = 0; // sets eye val at zero
var jumpValue = 0; // value added to y-pos of monster 
var jumpDir = 1; // speed and direction monster moving

function setup() {
  createCanvas(900, 800); // creates a vertical rectangle canvas

  rectMode(CENTER); // sets rects to be drawn from the center
  angleMode(DEGREES);
}

function draw() {
  background(100, 168, 74); // sets the background color to green
  monster(450, 150 + jumpValue); // draws the monster at 225, 150

  if (page == 0) {
    if (mouseX > 225) { // add code here to move eyes
      eyeDirection = eyeDirection + 0.5;
      eyeDirection = min(eyeDirection, 50);

    } else {
      eyeDirection = eyeDirection - 0.5;
      eyeDirection = max(eyeDirection, -50);
    }
  } else {
    jumpValue = jumpValue - jumpDir // add code here to jump
    if (jumpValue > 100 || jumpValue < -10) {
      jumpDir = jumpDir * -1;
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
  horns(x, y);
  body(x, y + 180);
  head(x, y);
  legs(x, y + 450);
  tail(x, y);

}

// draws the body of the monster at thhe x, y location
function body(x, y) {
  noStroke();
  fill(139, 69, 19);
  ellipse(x, y + 45, 250, 350); // belly
  //rect(x, y - 100, 70, 150); // narrow neck
  fill(255, 209, 209); // pink
  ellipse(x, y + 45, 150, 250); // belly


}

function horns(x, y) {
  // draw smile u  
  noFill();
  stroke(0);
  strokeWeight(10);
  arc(x, y - 100, 350, 250, 1, 180);
  strokeWeight(15);
  arc(x, y - 100, 350, 250, 5, 175);
  strokeWeight(20);
  arc(x, y - 100, 350, 250, 10, 170);
  strokeWeight(25);
  arc(x, y - 100, 350, 250, 15, 165);
  strokeWeight(30);
  arc(x, y - 100, 350, 250, 20, 160);
  strokeWeight(35);
  arc(x, y - 100, 350, 250, 25, 155);
}
// draws the head at the x, y location
// the head includes the ears and the eyes
function head(x, y) {
  ears(x, y);
  fill(139, 69, 19); // brown
  //ellipse(x, y + 50, 250, 150, 7); // main head
  ellipse(x - 30, y, 100, 100); // forehead
  ellipse(x + 30, y, 100, 100); // forehead
  eyes(x + eyeDirection, y); // calls eye function
  rect(x, y + 50, 40, 20, 7);
}

// draws the ears at the x, y location
function ears(x, y) {
  fill(139, 69, 19); // brown
  ellipse(x, y + 25, 400, 75);
  fill(255, 209, 209); // pink
  ellipse(x, y + 25, 380, 55);
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
function legs(x, y) {
  stroke(139, 69, 19);
  strokeWeight(5);
  line(x - 15, y + 475, x - 50, y + 330);
  line(x + 15, y + 475, x + 50, y + 330);
  
  toes(x + 95, y + 20);
  toes(x - 95, y + 20);
  toes(x + 85, y + 20);
  toes(x - 85, y + 20);
  toes(x + 75, y + 20);
  toes(x - 75, y + 20);
  toes(x + 65, y + 20);
  toes(x - 65, y + 20);
  toes(x + 50, y + 20);
  toes(x - 50, y + 20);





}

// draws toes on feet
function toes(x, y) {
  stroke(139, 69, 19);
  fill(255, 209, 209);
  strokeWeight(5);
  ellipse(x, y, 35, 35);
}

function tail(x, y) {
  noFill();
  stroke(255, 102, 0);
  // for (var i = 0; i < 200; i += 20) {
  //   bezier(x, y + 250, x -400, y +200, x -200, y +600, mouseX + i, 790);
  // }
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