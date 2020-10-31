let num=50, d=100, frames=120;
let theta;

function setup() 
{
  var myCanvas = createCanvas(540, 540);
  myCanvas.parent("circles");
  blendMode(SCREEN);
  stroke(255);
  noStroke();
  fill(255);
  //noFill();
}

function draw() 
{
  background(0);
  for (let j=0; j<3; j++) {
    if (j==0) fill(255,0,0);
    if (j==1) fill(0,255,0);
    if (j==2) fill(0,0,255);
    for (let i=0; i<num; i++) {
        let angle = TWO_PI/num*i;
        let x = width/2 + j*5 + cos(angle)*d;
        let y = height/2 + sin(angle)*d;
      push();
      translate(x, y);
      rotate(theta+angle);
      let d2=d*1.5;
      arc(0, 0, d2, d2, 0, radians(5));
      pop();
    }
  }
  theta += TWO_PI/frames;
  //if (frameCount<=frames) saveFrame("image-###.gif");
}