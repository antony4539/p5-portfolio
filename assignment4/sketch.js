function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  colorMode(RGB);

  // 5초짜리 GIF 저장
  saveGif("abstract_animation", 5);
}

function draw() {

  // 배경 색 변화
  let bg1 = color(200, 240, 255);
  let bg2 = color(220, 230, 255);

  let bgColor = lerpColor(bg1, bg2, (sin(frameCount * 0.02) + 1) / 2);
  background(bgColor);

  // 배경 구름
  noStroke();

  fill(240, 220, 250, 100);
  ellipse(400, 100, 400, 200);

  fill(250, 230, 240, 120);
  ellipse(150, 80, 300, 150);

  // 건물
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

  // 작은 점들
  noStroke();
  fill(20, 20, 20, 200);

  circle(60, 300, 8);
  circle(110, 340, 10);
  circle(140, 310, 6);
  circle(90, 330, 7);
  circle(210, 290, 9);
  circle(280, 320, 11);
  circle(250, 260, 7);
  circle(310, 280, 8);
  circle(390, 330, 10);
  circle(440, 360, 9);
  circle(490, 310, 12);
  circle(530, 350, 8);

  // 꽃 움직임
  let moveY = sin(frameCount * 0.05) * 5;

  // 꽃 크기 변화
  let sizeChange = 1 + sin(frameCount * 0.05) * 0.05;

  push();
  translate(0, moveY);
  scale(sizeChange);

  // 꽃 색 변화
  let c1 = color(255, 220, 0, 200);
  let c2 = color(255, 170, 80, 200);

  let flowerColor = lerpColor(
    c1,
    c2,
    (sin(frameCount * 0.03) + 1) / 2
  );

  noStroke();

  fill(flowerColor);
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

  pop();

  // 줄기
  stroke(30, 110, 30);
  strokeWeight(4);

  line(150, 190 + moveY, 150, 260);
  line(120, 180 + moveY, 100, 240);

  line(380, 170 + moveY, 380, 240);
  line(340, 160 + moveY, 310, 210);

  // 잎
  noStroke();
  fill(60, 140, 60, 180);

  ellipse(140, 230, 30, 15);
  ellipse(160, 220, 25, 12);
  ellipse(370, 210, 20, 10);
  ellipse(400, 200, 25, 13);

  // 반짝이는 점
  let glow = 150 + sin(frameCount * 0.08) * 80;

  fill(255, 255, 120, glow);
  circle(500, 100, 8);

  fill(255, 240, 150, glow);
  circle(530, 130, 6);

  fill(255, 255, 100, glow);
  circle(470, 150, 7);

  fill(255, 220, 50, glow);
  circle(480, 80, 5);
  }