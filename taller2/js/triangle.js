function setup() {
    var canva = createCanvas(windowWidth - 50, 400, WEBGL)
    canva.parent('triangle')
    cam = createCamera();
    cam.setPosition(-180, 180, 180);
    cam.lookAt(0, 0, 0);
    cam.ortho();
}

function draw() {
    background(250);
    setCamera(cam);
    orbitControl(1, 0, 0);
    orbitControl(1, 1, 0);
    fill('rgba(46,155,129,0.95)')

    translate(0, -150, 0)
    push();
    box(30, 30, 30)
    pop();

    translate(0, 40, 0)
    push();
    box(30, 30, 30)
    pop();

    translate(0, 40, 0)
    push();
    box(30, 30, 30)
    pop();

    translate(0, 40, 0)
    push();
    box(30, 30, 30)
    pop();

    translate(0, 40, 0)
    push();
    box(30, 30, 30)
    pop();

    translate(0, 0, 40)
    push();
    box(30, 30, 30)
    pop();
    
    translate(0, 0, 40)
    push();
    box(30, 30, 30)
    pop();

    translate(0, 0, 40)
    push();
    box(30, 30, 30)
    pop();

    translate(0, 0, 40)
    push();
    box(30, 30, 30)
    pop();

    translate(-40, 0, 0)
    push();
    box(30, 30, 30)
    pop();

    translate(-40, 0, 0)
    push();
    box(30, 30, 30)
    pop();

    translate(-40, 0, 0)
    push();
    box(30, 30, 30)
    pop();

    translate(-40, 0, 0)
    push();
    box(30, 30, 30)
    pop();
}