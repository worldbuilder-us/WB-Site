var centerX;
var centerY;

var speed = 3;

var d =10;

function windowResized() {
  console.log('resizing');
  resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}


function setup() {

  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  centerCanvas();
  //canvas.position(0,0);
  canvas.elt.style.position = "fixed";
  canvas.style('z-index', '-1');
  //canvas.style('display', 'block');

   frameRate(30);
  centerX = width *.5;
  centerY = height *.5;
  noStroke();

}


function draw() {
/*
  var x = random(50);
  background(249);
  fill(0);
  ellipse(random(width), random(height), x);
  */
  background(249);
  stroke(0);
  strokeWeight(4);
  noFill();

  ellipse(centerX, centerY, d, d);
  ellipse(centerX, centerY, d/2, d/2);
  ellipse(centerX, centerY, d/4, d/4);

  d = d + speed;

  if (d > width || d < 10) {
    speed=-speed;
  }

}