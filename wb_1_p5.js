//PFont f;
let myFont;
let sphereRadius;

var canvas;

function preload() {
  try {
    myFont = loadFont('font/PlayfairDisplay-Medium.ttf');
  } catch (error) {
    console.error('Error loading font:', error);
  }
}

function windowResized() {
  console.log('resizing');
  resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
}

function centerCanvas() {
  if (canvas) {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    canvas.position(x, y);
  }
}

function setup() {
  
  canvas = createCanvas(windowWidth - 50, windowHeight - 50, WEBGL);
  centerCanvas();

  canvas.elt.style.position = "fixed";
  canvas.style('z-index', '-1');
  
  sphereRadius = width*0.115;
  
  textFont(myFont);
  //f = createFont("Helvetica",48,true);
  
  
  
}

function draw() {
  background(220);
  //rotateX(frameCount/360);
  noFill();
  stroke(1);
  strokeWeight(5);
  //push();
  rect(-width/2 + 10, -height/2 + 10, width - 20, height - 20);
  
  //rotate(mouseX);
  //rotateY((0.025 * (millis()/60)/2));
  //pop();


  spherical();
  stars();
  
  fill(40);
  textAlign(CENTER);
  textSize(width/12);
  //translate(width/2, height/2);
  text("WORLDBUILDER", 0, -(sphereRadius*1.25), 0);
  
  //text("WORLDBUILDER", 0, (sphereRadius*1.75), 0);
  //rotateY(2*PI/3);
  //rotateY(2*PI/3);
  textSize(width/35);
  //text("A Mandala Company", -(sphereRadius*3), -(width/50), width/5);
  textStyle(ITALIC);
  text("A mandala company.", -(width/10), -(windowWidth/12), width/2);
  
  textSize(width/30);
  //text("INTERNATIONAL HEAVENIZM", (sphereRadius*2), -(width/50), 100);
  //text("WORLDBUILDER", 0, 0, 150);
  
  
}

function stars() {
  //translate(0, 0);
  fill(0);
  noStroke();
  strokeWeight(random(5));
  //ellipse(random(-width, width), random(-height, height), random(15), random(15));
  
  
}

function spherical() {
  
  push();
  let radSec = 360 / 60 * second();
  rotateY((0.025 * (millis()/60)/2));
  //rotateX(frameCount/360);
  
  stroke(50);
  fill(20+millis());
  strokeWeight(1.25);
  noFill();
  //ellipse(0, 0, sphereRadius*1.56);
  
  //rotateX(PI/2);
  //ellipse(0, 0, sphereRadius*1.66);

  //rotateX(PI/3);
  //ellipse(0, 0, sphereRadius*1.36);

  //rotateX(PI/2);
  //ellipse(0, 0, sphereRadius*1.58);

  //rotateX(PI/4);
  //ellipse(0, 0, sphereRadius*1.58);

  //rotateX(PI/4);
  strokeWeight(0.75);
  sphere(sphereRadius*4);
  //translate(0, 50);
  //sphere(150);
  pop();
  
}
