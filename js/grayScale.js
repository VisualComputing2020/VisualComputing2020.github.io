let img, edgeImg_prom, edgeImg_luma;
let w = 80;
var imgHTML = document.getElementById('imgGrayScale');
var flag = 0;
var list = []

function preload() {
  img = loadImage('assets/otro_gatito.jpeg');
  //edgeImg_prom = createImage(img.width, img.height)
  //edgeImg_luma = createImage(img.width, img.height)
  //edgeImg_prom.loadPixels();
  //edgeImg_luma.loadPixels();
  //grayScale();
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
      image(img, 0, 0, imgHTML.width, imgHTML.height);
      console.log("Normal");
      break;
    case 'Promedio': 
      flag = 1;
      image(grayScale(1), 0, 0, imgHTML.width, imgHTML.height);
      console.log("Promedio");
      break;
    case 'Luma':
      flag = 2;
      image(grayScale(2), 0, 0, imgHTML.width, imgHTML.height);
      console.log("Luma");
      break;
    default:
      console.log("otro");
  }
}

function grayScale(value){
  
  const xstart = constrain(0, 0, img.width);
  const ystart = constrain(0, 0, img.height);

  edgeImg_prom = createImage(img.width, img.height)
  edgeImg_luma = createImage(img.width, img.height)
  edgeImg_prom.loadPixels();
  edgeImg_luma.loadPixels();
  // Begin our loop for every pixel in the smaller image
  for (let x = xstart; x < img.width; x++) {
    for (let y = ystart; y < img.height; y++) {
      
      let r = red(img.get(x,y));
      let b = blue(img.get(x,y));
      let g = green(img.get(x,y));
      let prom_c, luma_c;
      prom_c = (r + b + g)/3;
      edgeImg_prom.set(x, y, color(prom_c));
      luma_c = ((r*0.216) + (b*0.0722) + (g*0.715));
      edgeImg_luma.set(x, y, color(luma_c));
    }
  }
  edgeImg_prom.updatePixels();
  edgeImg_luma.updatePixels();

  if(value == 1){
    return edgeImg_prom;
  }
  if(value == 2){
    return edgeImg_luma;
  }
}