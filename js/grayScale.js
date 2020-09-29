let img;
let w = 80;
var imgHTML = document.getElementById('imgGrayScale');
var flag = 0;

function preload() {
  img = loadImage('assets/arbol.jpeg');
}

function setup() {

  var imagen = createCanvas(imgHTML.width, imgHTML.height);
  imagen.parent('_imagen');
  img.loadPixels();

  // pixelDensity(1) for not scaling pixel density to display density
  // for more information, check the reference of pixelDensity()
  pixelDensity(1);
  noLoop();
  var a = select("#btnGrayScaleFilter");
  a.mousePressed(draw);
}

function draw() {

  var filter = document.getElementById('grayScalefilter').value;
  console.log(filter);

  switch (filter) {
    case 'Normal': 
      flag = 0;
      console.log("Normal");
      break;
    case 'Promedio': 
      flag = 1;
      console.log("Promedio");
      break;
    case 'Luma':
      flag = 2;
      console.log("Luma");
      break;
    default:
      console.log("otro");
  }
  const xstart = constrain(0, 0, img.width);
  const ystart = constrain(0, 0, img.height);

  edgeImg = createImage(img.width, img.height);
 if(flag != 0){
  edgeImg.loadPixels();
  // Begin our loop for every pixel in the smaller image
  for (let x = xstart; x < img.width; x++) {
    for (let y = ystart; y < img.height; y++) {
      
      let r = red(img.get(x,y));
      let b = blue(img.get(x,y));
      let g = green(img.get(x,y));
      let c;

      
      if(flag == 1){
        c = (r + b + g)/3;
      }
      else if(flag == 2){
        c = ((r*0.216) + (b*0.0722) + (g*0.715));
      }
      edgeImg.set(x, y, color(c));
    }
  }
  edgeImg.updatePixels();
  image(edgeImg, 0, 0, imgHTML.width, imgHTML.height);
 }
  else image(img, 0, 0, imgHTML.width, imgHTML.height);
}