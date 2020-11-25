let angle = 0
function setup() {
    var myCanvas = createCanvas(1349, 500, WEBGL);
    myCanvas.parent("combine");
    noStroke();
  }
  
  function draw() {

    directionalLight(90, 250, 40, -1, 0, 0);

    background(0);
    shininess(20);
    ambientLight(50);
    specularColor(255, 0, 0);
    pointLight(255, 0, 0, 0, -100, 50);
    specularColor(0, 255, 0);
    pointLight(0, 255, 0, 0, 100, 50);
    specularMaterial(255);
    rotateY(angle);
    rotateX(angle*1.6);
    rotateZ(angle*1.4);
    angle += 0.002
    box(110);
    pop();
  


  }