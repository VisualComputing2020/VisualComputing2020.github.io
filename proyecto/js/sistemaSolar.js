let sol;
let cam;
const planetas = [];

let solTexture;
const texturas = [];

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
  planetas[1] = new Planeta(6, 80 + 107, -0.0035, texturas[1]);
  planetas[2] = new Planeta(6.3, 80 + 147, 0.0030, texturas[2]);
  planetas[3] = new Planeta(3.3, 80 + 221, 0.0024, texturas[3]);
  planetas[4] = new Planeta(69, 80 + 764, 0.0013, texturas[4]);
  planetas[5] = new Planeta(58, 80 + 1490, 0.0000, texturas[5]);
  planetas[6] = new Planeta(25, 80 + 2958, -0.0006, texturas[6]);
  planetas[7] = new Planeta(24, 80 + 4476, 0.0005, texturas[7]);
  planetas[8] = new Planeta(1.8, 80 + 4906, -0.0004, texturas[8]);
}

function draw() {
  background(0);
  ambientLight(255, 255, 255);
  pointLight(255, 255, 255, 0, 0, 0);
  
  sol.show();
  sol.orbit();
  for (let i = 0; i < planetas.length; i++) {
    planetas[i].show();
    planetas[i].orbit();
  }
}