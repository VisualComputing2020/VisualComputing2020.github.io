let fingers;

function setup() {
  createCanvas(1100, 400);
  // especificar múltiples formatos para diferentes navegadores
  fingers = createVideo(['assets/gato-bailando-wiggle.mp4', 'assets/gato-bailando-wiggle.webm']);
  fingers.hide(); // por defecto el video aparece en un elemento dom separado.
  // escóndelo y dibújalo en el lienzo en vez de eso.
}

function draw() {
  background(150);
  image(fingers, 10, 10); // dibuja el cuadro del video en el lienzo.
  filter(GRAY);
  image(fingers, 550, 10); // dibuja una segunda copia en el lienzo.
}

function mousePressed() {
  fingers.loop(); // configurar el video para empezar a reproducirse en bucle
}