/* Last modified 2/31/17
by Tess Wolfe-Stelzer.
This project maps several American hate group datasets to coordinates on a map.
The map is a static image generated from mapbox w/ lat long coordinates.
Different hate groups populate the map when the mouse is clicked.
There are many redundancies in this project due to my not quite understanding how variable
scope works. For example, all of the color variables, the lat long variable, and the variables
used to map each data set would not work as global variables. I tried placing them 
in several different areas where they could be reused and they didn't work. I left
some unnecessary redundancies in place so that it's easier for me, after I learn how
variable scope works, to consolidate code. I look forward to recommendations for improvement.
The mapping was inspired by Daniel Shiffman #57 https://www.youtube.com/watch?v=ZiYdOwOrGyc&t=1536s
I admit I have a less than perfect understanding of his recommendations w/r/t 
translating the mercator formula. 
*/

//  takes a static image generated from mapbox and places in canvas.
var zoom = 3.2; // should match mapBox zoom amount
var centerLat = 38.611812; // center lat
var centerLong = -96.585321; // center long
var categoryText = ["Total United States Hate Groups 2014", "Anti-Immigrant Hate Groups", "Anti-Muslim Hate Groups", "Anti-LGBT Hate Groups", "White Identity Hate Groups", "Other Hate Groups"];
var page = []; // makes the pages an array
var opac = 50; // opacity for shapes
var e = 10; // ellipse size

// preloads map and .csv files to avoid delay
function preload() {
  mapImage = loadImage("https://api.mapbox.com/styles/v1/tws123/cizkitvng00052rpe7w4sztri/static/-96.585321,38.611812,3.2,0.00,0.00/1024x512?access_token=pk.eyJ1IjoidHdzMTIzIiwiYSI6ImNpemtheWRxOTAzZmwyeG55dThtbTQxOWwifQ.2S2FiBoKZH5GBgS2Cae4JQ");
  allGroups = loadStrings("allHateGroups.csv");
  antiImm = loadStrings("antiImmigrant.csv");
  antiMus = loadStrings("antiMuslim.csv");
  antiLGBT = loadStrings("antiLGBT.csv");
  whiteID = loadStrings("whiteIdentity.csv");
  otherH = loadStrings("otherHate.csv");

}

function setup() {
  createCanvas(850, 450);
}

function draw() {

  if (page == 0) {
    drawImage(); // redraws map so previous data not shown
    textTop(0); // title box
    textBottom(); // instruction text
    push(); // isolates mapping translation
    translate(width / 2, height / 2); // moves origin from top left to center
    mapAll(); // function for mapping all the points
    pop();
  } else if (page == 1) {
    drawImage(); // redraws map so previous data not shown
    textTop(1); // title box
    textBottom(); // instruction text
    push();  // isolates mapping translation
    translate(width / 2, height / 2); // moves origin from top left to center
    mapImm(); // function for mapping anti-immigrant
    pop();
  } else if (page == 2) {
    drawImage(); // redraws map so previous data not shown
    textTop(2); // title box
    textBottom(); // instruction text
    push();
    translate(width / 2, height / 2); // moves origin from top left to center
    mapMus(); // function for mapping anti-muslim
    pop();
  } else if (page == 3) {
    drawImage(); // redraws map so previous data not shown
    textTop(3); // title box
    textBottom(); // instruction text
    push(); // isolates mapping instruction
    translate(width / 2, height / 2); // moves origin from top left to center
    mapLGBT();
    pop();
  } else if (page == 4) {
    drawImage();  // redraws map so previous data not shown
    textTop(4); // title box
    textBottom(); // instruction text
    push(); // isolates mapping instruction
    translate(width / 2, height / 2); // moves origin from top left to center
    mapWhiteID(); // function for mapping white identity 
    pop();
  } else if (page == 5) {
    drawImage(); // redraws map so previous data not shown
    textTop(5); // title box
    textBottom(); // instruction text
    push(); // isolates mapping instruction
    translate(width / 2, height / 2); // moves origin from top left to center
    mapOther(); // maps other groups
    pop();
  }

  //background(0);
}

// draws the map
function drawImage() {
  push();
  translate(width / 2, height / 2); // moves origin from top left to center
  imageMode(CENTER); // places the image from center point
  image(mapImage); // draws map image
  pop();
}

// takes in long value and generates x location by translating long to WebMercator projection via formula
// here https://en.wikipedia.org/wiki/Web_Mercator. Formula is broken into parts 
function mercatorX(long) {
  long = radians(long); // converts degrees long to radians
  var a = (256 / PI) * pow(2, zoom); // formula part 1: (half size of tile square/PI) *2(raised to the power of zoom)
  var b = (long + PI); // formula part 1: longitude + PI
  return a * b; // combines parts
}

// take in lat val and generates y location by translating lat to WebMercator projection via formula
// here https://en.wikipedia.org/wiki/Web_Mercator. Formula is broken into parts to make easier to understand 
function mercatorY(lat) {
  lat = radians(lat); // converts lat to radians
  var a = (256 / PI) * pow(2, zoom); // [formula part 1
  var b = tan(PI / 4 + lat / 2); // formula part 2
  var c = PI - log(b); // formula part 3 
  return a * c; // combines parts
}

// top title text and box
function textTop(x) {
  //translate(width / 2, height / 2);
  noStroke();
  rectMode(CENTER);
  fill(20, 20, 20, (opac / 2))
  rect(width / 2, 40, width / 2.5, 40)
  textAlign(CENTER); // text at center
  textSize(26); // text size
  noStroke();
  push();
  fill(80, 100, 100); // text 
  text(categoryText[x], width / 2, 48); // text that will show up
  pop();
}

// bottom text instructions
function textBottom() {
  textAlign(CENTER); // text at center
  textSize(18); // text size
  noStroke();
  fill(80, 100, 100, (opac * 2)); // text 
  text("click mouse to change data", width / 2, height - 40); // text that will show up
}

// maps all hate data to lat long cordinates 
function mapAll() {
  var groupCategory = [allGroups, antiImm, antiMus, antiLGBT, whiteID, otherH];
  var o = color(244, 164, 66, (opac * 2)); // orange
  var cx = mercatorX(centerLong); // translates center long, using Merc projection function, into center x value
  var cy = mercatorY(centerLat); // translates center lat, using Merc projection function, into center y value

  for (var i = 0; i < groupCategory[0].length; i++) {
    var data = groupCategory[0][i].split(/,/); // this "regular expression" matches comma separated indices
    //console.log(data); // shows array in console
    var lat = data[4]; // lat is second index in set starting 0, 1, 2
    var long = data[5]; // long is third index in set starting 0, 1, 2, 3
    var x = mercatorX(long) - cx; // positions data point long relative to center long
    var y = mercatorY(lat) - cy; //  positions data point lat relative to center lat
    noStroke();
    fill(o);
    ellipse(x, y, e, e);
  }
}

// maps anti-immigrant data to lat long coordinates
function mapImm() {
  var groupCategory = [allGroups, antiImm, antiMus, antiLGBT, whiteID, otherH];
  var g = color(14, 140, 28, (opac * 2)); // green
  var cx = mercatorX(centerLong); // translates center long, using Merc projection function, into center x value
  var cy = mercatorY(centerLat); // translates center lat, using Merc projection function, into center y value
  for (var i = 0; i < groupCategory[1].length; i++) {
    var data = groupCategory[1][i].split(/,/); // this "regular expression" matches comma separated indices
    var lat = data[4]; // lat is second index in set starting 0, 1, 2
    var long = data[5]; // long is third index in set starting 0, 1, 2, 3
    var x = mercatorX(long) - cx; // positions data point long relative to center long
    var y = mercatorY(lat) - cy; //  positions data point lat relative to center lat
    noStroke();
    fill(g);
    ellipse(x, y, e, e);
  }
}

// maps anti-muslim data to lat long coordinates
function mapMus() {
  var groupCategory = [allGroups, antiImm, antiMus, antiLGBT, whiteID, otherH];
  var b = color(38, 69, 173, (opac * 2)); // blue
  var cx = mercatorX(centerLong); // translates center long, using Merc projection function, into center x value
  var cy = mercatorY(centerLat); // translates center lat, using Merc projection function, into center y value
  for (var i = 0; i < groupCategory[2].length; i++) {
    var data = groupCategory[2][i].split(/,/); // this "regular expression" matches comma separated indices
    var lat = data[4]; // lat is second index in set starting 0, 1, 2
    var long = data[5]; // long is third index in set starting 0, 1, 2, 3
    var x = mercatorX(long) - cx; // positions data point long relative to center long
    var y = mercatorY(lat) - cy; //  positions data point lat relative to center lat
    noStroke();
    fill(b);
    ellipse(x, y, e, e);
  }
}

// maps anti-LGBT data to lat long coordinates
function mapLGBT() {
  var groupCategory = [allGroups, antiImm, antiMus, antiLGBT, whiteID, otherH];
  var p = color(242, 29, 231, (opac * 2)) // pink
  var r = color(211, 39, 12, (opac * 2)); // red
  var cx = mercatorX(centerLong); // translates center long, using Merc projection function, into center x value
  var cy = mercatorY(centerLat); // translates center lat, using Merc projection function, into center y value
  for (var i = 0; i < groupCategory[3].length; i++) {
    var data = groupCategory[3][i].split(/,/); // this "regular expression" matches comma separated indices
    var lat = data[4]; // lat is second index in set starting 0, 1, 2
    var long = data[5]; // long is third index in set starting 0, 1, 2, 3
    var x = mercatorX(long) - cx; // positions data point long relative to center long
    var y = mercatorY(lat) - cy; //  positions data point lat relative to center lat
    noStroke();
    fill(p);
    ellipse(x, y, e, e);
  }
}

// maps white identity data to lat long coordinates
function mapWhiteID() {
  var groupCategory = [allGroups, antiImm, antiMus, antiLGBT, whiteID, otherH];
  var r = color(211, 39, 12, (opac * 2)); // red
  var cx = mercatorX(centerLong); // translates center long, using Merc projection function, into center x value
  var cy = mercatorY(centerLat); // translates center lat, using Merc projection function, into center y value
  for (var i = 0; i < groupCategory[4].length; i++) {
    var data = groupCategory[4][i].split(/,/); // this "regular expression" matches comma separated indices
    var lat = data[4]; // lat is second index in set starting 0, 1, 2
    var long = data[5]; // long is third index in set starting 0, 1, 2, 3
    var x = mercatorX(long) - cx; // positions data point long relative to center long
    var y = mercatorY(lat) - cy; //  positions data point lat relative to center lat
    noStroke();
    fill(r);
    ellipse(x, y, e, e);
  }
}

// maps other hate data to lat long coordinates
function mapOther() {
  var groupCategory = [allGroups, antiImm, antiMus, antiLGBT, whiteID, otherH];
  var yel = color(219, 219, 30, (opac * 3)); // yellow
  var cx = mercatorX(centerLong); // translates center long, using Merc projection function, into center x value
  var cy = mercatorY(centerLat); // translates center lat, using Merc projection function, into center y value
  for (var i = 0; i < groupCategory[5].length; i++) {
    var data = groupCategory[5][i].split(/,/); // this "regular expression" matches comma separated indices
    var lat = data[4]; // lat is second index in set starting 0, 1, 2
    var long = data[5]; // long is third index in set starting 0, 1, 2, 3
    var x = mercatorX(long) - cx; // positions data point long relative to center long
    var y = mercatorY(lat) - cy; //  positions data point lat relative to center lat
    noStroke();
    fill(yel);
    ellipse(x, y, e, e);
  }
}

// changes page with mouse click
function mousePressed() {
  //page = 1 - page;
  page = (page + 1) % 6; //get next photo
}
