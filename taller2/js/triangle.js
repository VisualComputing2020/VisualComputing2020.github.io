function setup() {
    createCanvas(800,600,WEBGL)
    cam = createCamera();
    cam.setPosition(180,180,180);
    cam.lookAt(0,0,0);
    cam.ortho();
}

function draw() {
    background(250);
    setCamera(cam);
    orbitControl(1,0,0);
    

    translate(0,-150,0)
    push();
    box(40,40,40);
    pop();

    translate(0,40,0)
    push();
    box(40,40,40);
    pop();

    translate(0,40,0)
    push();
    box(40,40,40);
    pop();

    translate(0,40,0)
    push();
    box(40,40,40);
    pop();

    translate(0,40,0)
    push();
    box(40,40,40);
    pop();
  
  translate(0,0,40)
    push();
    box(40,40,40);
    pop();
  translate(0,0,40)
    push();
    box(40,40,40);
    pop();
  translate(0,0,40)
    push();
    box(40,40,40);
    pop();
  translate(0,0,40)
    push();
    box(40,40,40);
    pop();
  
    translate(-40,0,0)
    push();
    box(40,40,40);
    pop();
  
  translate(-40,0,0)
    push();
    box(40,40,40);
    pop();
  translate(-40,0,0)
    push();
    box(40,40,40);
    pop();
  
translate(-40,0,20)
    push();
    plane(40);
    pop();
}