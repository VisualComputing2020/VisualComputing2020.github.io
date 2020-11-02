var divHTML = document.getElementById('stairsCol');

function setup() {
    var canva = createCanvas(windowWidth-50, 400, WEBGL)
    canva.parent('stairs')
    cam = createCamera();
    cam.setPosition(-270, -430, -270);
    cam.lookAt(0, 0, 0);
    cam.ortho();

}

function draw() {
    background(255);

    setCamera(cam);
    orbitControl(1, 1, 0);
    fill('rgba(46,155,129,0.95)')

    translate(0, -100, 90)
    push();
    box(30, 60, 30);
    pop();

    translate(-30, -2.5, 0)
    push();
    box(30, 65, 30);
    pop();

    translate(-30, -2.5, 0)
    push();
    box(30, 70, 30);
    pop();

    translate(-30, -2.5, 0)
    push();
    box(30, 75, 30);
    pop();

    translate(-30, -2.5, 0)
    push();
    box(30, 80, 30);
    pop();

    translate(-30, -2.5, 0)
    push();
    box(30, 85, 30);
    pop();

    translate(0, -2.5, -30)
    push();
    box(30, 90, 30);
    pop();

    translate(0, -2.5, -30)
    push();
    box(30, 95, 30);
    pop();

    translate(0, -2.5, -30)
    push();
    box(30, 100, 30);
    pop();

    translate(0, -2.5, -30)
    push();
    box(30, 105, 30);
    pop();

    translate(0, -2.5, -30)
    push();
    box(30, 110, 30);
    pop();

    translate(0, -2.5, -30)
    push();
    box(30, 115, 30);
    pop();

    translate(30, -2.5, 0)
    push();
    box(30, 120, 30);
    pop();

    translate(30, -2.5, 0)
    push();
    box(30, 125, 30);
    pop();

    translate(30, -2.5, 0)
    push();
    box(30, 130, 30);
    pop();

    translate(0, -50, 30)
    push();
    box(30, 45, 30);
    pop();

    translate(0, -2.5, 30)
    push();
    box(30, 50, 30);
    pop();
  
  translate(0, -2.5, 30)
    push();
    box(30, 55, 30);
    pop();

}