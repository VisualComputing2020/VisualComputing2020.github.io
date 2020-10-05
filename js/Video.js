let fingers;
let frate = []
let count = 0;
let beginning = true;
let avg = 0;
let _fingers;

function setup() {
  let cnv = createCanvas(1200, 400, P2D);
  cnv.parent('VideoContainer');
  fingers = createVideo(['assets/gato-bailando-wiggle.mp4', 'assets/gato-bailando-wiggle.webm']);
  //fingers.hide(); 
  var a = select("#btnVideo");
  a.mousePressed(_action);
}

function draw() {
  background(250);
  image(fingers, 650, 20); // dibuja una segunda copia en el lienzo.
  filter(GRAY);
  image(fingers, 50, 20); // dibuja el cuadro del video en el lienzo.
  let fr = frameRate();
  frate[count] = fr;
  count++;
}

function _action() {
  fingers.loop(); // configurar el video para empezar a reproducirse en bucle
  if (beginning === true) {
    count = 0;
    fingers.play().time(0);
    beginning = false;
  } else {
    beginning = true;
    fingers.stop();
    for(let i = 0; i < frate.length; i++){
        avg+=frate[i];
    }
    avg /= frate.length;
    console.log(avg);
    textSize(15);
    textAlign(CENTER, CENTER);
    text(avg);
    avg = 0;
  }
}