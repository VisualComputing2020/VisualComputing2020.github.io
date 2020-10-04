let fingers;
let frate = []
let count = 0;
let beginning = true;
let avg = 0;
let flag = 0;
let _fingers;

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
    const xstart = constrain(0, 0, img.width);
    const ystart = constrain(0, 0, img.height);
    _fingers.loadPixels();
    // Begin our loop for every pixel in the smaller image
    for (let x = xstart; x < img.width; x++) {
      for (let y = ystart; y < img.height; y++) {
        let c = convolution(x, y, matrix, 3, fingers);
  
        // retrieve the RGBA values from c and update pixels()
        let loc = (x + y * img.width) * 4;
        pixels[loc] = red(c);
        pixels[loc + 1] = green(c);
        pixels[loc + 2] = blue(c);
        pixels[loc + 3] = alpha(c);
  
        _fingers.set(x, y, color(c));
      }
    }
    _fingers.updatePixels();
    image(convolution(_fingers), 550, 10); // dibuja una segunda copia en el lienzo.
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