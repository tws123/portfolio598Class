function setup() {
  createCanvas(500, 500);
  background(255, 255, 255);
  angleMode(DEGREES);
  
  // draw full arc / circle
  stroke(0);
  fill(245, 237, 237);
  arc(200, 35, 50, 50, 0, 360);
  noStroke();
  
  // draw red arc
  fill(255, 0, 0);
  arc(75, 15, 50, 50, 1, 89, CHORD);
  
  // draw pink arc
  fill(247, 193, 197);
  arc(45, 15, 50, 50, 100, 189);
  
  // draw purple arc
  fill(150, 11, 141);
  arc(100, 100, 50, 50, 180, 270);
  
  // draw light purple arc
  fill(214, 137, 214);
  arc(25, 100, 50, 50, 270, 360);
  
  //*******************************     
  
  
  // draw smile u  
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(150, 80, 50, 50, 1, 180);   
  
  //draw frown n   
  arc(250, 100, 50, 50, 180, 360);  
  
  
  //draw )    
  arc(325, 95, 50, 50, 270, 450 );     
  
  
  //draw  ( 
  arc(390, 95, 50, 50, 90, 270 );    
  
  //*******************************  
  
  noStroke();
  
  // draw light blue semi-circle    
  fill(0, 255, 234);
  arc(50, 180, 50, 50, 1, 180);
  
  // draw dark blue semi-circle    
  fill(35, 67, 194);
  arc(150, 180, 50, 50, 180, 360);
  
  //draw navy blue semi-circle    
  fill(9, 5, 69);
  arc(260, 180, 50, 50, 90, 270 );
  
  //draw turquoise semi-circle    
  fill(22, 227, 118);
  arc(335, 180, 50, 50, 270, 450 );    
  
  // draw bright green arc    
  fill(0, 255, 0);
  arc(55, 275, 50, 50, 90, 360);
  
  // draw brown arc    
  fill(87, 33, 9);
  arc(155, 275, 50, 50, 180, 450 );
  
  // draw orange arc    
  fill(255, 132, 0);
  arc(255, 275, 50, 50, 270, 540);
  
  // draw gray arc    
  fill(110, 122, 110);
  arc(355, 275, 50, 50, 360, 630);
  
  // draw Yellow arc
  fill(237, 245, 10);
  arc(55, 360, 50, 50, 40, 340);
  
  // draw khaki green circle
  fill(174, 179, 30);
  arc(155, 360, 50, 50, 210, 510);
  
  // draw dark pink arc    
  fill(237, 92, 116);
  arc(255, 360, 50, 50, 130, 420);
  
  // draw black arc    
  fill(9, 10, 9);
  arc(355, 360, 50, 50, -60, 240);
}