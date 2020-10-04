let fingers;
let frate = []
let count = 0;
let beginning = true;
let avg = 0;
let _fingers;

function setup() {
  //let cnv = createCanvas(1200, 400, P2D);
  //cnv.parent('VideoContainer');
  fingers = createVideo(['assets/gato-bailando-wiggle.mp4', 'assets/gato-bailando-wiggle.webm']);
  //fingers.hide(); 
}

function draw() {
  background(250);
  image(fingers, 600, 20); // dibuja una segunda copia en el lienzo.
  filter(GRAY);
  //image(fingers, 50, 20); // dibuja el cuadro del video en el lienzo.
  let fr = frameRate();
  frate[count] = fr;
  count++;
  var a = select("#btnVideo");
  a.mousePressed(butonPressed());
  noLoop();
}

function butonPressed() {
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