var ang = 0;

function setup() {
  var myCanvas = createCanvas(1020, 800);
  myCanvas.parent("kanizsa");
}

function draw() {
  background("#EA899A");
  fill("#8C004B");

  push();
  translate(300, 200);
  
  rotate(HALF_PI + ang);
  arc(0, 0, 300, 300, PI, HALF_PI);
  pop();

  push();
  translate(700, 200);
  styleMedia = "crimson"
  rotate(HALF_PI * 2 - ang);
  arc(0, 0, 300, 300, PI, HALF_PI);
  pop();

  push();
  translate(700, 600);
  rotate(HALF_PI * 3 + ang);
  arc(0, 0, 300, 300, PI, HALF_PI);
  pop();

  push();
  translate(300, 600);
  rotate(HALF_PI * 4 - ang);
  arc(0, 0, 300, 300, PI, HALF_PI);
  pop();

  ang += 0.007;
}