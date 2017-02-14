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
  ambientLight(255, 0, 0); // red
  light += 0.05; // speed of directional light movement
  directionalLight(255, 100, 0, 0.1, -1, 0, sin(light / 2)); // (green, blue, opacity, x, y, z)
  directionalLight(0, 0, 200, 0.1, 1, 0, sin(light)); // (green, blue, opacity, x, y, z)

  translate(-325, -155, 0); // moves object from default center to corner
  if (page == 0) {
    for (i = 0; i < 5; i++) { // draws torus along x
      for (j = 0; j < 3; j++) { // draws torus along y
        push(); // new shift per each torus
        translate(i * xTrans, j * yTrans, zTrans); // draws torus in new location
        push(); // separate rotation per torus
        rotateX(frameCount * 0.01); // rotates along x axis
        torus(donutSize, donutSize / 2); // draws torus (radius, size of hole)
        pop(); // resets rotation
        pop(); // resets translation
      }
    }
  } else if (page == 1) {
    for (i = 0; i < 5; i++) { // draws torus along x
      for (j = 0; j < 3; j++) { // draws torus along y
        push(); // new shift per torus
        translate(i * xTrans, j * yTrans, zTrans); // draws torus in new location
        push(); // separate rotation per torus
        rotateY(frameCount * 0.01); // rotates torus along y axis
        torus(donutSize, donutSize / 2); // draws torus (radius, size of hole)
        pop(); // resets rotation
        pop(); // resets translation
      }
    }
  } else if (page == 2) {
    for (i = 0; i < 5; i++) { // draws torus along x
      for (j = 0; j < 3; j++) { // draws torus along y
        push(); // new shift per torus
        translate(i * xTrans, j * yTrans, zTrans); // draws taurus in new location
        push(); // separate rotation per torus
        rotateZ(frameCount * 0.01); // rotates torus along z axis
        rotateX(frameCount * 0.01); // rotates torus along x axis
        rotateY(frameCount * 0.01); // rotates torus along y axis
        torus(donutSize, donutSize / 2); // draws torus (radius, size of hole)
        pop(); // resets rotation
        pop(); // resets translation
      }
    }
  } else if (page == 3) {
    translate(+325, +155, 0); // moves objects back from top/L starting point to default center
    rotateX(frameCount * 0.01); // rotates exterior torus along x
    torus(donutSize * 3.5, (donutSize * 3.5) / 3.5); // draws largest torus (radius, size of hole)
    rotateY(frameCount * 0.01); // rotates torus along x axis
    torus(donutSize * 1.8, (donutSize * 1.8) / 2.8); // draws smaller torus (radius, size of hole)
    sphere(donutSize); // draws sphere in torus
  } else if (page == 4) {
    for (i = 0; i < 5; i++) { // torus along x
      for (j = 0; j < 3; j++) { // torus along y
        translate(+325, +155, 0); // moves starting objects back from top/L starting point to default center
        rotateZ(frameCount * 0.01);
        torus(donutSize, donutSize / 2); // draws torus (radius, size of hole)
      }
    }
  } else if (page == 5) {
    for (i = 0; i < 5; i++) { // sphere along x
      for (j = 0; j < 3; j++) { // sphere along y
        translate(+325, +155, 0); // moves starting point back to center 
        translate(i * xTrans, (j * yTrans)/10, zTrans - 300); // draws sphere in new location
        rotateZ(frameCount * 0.01);
        sphere(donutSize); // radius sphere
      }
    }
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