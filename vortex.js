var x = new Array(1000);
var dim = 50;
//store the canvas as a variable
var canvas;



let myFont;

function preload() {

}

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

  var r = random(255);
  var g = random(255);
  var b = random(255);

  canvas = createCanvas(windowWidth - 50, windowHeight - 50, WEBGL);
  centerCanvas();

  canvas.elt.style.position = "fixed";
  canvas.style('z-index', '-1');

  //background(random(255));
  background(255);

  fill(0);
  textAlign(CENTER, LEFT);
  textSize(100);



  for (var i = 0; i < x.length; i++) {
    x[i] = 0;
  }
}


function draw() {

  rotateZ(frameCount * 0.0005);


  for (var i = 0; i < x.length - 1; i += .4) {
    noStroke();

    stroke(10);

    fill(i / frameCount);


    ellipseMode(CENTER);



    stroke(i + 1 / 4, i + 20 / frameCount, i + 20);


    if (frameCount % 10) {
      noFill();
      if (mouseIsPressed) {

        //rect(frameCount/i - mouseX, frameCount/i - mouseY, width, height);

      }
      else {
        noStroke();
        noFill();
      }

      stroke(245 / frameCount * i);
      strokeWeight(random(.1 + frameCount / i));
      ellipse(random(width / 2), random(height) / 4, random(3));
    }

    if (mouseX >= width / 2) {


      noFill();

    }
    rotate(PI / 64 / frameCount / 1000);
    rotateZ(frameCount * .003);

    noFill();

  }


}
