function setup() {
  createCanvas(500, 500);

}

function draw() {
  // horizontal gradient
  // for (i = 0; i < 500; i++) {
  //   stroke(i * 0.5);
  // line(i, 0, i, 500);
  // }
  // vertical gradient
  for (i = 0; i < 500; i++) {
    stroke(i * 0.5); // page is 500 but color limit is 255. 
    line(0, i, 500, i);
  }
}