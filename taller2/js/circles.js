let num=50, d=150, frames=12;
let theta, ang =0;

function setup() 
{
  var myCanvas = createCanvas(1350, 650, WEBGL);
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
      translate(x-660, y-360);
      
      rotate(angle);
      let d2=d*1.7;
      rotateZ(radians(ang));
      arc(0, 0, d2, d2, 0, radians(5));
      
      noFill();
      stroke(0);  
      strokeWeight(20);
      pop();
      
      ang +=0.01;
    }
  }
  theta += (PI+PI)/frames;
  frames+=0.1
  //if (frameCount<=frames) saveFrame("image-###.gif");
}