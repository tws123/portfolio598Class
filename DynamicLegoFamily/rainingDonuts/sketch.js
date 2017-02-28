//set up array for snowflakes
var snow = [];


// make snowflakes
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (var i = 0; i < 4; i++) {
    snow[i] = {
      x: random(0, windowWidth),
      y: random(0, windowHeight),
      size: random(20, 40),
      speed: random(0.2, 0.5),
      shape: function() {
        translate(-width / 2, -height / 2, 0);
        translate(this.x, this.y, 0);
        //fill(230);
        torus(this.size, this.size/2);
      },
      move: function() {
        this.x = (this.x + this.speed) % windowWidth;
        this.y = (this.y + this.speed) % windowHeight;
      }
    }
  }
}

function draw() {
  background(0);
  var dirY = (mouseY / height - 0.5) * 2;
  var dirX = (mouseX / width - 0.5) * 2;
  directionalLight(255, 255, 255, dirX, -dirY, 0.25);
  //ambientMaterial(250, 250, 100);


  for (var i = 0; i < snow.length; i++) {
    //translate(-width / 2, -height / 2, 0); //moves our drawing origin to the top left corner
    snow[i].move();
    snow[i].shape();
  }

}