/*
Created by Tess Wolfe-Stelzer
Last edited 2/11/17
This program creates two arrays of both rain and snowflake objects.
The objects are varied in size and move at varied speeds. The direction
of rain and snow is controlled by the L and R arrow keys; clicking
the mouse switches between rain and snow. The object structure was inspired
by Daniel Shiffman lecture 6.3, Array of Objects*/

var snow = []; // establishes snow as array
var rain = []; // establishes rain as array
var xDir = 0; // holds the value for x Direction
var yDir = 0; // holds the value for y Direction
var page = 0; // sets page to be displayed



function setup() {
  createCanvas(windowWidth, windowHeight); // makes canvas size of window
  textFont("Work Sans"); 

  // makes all the snowflakes snowflakes
  for (var i = 0; i < 100; i++) {
    snow[i] = {
      x: random(0, width), // position x is random value between 0–width of screen
      y: random(0, height), // position y is random value between 0–height of screen
      flakeWidth: random(3, 20), // creates variation in snowflake size between 3–20
      speed: random(0.2, 3), // creates variation in snowflake speed between 0.2–3

      // makes snowflake shape
      shape: function() {
        noStroke();
        fill(255); // white
        ellipse(this.x, this.y, this.flakeWidth, this.flakeWidth); // snowflake shape
      },

      // moves snow down
      move: function() {
        this.y = (this.y + this.speed) % height; // moves down; hits bottow and starts at top
      },

      // moves snow R
      moveR: function() {
        this.x = (this.x + this.speed) % width; // moves R; hits canvas edge and starts on L
        this.y = (this.y + this.speed) % height; // moves down; hits bottow and starts at top
      },

      // moves snow L
      moveL: function() {
        this.x = (this.x - this.speed); // moves L; hits canvas edge 
        if (this.x < 0) {
          this.x = width; // starts over on R
        }
        this.y = (this.y + this.speed) % height; // moves down; hits bottow and starts at top
      },
    }
  }

  // makes the raindrops 
  for (var j = 0; j < 100; j++) {
    rain[j] = {
      x: random(0, width), // position x is random value between 0–width of screen
      y: random(0, height), // position y is random value between 0–height of screen
      lengthLine: random(7, 10), // creates variation in raindrop length between 7–10
      speed: random(10, 30), // creates variation in raindrop speed between 10–30

      // makes raindrop shape
      shape: function() {
        stroke(210, 212, 216);
        strokeWeight(random(1, 3)); // creates variation in width of rain line between 1–3
        line(this.x, this.y, this.x + xDir, this.y + yDir + this.lengthLine);
      },

      // moves rain down
      move: function() {
        this.y = (this.y + this.speed) % height; // moves down; hits bottow and starts at top
      },

      // moves rain R
      moveR: function() {
        this.x = (this.x + this.speed) % width; // moves R; hits canvas edge and starts on L
        this.y = (this.y + this.speed) % height; // moves down; hits bottow and starts at top
      },

      // moves rain L
      moveL: function() {
        this.x = (this.x - this.speed); // moves L
        if (this.x < 0) {
          this.x = width; // hits canvas edge and starts on R
        }
        this.y = (this.y + this.speed) % height; // moves down; hits bottow and starts at top
      },
    }
  }
}

function draw() {
  // frameRate(20); future iteration option: slow frame rate in object to make rain look like meteors
  background(0);

  if (page == 0) { // page 0 is rain page
    for (i = 10; i < windowWidth; i++) { // creates gradient behind drops
      stroke(i * .2); // black top, gray bottom. Larger multiple shrinks gradient (white on bottom)
      strokeWeight(1);
      line(0, i, windowWidth, i); // gradient lines
    }
    for (var j = 0; j < rain.length; j++) {
      rain[j].shape(); // calls the shape function w/in the rain object
      if (keyIsPressed) {
        if (keyCode == LEFT_ARROW) {
          xDir = -10; // raindrop bottoms point L
          rain[j].moveL(); // calls moveL function that moves whole raindrop L
        } else if (keyCode == RIGHT_ARROW) {
          rain[j].moveR(); // calls the moveR function that moves whole raindrop R
          xDir = +10; // raindrop bottoms point R
        }
      } else {
        rain[j].move(); // calls function for rain going down if no arrow keys pressed
        xDir = 0 // no change in direction raindrops are pointing
      }
    }
  } else { // if page is not 0, executes snow code
    for (var i = 0; i < snow.length; i++) {
      snow[i].shape(); // calls the shape function w/in snow object
      if (keyIsPressed) {
        if (keyCode == LEFT_ARROW) {
          snow[i].moveL(); // calls function w/in snow object to move L
        } else if (keyCode == RIGHT_ARROW) {
          snow[i].moveR(); // calls function w/in snow object to move R
        }
      } else {
        snow[i].move(); // if arrow keys aren't pressed, snow goes down
      }
    }
  }
  if (mouseIsPressed && mouseX < (width / 2) + 50 && mouseX > (width / 2) - 50 && mouseY < (height - 60) && mouseY > (height - 90)) { // pressed while over button
    buttonNoHover();
  } else if (mouseX < (width / 2) + 50 && mouseX > (width / 2) - 50 && mouseY < (height - 60) && mouseY > (height - 90)) { // over button not pressed
    buttonHover();
  } else { // fill color when mouse isn't on button
    buttonNoHover();
  }
}

// draws button
function button() {
  noFill();
  rectMode(RADIUS)
  strokeWeight(3);
  rect(width / 2, height - 75, 100, 30); // button at center bottom
}

// modifies button for non-hover state
function buttonNoHover() {
  stroke(255);
  button();
  fill(255); // text fill
  textForButton();
}

// modifies button for hover state
function buttonHover() {
  stroke(244, 221, 8);
  button();
  fill(244, 221, 8);
  textForButton();
}

// draws text
function textForButton() {
  noStroke();
  textSize(30); // big text size
  textAlign(CENTER, CENTER); // uses center of text for positioning
  text("Switch", width / 2, height - 75); // sets text in button
}

// changes page between rain and snow
function mousePressed() {
  if (mouseX < (width / 2) + 50 && mouseX > (width / 2) - 50 && mouseY < (height - 60) && mouseY > (height - 90)) { // checks if mouse is within buttom dimensions
    page = 1 - page; // switches pages
  }
}