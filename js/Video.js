let fingers;
let frate = []
let count = 0;
let beginning = true;
let avg = 0;
let flag = 1;

function setup() {
  createCanvas(1100, 800);
  // especificar múltiples formatos para diferentes navegadores
  fingers = createVideo(['assets/gato-bailando-wiggle.mp4', 'assets/gato-bailando-wiggle.webm']);
  fingers.hide(); // por defecto el video aparece en un elemento dom separado.
  // escóndelo y dibújalo en el lienzo en vez de eso.
}

function draw() {
  background(150);
  if(flag == 0){  
    image(fingers, 550, 10); // dibuja una segunda copia en el lienzo.
    filter(GRAY);
  } 
  else if(flag == 1){  
    image(convolution(fingers), 550, 10); // dibuja una segunda copia en el lienzo.
  } 
  image(fingers, 10, 10); // dibuja el cuadro del video en el lienzo.
  let fr = frameRate();
  frate[count] = fr;
  count++;
}

function mousePressed() {
  fingers.loop(); // configurar el video para empezar a reproducirse en bucle
  if (beginning === true) {
      count = 0;
    fingers.play().time(0);
    beginning = false;
  } else {
    fingers.stop();
    beginning = true;
    for(let i = 0; i < frate.length; i++){
        avg+=frate[i];
    }
    avg /= frate.length;
    console.log(avg);
    avg = 0;
  }
}