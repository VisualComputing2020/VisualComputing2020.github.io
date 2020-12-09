let sol;
let cam;
let moon;
let estadoCamara;

const radioSol = 80;
const planetas = [];
const nombres = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Pluton']
const distancias = [
  radioSol + 67,
  radioSol + 107,
  radioSol + 147,
  radioSol + 221,
  radioSol + 764,
  radioSol + 1490,
  radioSol + 1958,
  radioSol + 2476,
  radioSol + 2906
]

const radios = [2.4, 6, 6.3, 3.3, 69, 58, 25, 24, 1.18]

let solTexture;
const texturas = [];
let buttons = [];



let cameraPositionX = 0;
let cameraPositionY = 0;
let cameraPositionZ = 500;

// Because of the asynchronous nature of file loading in JavaScript, we
// have to load the images in p5.js' preload() instead of in setup().
function preload() {
  universo = loadImage('./js/data/universo.jpg')
  solTexture = loadImage('./js/data/sol1.jpg');
  texturas[0] = loadImage('./js/data/mercurio.jpg');
  texturas[1] = loadImage('./js/data/venus.jpg');
  texturas[2] = loadImage('./js/data/tierra.jpg');
  texturas[3] = loadImage('./js/data/marte.jpg');
  texturas[4] = loadImage('./js/data/jupiter.jpg');
  texturas[5] = loadImage('./js/data/saturno.jpg');
  texturas[6] = loadImage('./js/data/urano.jpg');
  texturas[7] = loadImage('./js/data/neptuno.jpg');
  texturas[8] = loadImage('./js/data/pluton.jpg');
  texturas[9] = loadImage('./js/data/luna.jpg')
}

function setup() {
  let canvas = createCanvas(windowWidth-50, windowHeight * 0.75, WEBGL);
  canvas.parent('proyecto')
  // Disable the context menu on the canvas so the camera can use the right mouse button
  canvas.elt.oncontextmenu = () => false;

  // cam = createEasyCam({ distance: cameraPos });

  cam = createCamera();
  // cam.setPosition(0, 0, cameraPos);
  cam.lookAt(0, 0, 0);
  // cam.ortho();

  camera = createCamera();
  setCamera(camera);

  orbitControl();
  sol = new Planeta(80, 0, 0, solTexture);
  // sol.spawnMoons(9, 1);
  planetas[0] = new Planeta(2.4, 80 + 67, 0.0048, texturas[0]);
  planetas[1] = new Planeta(6, 80 + 107, 0.0035, texturas[1]);
  planetas[2] = new Planeta(6.3, 80 + 147, 0.0030, texturas[2]);
  planetas[3] = new Planeta(3.3, 80 + 221, 0.0024, texturas[3]);
  planetas[4] = new Planeta(69, 80 + 764, 0.0013, texturas[4]);
  planetas[5] = new Planeta(58, 80 + 1490, 0.0006, texturas[5]);
  planetas[6] = new Planeta(25, 80 + 1958, 0.0007, texturas[6]);
  planetas[7] = new Planeta(24, 80 + 2476, 0.0005, texturas[7]);
  planetas[8] = new Planeta(1.8, 80 + 2906, 0.0004, texturas[8]);

  //Lunas
  planetas[2].addMoon(1.7, 3.8, 0.1, texturas[9]);
  
}

function draw() {
  background(0);
  
  // setCamera(cam);
  orbitControl();
  // console.log(cameraPos);
  // camera(500,500,cameraPos);

  // camera.lookAt(0, 0, 0);
  
  // camera.lookAt(0, 0, 0);
  // camera.setPosition(planetas[cameraPositionX].angle, cameraPositionY, cameraPositionZ);
  // camera.pan(planetas[cameraPositionX].angle);




  ambientLight(120);
  texture(universo)
  sphere(2000)
  // ambientMaterial(0);
  let z = 100;
  for (let i = 0; i < 2; i++) {
    z = -z;
    pointLight(255, 255, 255, -110, -110, z);
    pointLight(255, 255, 255, 110, -110, z);
    pointLight(255, 255, 255, 110, 110, z);
    pointLight(255, 255, 255, -110, 110, z);
  }
  noStroke();
  sol.show();
  //sol.orbit();
  for (let i = 0; i < planetas.length; i++) {
    planetas[i].show();
    planetas[i].orbit();
  }
  if(estadoCamara ==1){
    // console.log(planetas[cameraPositionZ], camera)
    // camera.setPosition(cameraPositionX+ sin(frameCount * 0.01)*360, cameraPositionY,cameraPositionZ+ sin(frameCount * 0.01)*360);
    // camera.setPosition(planetas[cameraPositionZ].angle, cameraPositionY, cameraPositionX);
    camera.setPosition(cameraPositionX, cameraPositionY, planetas[cameraPositionZ].angle);
    camera.move(planetas[cameraPositionZ].angle,0, planetas[cameraPositionZ].angle);
  }
}


function renderPlanet(txture, rotSpeed, orbSpeed, planetRad, transX, transY, tranZ, moonPlanet) {
  push()
  texture(txture);
  rotateY(radians(globalOrbSpeed * orbSpeed));
  translate(transX, transY, tranZ);
  rotateY(radians(globalRotSpeed * rotSpeed));
  sphere(planetRad, 100, 100);
  if (moonPlanet === true) {
    renderPlanet(imgMoon, -30, 18, 36, 220, 0, 0, false);
  }
  pop()
}


function keyTyped() {
  estadoCamara = 1;
  if (key === "h" || key === "H") {
    cameraPositionZ = 0;
    cameraPositionX = distancias[0]+3;
    document.getElementById('cameraPosition').innerHTML = nombres[0] + ". Radio: " + radios[0] + " mil km - Distancia: " + distancias[0] + " millones km";
  } else if (key === "v" || key === "V") {
    cameraPositionX = distancias[1];
    cameraPositionZ = 1;
    document.getElementById('cameraPosition').innerHTML = nombres[1] + ". Radio: " + radios[1] + " mil km - Distancia: " + distancias[1] + " millones km";
  } else if (key === "t" || key=="T") {
    cameraPositionX = distancias[2];
    cameraPositionZ = 2;
    document.getElementById('cameraPosition').innerHTML = nombres[2] + ". Radio: " + radios[2] + " mil km - Distancia: " + distancias[2] + " millones km";
  } else if (key === "m" || key === "M") {
    cameraPositionX = distancias[3];
    cameraPositionZ = 3;
    document.getElementById('cameraPosition').innerHTML = nombres[3] + ". Radio: " + radios[3] + " mil km - Distancia: " + distancias[3] + " millones km";
  } else if (key === "j" || key === "J") {
    cameraPositionX = distancias[4];
    cameraPositionZ = 4;
    document.getElementById('cameraPosition').innerHTML = nombres[4] + ". Radio: " + radios[4] + " mil km - Distancia: " + distancias[4] + " millones km";
  } else if (key === "s" || key === "S") {
    cameraPositionX = distancias[5];
    cameraPositionZ = 5;
    document.getElementById('cameraPosition').innerHTML = nombres[5] + ". Radio: " + radios[5] + " mil km - Distancia: " + distancias[5] + " millones km";
  } else if (key === "u"|| key === "U") {
    cameraPositionX = distancias[6];
    cameraPositionZ = 6;
    document.getElementById('cameraPosition').innerHTML = nombres[6] + ". Radio: " + radios[6] + " mil km - Distancia: " + distancias[6] + " millones km";
  } else if (key === "n"|| key === "N") {
    cameraPositionX = distancias[7];
    cameraPositionZ = 7;
    document.getElementById('cameraPosition').innerHTML = nombres[7] + ". Radio: " + radios[7] + " mil km - Distancia: " + distancias[7] + " millones km";
  } else if (key === "p"|| key === "P") {
    cameraPositionX = distancias[8];
    cameraPositionZ = 8;
    document.getElementById('cameraPosition').innerHTML = nombres[8] + ". Radio: " + radios[8] + " mil km - Distancia: " + distancias[8] + " millones km";
  } else {
    cameraPositionX = 500;
    cameraPositionZ = 0;
    document.getElementById('cameraPosition').innerHTML = 'Sistema solar';
  }
}