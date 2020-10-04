let fingers;
let frate = []
let count = 0;
let beginning = true;

function setup() {
  createCanvas(1100, 400);
  // especificar múltiples formatos para diferentes navegadores
  fingers = createVideo(['assets/gato-bailando-wiggle.mp4', 'assets/gato-bailando-wiggle.webm']);
  fingers.hide(); // por defecto el video aparece en un elemento dom separado.
  // escóndelo y dibújalo en el lienzo en vez de eso.
  frameRate(60);
}

function draw() {
  background(150);
  image(fingers, 550, 10); // dibuja una segunda copia en el lienzo.
  filter(GRAY);
  image(fingers, 10, 10); // dibuja el cuadro del video en el lienzo.
  let fr = frameRate();
  console.log(fr);
}

function mousePressed() {
  fingers.loop(); // configurar el video para empezar a reproducirse en bucle
  if (beginning === true) {
    fingers.play().time(0);
    beginning = false;
  } else {
    fingers.stop();
    beginning = true;
  }
}