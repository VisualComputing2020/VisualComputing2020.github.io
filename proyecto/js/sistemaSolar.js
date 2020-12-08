let sol;
let cam;
let moon;
const planetas = [];

let solTexture;
const texturas = [];

// Because of the asynchronous nature of file loading in JavaScript, we
// have to load the images in p5.js' preload() instead of in setup().
function preload() {
  universo = loadImage('./js/data/universo.png')
  solTexture = loadImage('./js/data/sol3.jpg');
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
  let canvas = createCanvas(windowWidth, windowHeight*0.74, WEBGL);
  canvas.parent('proyecto')
  // Disable the context menu on the canvas so the camera can use the right mouse button
  canvas.elt.oncontextmenu = () => false;

  cam = createEasyCam({ distance: 500 });

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
  ambientLight(120);
  texture(universo)
  sphere(3200)
  ambientMaterial(0);
  let z = 100;
  for (let i = 0; i<2; i++) {
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
  
  //console.log(planetas[1]);
}


function renderPlanet(txture, rotSpeed, orbSpeed, planetRad, transX, transY, tranZ, moonPlanet) {
	push()
    texture(txture); 
    rotateY(radians(globalOrbSpeed*orbSpeed));
    translate(transX,transY,tranZ);
    rotateY(radians(globalRotSpeed*rotSpeed));
    sphere(planetRad, 100, 100);
    if (moonPlanet === true) {
    	renderPlanet(imgMoon, -30, 18, 36, 220,0,0,false);
    }
    pop()
}