function setup() {
  createCanvas(600, 400);


  rectMode(CENTER);
}

function draw() {
  background(200, 240, 255); 

  noStroke();
  fill(240, 220, 250, 100); 
  ellipse(400, 100, 400, 200);
  fill(250, 230, 240, 120); 
  ellipse(150, 80, 300, 150);


  stroke(30); 
  strokeWeight(3);
  
  fill(50, 50, 55); 
  rect(100, 320, 160, 110); 
  
  fill(60, 60, 65);
  rect(260, 300, 190, 130); 
  
  fill(45, 45, 50);
  rect(450, 340, 200, 140);
  fill(70, 70, 75);
  quad(380, 350, 550, 330, 580, 390, 400, 400); 


  noStroke(); 
  fill(20, 20, 20, 200); 
  
  circle(60, 300, 8); circle(110, 340, 10);
  circle(140, 310, 6); circle(90, 330, 7);
  circle(210, 290, 9); circle(280, 320, 11);
  circle(250, 260, 7); circle(310, 280, 8);
  circle(390, 330, 10); circle(440, 360, 9);
  circle(490, 310, 12); circle(530, 350, 8);

  noStroke(); 
  

  fill(255, 220, 0, 200);
  ellipse(150, 190, 220, 100); 
  ellipse(380, 170, 240, 110);
  

  fill(255, 240, 100, 220);
  circle(120, 180, 60);
  circle(180, 200, 50);
  circle(340, 160, 70);
  circle(430, 180, 65);
  

  fill(255, 230, 0); 
  circle(230, 210, 30);
  circle(300, 210, 25);
  circle(480, 210, 35);


  stroke(30, 110, 30); 
  strokeWeight(4);
  
  line(150, 190, 150, 260); 
  line(120, 180, 100, 240);
  line(380, 170, 380, 240);
  line(340, 160, 310, 210);
  
  noStroke();
  fill(60, 140, 60, 180);
  ellipse(140, 230, 30, 15);
  ellipse(160, 220, 25, 12);
  ellipse(370, 210, 20, 10);
  ellipse(400, 200, 25, 13);
  
  
  fill(255, 255, 120); circle(500, 100, 8);
  fill(255, 240, 150); circle(530, 130, 6);
  fill(255, 255, 100); circle(470, 150, 7);
  fill(255, 220, 50); circle(480, 80, 5);
}