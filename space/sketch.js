// 800 × 818
var photo;
var photoWidth = 881;
var aspectRatio = 800 / 818;
var astro;

function preload() {
  photo = loadImage("nasaPic.jpg");
  // astro = loadModel("EMU.obj");
  // loadModel(path, normalize, successCallback, failureCallback);
}

function setup() {
  createCanvas(818, 800, WEBGL);

}

function draw() {
  background(0);
  image(photo, 0, 0);
  // scale(1);
  // model(astro);
}