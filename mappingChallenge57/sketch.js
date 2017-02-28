/* Last modified 2/31/17
by Tess Wolfe-Stelzer.
This project maps several American hate group datasets to coordinates on a map.
Inspired by Daniel Shiffman #57 https://www.youtube.com/watch?v=ZiYdOwOrGyc&t=1536s
*/



var mapImage;
var zoom = 3.2; // should match mapBox zoom amount
var centerLat = 38.611812; // center lat
var centerLong = -96.585321; // center long
var page = [];

// 47.6062° N, 122.3321° W Seattle lat/long in degrees
//var lat = 38.611812 // mapboxlat
//var long = -96.585321 // mapboxlong
//var hateGroups;
var categoryText = ["Total United States Hate Groups 2014", "Anti-Immigrant Hate Groups", "Anti-Muslim Hate Groups", "Anti-LGBT Hate Groups", "White Identity Hate Groups", "Other Hate Groups"];



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
  createCanvas(1024, 512);
  push();
  translate(width / 2, height / 2); // moves origin from top left to center
  imageMode(CENTER); // places the image from center point
  image(mapImage); // draws map image
  var groupCategory = [allGroups, antiImm, antiMus, antiLGBT, whiteID, otherH];
  var o = color(244, 164, 66); // orange
  var r = color(211, 39, 12); // red
  var g = color(14, 140, 28); // green
  var b = color(38, 69, 173); // blue
  var iconColor = [o, r, g, b];
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
    fill(g);
    ellipse(x, y, 5, 5);
  }
  pop();
  textTop();
}

function draw() {
  //background(0);


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

function mapAll() {
  
  
  
  
  
  
}
// top text
function textTop() {
  noStroke();
  rectMode(CENTER);
  fill(10, 10, 10, 30)
  rect(width / 2, 40, width / 2, 40)
  textAlign(CENTER); // text at center
  textSize(26); // text size
  noStroke();
  fill(80, 100, 100); // text 
  text(categoryText[5], width / 2, 48); // text that will show up
}