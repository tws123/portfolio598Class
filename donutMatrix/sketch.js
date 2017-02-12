/* created by Tess Wolfe-Stelzer
last edited 2/11/17
This program draws a matrix of 3D torus shapes
that rotate differently when the space bar is pressed. Since 3D
forms have no positional values the translate() transformation
was used instead. A direction light highlights the 3D shape.
Directional light code adapted from p5js.org examples.
 */

var xTrans = 160; // holds the variable for x transformation
var yTrans = 160; // holds the variable for the y transformation
var zTrans = -20; // holds the variable for the z transformation
var donutSize = 50; // holds variable for torus radius
var page = 0; // sets page to be displayed
var light = 1; // directional light var


function setup() {
  background(200);
  createCanvas(850, 500, WEBGL);

}

function draw() {
  background(212, 232, 85); // chartreuse
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
        rotateX(frameCount * 0.01); // rotates donuts along x axis
        torus(donutSize, donutSize / 2); // radius, size of whole
        pop(); // resets rotation
        pop(); // resets translation
      }
    }
  } else {
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
  }
}

// changes page with mouse click
function mousePressed() {
  page = 1 - page;
}