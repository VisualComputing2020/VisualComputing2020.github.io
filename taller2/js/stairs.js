function setup() {
    var canva = createCanvas(800, 600, WEBGL)
    // canva.parent('stairs')
    cam = createCamera();
    cam.setPosition(-200, -430, -300);
    cam.lookAt(0, 0, 0);
    cam.ortho();

}

function draw() {
    background(250);

    setCamera(cam);
    orbitControl(1, 1, 0);
    ambientLight(200);
    fill('orange')

    translate(0, -150, 0)
    push();
    push();
    box(40, 40, 40);
    pop();

    translate(-40, -5, 0)
    push();
    box(40, 50, 40);
    pop();

    translate(-40, -5, 0)
    push();
    box(40, 60, 40);
    pop();

    translate(-40, -5, 0)
    push();
    box(40, 70, 40);
    pop();

    translate(-40, -5, 0)
    push();
    box(40, 80, 40);
    pop();

    translate(-40, -5, 0)
    push();
    box(40, 90, 40);
    pop();

    translate(0, -5, -40)
    push();
    box(40, 100, 40);
    pop();

    translate(0, -5, -40)
    push();
    box(40, 110, 40);
    pop();

    translate(0, -5, -40)
    push();
    box(40, 120, 40);
    pop();

    translate(0, -5, -40)
    push();
    box(40, 130, 40);
    pop();

    translate(0, -5, -40)
    push();
    box(40, 140, 40);
    pop();

    translate(0, -5, -40)
    push();
    box(40, 150, 40);
    pop();

    translate(40, -5, 0)
    push();
    box(40, 160, 40);
    pop();

    translate(40, -5, 0)
    push();
    box(40, 170, 40);
    pop();

    translate(40, -5, 0)
    push();
    box(40, 180, 40);
    pop();

    translate(0, -5, 40)
    push();
    box(40, 190, 40);
    pop();

    translate(0, -5, 40)
    push();
    box(40, 200, 40);
    pop();

}