/* created by Tess Wolfe-Stelzer
last edited 2/11/17
This program draws a matrix of 3D torus shapes
that rotate differently when the mouse is pressed. Since 3D
forms have no positional values the translate() transformation
was used instead. A direction light highlights the 3D shape.
Directional light code adapted from p5js.org examples.
 */

var xTrans = 160; // holds the variable for x transformation
var yTrans = 160; // holds the variable for the y transformation
var zTrans = -20; // holds the variable for the z transformation
var donutSize = 50; // holds variable for torus radius
//var page = 0; // sets page to be displayed
var light = 1; // directional light var
var page = []; // array for pages
//var p = 0;


function setup() {
  background(200);
  createCanvas(850, 500, WEBGL);
  // textFont("Work Sans"). No 2D text available w/ WEBGL at this time

}

function draw() {
  background(212, 232, 85); // chartreuse
  // textTop();
  ambientLight(255, 0, 0); // red
  directionalLight(255, 100, 0, 0.1, -1, 0, sin(light / 2)); // (green, blue, opacity, x, y, z)
  directionalLight(0, 0, 200, 0.1, 1, 0, sin(light)); // (green, blue, opacity, x, y, z)
  light += 0.025;
  translate(-325, -155, 0); // moves object from center to corner
  if (page == 0) {
    for (i = 0; i < 5; i++) { // donuts along x
      for (j = 0; j < 3; j++) { // donuts along y
        push(); // new shift per each donut
        translate(i * xTrans, j * yTrans, zTrans); // draws donut in new location
        push(); // separate rotation per donut
        rotateX(frameCount * 0.01);
        torus(donutSize, donutSize / 2); // radius, size of whole
        pop(); // resets rotation
        pop(); // resets translation
      }
    }
  } else if (page == 1) {
    for (i = 0; i < 5; i++) { // donuts along x
      for (j = 0; j < 3; j++) { // donuts along y
        push(); // new shift per donut
        translate(i * xTrans, j * yTrans, zTrans); // draws donut in new location
        push(); // separate rotation per donut
        rotateY(frameCount * 0.01); // rotates donuts along y axis
        torus(donutSize, donutSize / 2); // radius, size of whole
        pop(); // resets rotation
        pop(); // resets translation
      }
    }
  } else if (page == 2) {
    for (i = 0; i < 5; i++) { // donuts along x
      for (j = 0; j < 3; j++) { // donuts along y
        push(); // new shift per donut
        translate(i * xTrans, j * yTrans, zTrans); // draws donut in new location
        push(); // separate rotation per donut
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01); // rotates donuts along x axis
        torus(donutSize, donutSize / 2); // radius, size of whole
        pop(); // resets rotation
        pop(); // resets translation
      }
    }
  } else if (page == 5) {
    for (i = 0; i < 5; i++) { // donuts along x
      for (j = 0; j < 3; j++) { // donuts along y
        translate(+325, +155, 0); // moves object from center to corner
        translate(i * xTrans, j * yTrans, zTrans - 300); // draws donut in new location
        rotateZ(frameCount * 0.01);
        torus(donutSize, donutSize / 2); // radius, size of whole
      }
    }
  } else if (page == 4) {
    for (i = 0; i < 5; i++) { // donuts along x
      for (j = 0; j < 3; j++) { // donuts along y
        translate(+325, +155, 0); // moves object from center to corner
        //translate(i * xTrans, j * yTrans, zTrans - 300); // draws donut in new location
        rotateZ(frameCount * 0.01);
        torus(donutSize, donutSize / 2); // radius, size of whole
      }
    }
  } else if (page == 3) {
    translate(+325, +155, 0); // moves object from center to corner
    rotateX(frameCount * 0.01);
    torus(donutSize * 3.5, (donutSize * 3.5) / 3.5); // radius, size of whole
    rotateY(frameCount * 0.01); // rotates donuts along x axis
    //rotateZ(frameCount * 0.01);
    torus(donutSize * 1.8, (donutSize * 1.8) / 2.8); // radius, size of whole
    sphere(donutSize);
  }
}

// changes page with mouse click
function mousePressed() {
  //page = 1 - page;
  page = (page + 1) % 6; //get next photo
}

// // top text. No 2D text available w/ WEBGL at this time
// function textTop() {
//   textAlign(CENTER); // text at center
//   textSize(16); // text size
//   noStroke();
//   fill(255, 100, 0); // text 
//   text("press mouse to switch rotation", width / 2, 75, 0); // text that will show up
// }