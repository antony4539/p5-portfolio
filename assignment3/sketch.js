let beanieR = 100;
let beanieG = 100;
let beanieB = 150;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240, 248, 255);

  let headY = sin(frameCount * 0.05) * 3;
  let pupilX = (mouseX - 300) * 0.02;
  let pupilY = (mouseY - 190) * 0.02;

  stroke(0);
  strokeWeight(2);
  
  //  몸통 
  fill(160);
  rect(150, 320, 50, 100, 10);
  rect(400, 320, 50, 100, 10);

  fill(0, 0, 128);
  rect(130, 300, 80, 60, 15);
  rect(390, 300, 80, 60, 15);
  rect(190, 300, 220, 150, 20);

  fill(255, 218, 185);
  rect(280, 250, 40, 60);
  
  fill(200); 
  stroke(100);
  strokeWeight(2);
  arc(300, 308, 40, 15, HALF_PI, PI);
  arc(300, 308, 40, 15, 0, HALF_PI);
  fill(200);
  noStroke();
  ellipse(300, 315, 12, 12);

  //  머리 
  stroke(0);

  fill(255, 218, 185);
  ellipse(215, 180 + headY, 20, 40);
  ellipse(385, 180 + headY, 20, 40);

  ellipse(300, 180 + headY, 160, 200);

  fill(50);
  noStroke();
  triangle(240, 130 + headY, 255, 160 + headY, 270, 130 + headY);
  triangle(265, 130 + headY, 285, 165 + headY, 305, 130 + headY);
  triangle(295, 130 + headY, 315, 160 + headY, 335, 130 + headY);
  triangle(330, 130 + headY, 345, 155 + headY, 360, 130 + headY);

  fill(beanieR, beanieG, beanieB); 
  stroke(0);
  strokeWeight(2);
  arc(300, 135 + headY, 160, 110, PI, TWO_PI, CHORD);
  ellipse(300, 135 + headY, 160, 25);
  
  strokeWeight(1);
  line(260, 125 + headY, 260, 145 + headY);
  line(280, 125 + headY, 280, 145 + headY);
  line(300, 125 + headY, 300, 145 + headY);
  line(320, 125 + headY, 320, 145 + headY);
  line(340, 125 + headY, 340, 145 + headY);

  stroke(0);
  strokeWeight(4);
  line(250, 165 + headY, 280, 170 + headY);
  line(350, 165 + headY, 320, 170 + headY);

  if (mouseIsPressed) {
    strokeWeight(2);
    noFill();
    arc(265, 190 + headY, 15, 10, PI, TWO_PI);
    arc(335, 190 + headY, 15, 10, PI, TWO_PI);
    
    fill(255, 100, 100);
    arc(300, 255 + headY, 50, 50, 0, PI, CHORD);
  } else {
    strokeWeight(2); 
    fill(0);
    ellipse(265 + pupilX, 190 + headY + pupilY, 12, 12);
    ellipse(335 + pupilX, 190 + headY + pupilY, 12, 12);
    
    fill(255, 100, 100);
    arc(300, 255 + headY, 50, 30, 0, PI, CHORD);
  }

  noFill();
  strokeWeight(2);
  arc(300, 220 + headY, 20, 20, 0, PI);
}

function keyPressed() {
  if (key === 'g' || key === 'G') {
    
    saveGif('character.gif', 5);
  } else if (key === ' ') {
    beanieR = random(50, 255);
    beanieG = random(50, 255);
    beanieB = random(50, 255);
  }
}