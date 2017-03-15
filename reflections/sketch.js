/* This program is a class reflection on Class 598
Creative Computing. In it I answer the 7 class reflections
within the grading rubric. The program is very simple with 
questions, answers, images to support the content and a button
that cycles through the pages. 
Created by Tess
Last edited 3/15/17
*/
ind = 0; // holds index for array
var opacity = 86;
var w = 130; // height button
var h = 40; // width button
var yPos = 260; // val to subtract from height for various functions.
var marginTop = 150; // top margin
var marginSides = 100; // used on L side
var page = 0; // starting page
var questions = ["What was the best\nthing you learned?", "What was your biggest\ncontribution to the class?",
  "What were your strengths?", "What do you think you\nneed more practice with?",
  "What is something related\nto programming that you hope\nto explore more in the future?",
  "How are you planning to use\nwhat you learned in your future?",
  "If you could take the\nclass all over again knowing\nwhat you know now, what\nwould you do differently?"
]
var answers = ["I really enjoyed playing with 3D shapes using the WEBGL\nlibrary. With only a rudimentary understanding of coding,\none can make pretty impressive-looking sketches. While\n3D shapes were the most fun, for loops, else statements\nand arrays were the most useful.",
  "Coding can be anxiety-inducing for novices (like me) so I\nmade a concerted effort to help create a friendly, helpful,\nand collaborative environment by remaining positive and\nencouraging even when I was under a lot of stress.",
  "I'm PERSISTENT. Understanding coding syntax or logic isn't\neasy for me but I will work past the point of frustration into\nfeeling satisfaction with my achievements.",
  "EVERYTHING. I will need to practice basic coding structures and functions\nregularly or I will forget it all. In particular, I need to practice objects and\narrays. I understand both a little but I don’t fully understand the extent of\ntheir capabilities, or the appropriate contexts for their use. Also, I'm still a\nlittle foggy on when to use true and false booleans. We never did get\nto using strings so I'll want to explore using those.",
  "I would like to explore using programming within the context of Framer\nto increase the delight factor of animated prototypes. I'd also like to try\nmaking more datavis projects.",
  "Though, I’m now more equipped to understand developers'\noptions and constraints, converse with developer teams, and\nread basic programs and understand their logic, I suspect I\nwill use programming most often with prototyping. ",
  "If I were to take the class over again, I would\nprobably be less impulsive/creative in my choice\nof project topics and, instead, make an effort to\ncreate more professional portfolio pieces."
]

// preloads all the images
function preload() {
  img1 = loadImage('reflectionsImages/3Dimage.png');
  img2 = loadImage('reflectionsImages/codingTogether.png');
  img3 = loadImage('reflectionsImages/marilyn.png');
  img4 = loadImage('reflectionsImages/friedaGrid.png');
  img5 = loadImage('reflectionsImages/datavis.png');
  img6 = loadImage('reflectionsImages/chuckItWireframes.png');
  img7 = loadImage('reflectionsImages/monsterScreen.png');

  allImages = new Array(img1, img2, img3, img4, img5, img6, img7);

}

function setup() {
  createCanvas(1000, 800) // set canvas size


  //  textFont(font);           // choose fonts
  //  song.play();              // add mp3?
  //  song.setVolume(0.5);      // set the volume of the mp3
}

function draw() {
  background(0);

  if (page == 0) { // switches pages
    textQuestions(0); // draws the initial question

  } else if (page == 1) {
    mainImage(0, 1); // draws first image in array and changes y value to correct aspect ratio
    textQuestions(0); // questions remain
    textAnswers(0); // answer index 0

  } else if (page == 2) {
    textQuestions(1);

  } else if (page == 3) {
    mainImage(1, 1.5); // second image in array w/ changed aspect ratio
    textQuestions(1);
    textAnswers(1);

  } else if (page == 4) {
    textQuestions(2);

  } else if (page == 5) {
    mainImage(2, 1.25); // third image in array w/ altered aspect ratio
    textQuestions(2);
    textAnswers(2);

  } else if (page == 6) {
    textQuestions(3);

  } else if (page == 7) {
    mainImage(3, 1.25); // fouth image in array w/ altered aspect ratio
    textQuestions(3);
    textAnswers(3);

  } else if (page == 8) {
    textQuestions(4);

  } else if (page == 9) {
    push();
    scale(.89); // slightly smaller picture
    translate(+120, +80); // moved down and right
    mainImage(4, 1.25); // (index #, aspect ratio correction)
    pop();
    textQuestions(4);
    textAnswers(4);

  } else if (page == 10) {
    textQuestions(5);

  } else if (page == 11) {
    push();
    scale(2.75); // makes image bigger
    rotate(PI / 4); // rotates image
    mainImage(5, 0.8); // (index number, factor that changes aspect ratio)
    pop();
    textQuestions(5);
    textAnswers(5);

  } else if (page == 12) {
    textQuestions(6);

  } else if (page == 13) {
    mainImage(6);
    textQuestions(6);
    textAnswers(6);
  }
  button(width - marginSides - w, height - yPos); // places button over images
}

// main image on each page w/ tinting and opacity altered. 
function mainImage(x, y) {
  imageMode(CENTER); // places image from center
  tint(255, 70, 255, opacity); // (R,G,B,opacity)
  image(allImages[x], width / 2, height / 2, 1000 * y, 1000); // draws array of images w/ aspect correction var
}

// text questions
function textQuestions(x) {
  // button size and placement
  textAlign(LEFT, TOP); // question alignment
  noStroke(); // remove stroke from text
  fill(255); // title color
  textSize(50); // set text size
  text(questions[x], marginSides, marginTop); // create title
}

// draws text answers
function textAnswers(x) {
  textAlign(LEFT, TOP) // answer alignment
  noStroke(); // remove stroke from text
  fill(255); // title color
  textSize(16); // set text size
  text(answers[x], marginSides, height - yPos - 20); // create title

}

// draws Next button
function button(x, y) { // 
  rectMode(CENTER); // draws from center
  textSize(20); // font size for button
  textAlign(CENTER, CENTER); // centered on x and y axis of word


  // Determine if cursor is over button
  if (mouseIsPressed && mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2) {
    fill(150); // Fill color for pressed state
  } else if (mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2) {
    fill(200); // Fill color for hover state
  } else { // Fill color when mouse isn't on button
    fill(255);
  }

  rect(x, y, w, h);
  fill(0);
  text("Next", x, y);
}

// switch pages w/ mouse press
function mousePressed() { // button(width - marginSides - w, height/2);
  textAlign(CENTER, CENTER);
  if (mouseX > (width - marginSides - w) - w / 2 && mouseX < (width - marginSides - w) + w / 2 && mouseY > (height - yPos) - h / 2 && mouseY < (height - yPos) + h / 2) { // checks if mouse is within buttom dimensions
    page = (page + 1) % 14; //get next page
  }
}