var ang = 0;

function setup() {
  var myCanvas = createCanvas(1420, 800);
  myCanvas.parent("kanizsa");
}

function draw() {
  background("#EA899A");
  fill("#8C004B");

  push();
  translate(480, 200);
  rotate(HALF_PI + ang);
  arc(0, 0, 300, 300, PI, HALF_PI);
  pop();

  push();
  translate(880, 200);
  styleMedia = "crimson"
  rotate(HALF_PI * 2 - ang);
  arc(0, 0, 300, 300, PI, HALF_PI);
  pop();

  push();
  translate(880, 600);
  rotate(HALF_PI * 3 + ang);
  arc(0, 0, 300, 300, PI, HALF_PI);
  pop();

  push();
  translate(480, 600);
  rotate(HALF_PI * 4 - ang);
  arc(0, 0, 300, 300, PI, HALF_PI);
  pop();

  ang += 0.007;
}