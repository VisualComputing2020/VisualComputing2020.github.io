let sliderGroup = [];
let sliderName = ["X", "Y"]
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;

function setup() {
    var myCanvas = createCanvas(windowWidth - 20, 400, WEBGL);
    myCanvas.parent("ambientLight");

    for (var i = 0; i < 2; i++) {
        sliderGroup[i] = createSlider(-200, 200, -200);
        h = map(i, 0, 6, 5, 85);
        sliderGroup[i].position(10, height + h);
        sliderGroup[i].style('width', '80px');
    }
}

function draw() {
    background(255);
    X = sliderGroup[0].value();
    Y = sliderGroup[1].value();

    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;

    camera(locX, locY, 400, 0, 0, 0, 0, 1, 0);
    pointLight(255, 0, 0, X, Y, 0);
    box(200);

    translate(X, Y, 0)
    cone(10, 10);
}
