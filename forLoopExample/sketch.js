function setup() {
  createCanvas(500, 500);
  strokeWeight(2);

  
  for(i = 0; i < 499; i = i + 10) {
    noFill();
    ellipse(250, 250, i, i);
  }
}


