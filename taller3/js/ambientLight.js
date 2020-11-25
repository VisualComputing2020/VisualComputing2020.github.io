let angle = 0
function setup() {
  var myCanvas = createCanvas(1349, 300, WEBGL);
  myCanvas.parent("ambientLight");
  noStroke();
}

function draw() {
  background(0);
  
  // ambient light
   ambientLight(0, 255/4, 0);
   
  
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2

  // blue directional light from the left
  directionalLight(100, 255, 50, -1, 0, -1);

  // calculate distance from center to mouseX
  let lightX = mouseX - width / 2;
  let lightY = mouseY - height / 2;
  
  // red spotlight
  // axis located at lightX, lightY, 500
  // axis direction of light: 0, 0, -1
  spotLight(255, 255, 0, lightX, lightY, 100, 0, 0, -1);

  rotateY(angle);
  rotateX(angle*1.6);
  rotateZ(angle*1.4);
  angle += 0.002
  box(110);
  pop();
  
}
