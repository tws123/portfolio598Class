/* 
1/21/17 Tess Wolfe-Stelzer
Inspired by Lego Imagine ad campaign
http://adsoftheworld.com/campaign/lego-jung-von-matt-03-2012
This program has four star wars-themed lego figures that move
around and off the screen, until only yoda remains.*/
var time1 = 6000; // sets a time frame
var time2 = 13000; // sets second time frame
var time3 = 14000; // sets third time frame
var time4 = 23000; // sets forth time frame

var xYoda = 25; // starting x yoda position
var yYoda = 25; // starting y yoda position
var xDirYoda = 1; // x direction yoda
var yDirYoda = 1; // y direction yoda

var xR2 = 25; // starting x R2 position
var yR2 = 550; // starting y R2 postion
var xDirR2 = 1.5; // x direction R2
var yDirR2 = 1; // y direction R2

var xC3 = 925; // starting x C3PO
var yC3 = 25; // starting y C3PO
var xDirC3 = 2; // x direction C3PO
var yDirC3 = 1; // y direction C3PO

var xChew = 900; // starting x Chewy
var yChew = 375; // starting y Chewy
var xDirChew = 1; // x direction Chewy
var yDirChew = 1; // y direction Chewy

// runs once
function setup() {
  createCanvas(1000, 700); // establishes canvas size
}
//runs in loop
function draw() {
  var currentTime = millis(); // makes counter variable
  //print(currentTime); // prints millis to console DON'T LEAVE ON
  background(252, 241, 207);

  // first in sequence
  if (currentTime < time1) {
    yoda(); // calls yoda function
    xYoda = xYoda + xDirYoda; // increases xYoda by xDirYoda
    yYoda = yYoda + yDirYoda; // inceases yYoda by yDirYoda
    xYoda = min(xYoda, 225); // makes xYoda smallest # in array
    yYoda = min(yYoda, 287.5); // makes yYoda smallest # in array

    r2d2(); // calls r2d2 function
    xR2 = xR2 + xDirR2; // increases xR2 by XDirR2
    yR2 = yR2 - yDirR2; // increasses yR2 by yDirR2
    xR2 = min(xR2, 375); // makes xR2 smallest # in array
    yR2 = max(yR2, 275); // makes yR2 smallest # in array

    c3po(); // calls c3po functio
    xC3 = xC3 - xDirC3; // decreases xC3 by xDirC3
    yC3 = yC3 + yDirC3; // increases yC3 by yDirC3
    xC3 = max(xC3, 525); // makes xC3 largest # in array
    yC3 = min(yC3, 150); // makes yC3 smallest # in array

    chewy(); // calls chewy function
    xChew = xChew - xDirChew; // decreases xChew by xDirChew
    yChew = yChew - yDirChew; // decreases yChew by yDirChew
    xChew = max(xChew, 625); // makes xChew largest # in array
    yChew = max(yChew, 100); // makes yChew largest # in array

    // second in sequence
  } else if (currentTime > time1 && currentTime < time2) {
    yoda(); // calls yoda function
    xYoda = xYoda + xDirYoda; // increases xYoda by xDirYoda
    yYoda = yYoda + yDirYoda; // increases yYoda by yDirYoda

    r2d2(); // calls r2d2 fuction
    xR2 = xR2 + xDirR2; // increases xR2 by xDirR2 
    yR2 = yR2 - yDirR2; // increases yR2 by yDirR2

    c3po(); // calls c3po function
    xC3 = xC3 - xDirC3; // decreases xC3 by xDirC3
    yC3 = yC3 + yDirC3; // increases yC3 by yDirC3

    chewy(); // calls chewy function
    xChew = xChew - xDirChew; // decreases xChew by xDirChew
    yChew = yChew - yDirChew; // decreases yChew by yDirChew

    // third in sequence
  } else if ((currentTime > time3) && (currentTime < time4)) {
    yodaWithSaber1(); // calls yodaWithSaber1
    xYoda = xYoda - xDirYoda; // decreases xYoda by xDirYoda
    yYoda = yYoda - yDirYoda; // decreases yYoda by xDirYoda
    xYoda = max(xYoda, 225); // makes xYoda biggest # in array
    yYoda = max(yYoda, 287.5); // makes yYoda biggest # in array

    // 4th time sequence
  } else if (currentTime > time4) {
    yodaWithSaber2(); // calls yodaWithSaber2
    yYoda = 287.5; // puts yoda at middle middle 
    xYoda = (xYoda + 4) % 1000; // moves faster yoda to R, reappears on L

    r2d2(); // calls r2d2 function

    c3po(); // calls c3po function

    chewy(); // calls chewy function
  }
}

// yoda
function yoda() {
  noStroke();
  fill(50, 163, 63); // green
  rect(xYoda + 50, yYoda, 50, 50); // head (yYoda at center = 287.5)
  rect(xYoda, yYoda + 12.5, 150, 12.5); // ear tops (xYoda at center = 225)
  rect(xYoda + 25, yYoda + 25, 100, 12.5); // ear bottom
  fill(130, 99, 61); // brown
  rect(xYoda + 50, yYoda + 50, 50, 62.5); // body
  fill(0); // black
  rect(xYoda + 50, yYoda + 75, 50, 12.5); // belt
}

// L facing saber
function saber1() {
  stroke(random(255), randomGaussian(255), randomGaussian(255), 150); // flashes greenish light partial opacity
  strokeCap(ROUND); // makes cap round
  strokeWeight(15);
  line(xYoda + 60, yYoda + 60, xYoda - 40, yYoda + 40); // wide saber line
  stroke(2, 252, 164); // saber color
  strokeWeight(9);
  line(xYoda + 60, yYoda + 60, xYoda - 40, yYoda + 40) // narrow saber line
  stroke(135); // gray
  strokeCap(SQUARE); // makes cap square
  strokeWeight(18);
  line(xYoda + 60, yYoda + 60, xYoda + 40, yYoda + 57) // saber handle
}

// R facing saber
function saber2() {
  stroke(random(255), randomGaussian(255), randomGaussian(255), 150); // flashes greenish light partial opacity
  strokeCap(ROUND); // makes cap round
  strokeWeight(15);
  line(xYoda + 60, yYoda + 60, xYoda + 200, yYoda + 40) // wide saber line
  stroke(2, 252, 164); // saber color
  strokeWeight(9);
  line(xYoda + 60, yYoda + 60, xYoda + 200, yYoda + 40) // narrow saber line
  stroke(135);
  strokeCap(SQUARE); // makes cap square
  strokeWeight(18);
  line(xYoda + 60, yYoda + 60, xYoda + 110, yYoda + 53); // saber handle
}

// yoda w/ L saber
function yodaWithSaber1() {
  saber1(); // calls saber1
  yoda(); // calls yoda
}

// yoda w/ R saber
function yodaWithSaber2() {
  saber2(); // calls saber2
  yoda(); // calls yoda
}

// r2d2
function r2d2() {
  fill(200); // gray
  rect(xR2 + 25, yR2, 75, 25); // (yR2 at center = 275) 
  fill(27, 42, 249); // blue
  rect(xR2 + 25, yR2 + 25, 75, 25); // band
  fill(255); // white
  rect(xR2 + 25, yR2 + 50, 75, 75); // body
  rect(xR2, yR2 + 100, 125, 25); // feet (xR2 at center = 375)
  fill(0);
  ellipse(xR2 + 62.5, yR2 + 37.5, 30, 30); // eye
}

// c3po
function c3po() {
  fill(242, 223, 16); // gold 
  rect(xC3, yC3, 50, 250); // body (at center: xC3 = 525 and yC3 = 150)
  fill(170, 132, 17); // dark gold  // 
  rect(xC3, yC3 + 125, 50, 25); // waist shadow y = 275
  stroke(170, 132, 17); // dark gold
  noFill();
  strokeWeight(3);
  ellipse(xC3 + 25, yC3 + 87.5, 30, 30); // chest circle L
  ellipse(xC3 + 25, yC3 + 87.5, 10, 10); // chest circle SM
}

// chewy
function chewy() {
  noStroke()
  fill(130, 99, 61); // brown
  rect(xChew, yChew, 75, 300); // main body (at center xChew = 625 yChew = 100)
  fill(107, 79, 51); // dark brown
  rect(xChew, yChew, 75, 25);
  fill(175); // dark grey
  quad(xChew + 75, yChew + 100, xChew + 75, yChew + 125, xChew, yChew + 200, xChew, yChew + 175); // shoulder strap
}