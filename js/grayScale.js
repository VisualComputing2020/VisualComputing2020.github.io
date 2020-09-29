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
    case 'Promedio': 
      flag = 0;
      console.log("Promedio");
      break;
    case 'Luma':
      flag = 1;
      console.log("Luma");
      break;
    default:
      console.log("otro");
  }

  print(flag);

  const xstart = constrain(0, 0, img.width);
  const ystart = constrain(0, 0, img.height);
  const xend = constrain(img.width, 0, img.width);
  const yend = constrain(img.height, 0, img.height);
  const matrixsize = 3;

  edgeImg = createImage(img.width, img.height);
  edgeImg.loadPixels();
  // Begin our loop for every pixel in the smaller image
  for (let x = xstart; x < img.width; x++) {
    for (let y = ystart; y < img.height; y++) {
      let loc = (x + y * img.width) * 4;
      let r = pixels[loc];
      let b = pixels[loc];
      let g = pixels[loc];

      if(flag == 0){
        let c = (r + b + g)/3;
      }
      else if(flag == 1){
        let c = ((r*0.216) + (b*0.0722) + (g*0.715));
      }
      edgeImg.set(x, y, color(c));
    }
  }
  
  edgeImg.updatePixels();
  image(edgeImg, 0, 0, imgHTML.width, imgHTML.height);
}


function convolution(x, y, matrix, matrixsize, img) {
  let rtotal = 0.0;
  let gtotal = 0.0;
  let btotal = 0.0;
  const offset = Math.floor(matrixsize / 2);
  for (let i = 0; i < matrixsize; i++) {
    for (let j = 0; j < matrixsize; j++) {

      // What pixel are we testing
      const xloc = (x + i - offset);
      const yloc = (y + j - offset);
      let loc = (xloc + img.width * yloc) * 4;

      // Make sure we haven't walked off our image, we could do better here
      loc = constrain(loc, 0, img.pixels.length - 1);
      // Calculate the convolution
      // retrieve RGB values
      rtotal += (img.pixels[loc]) * matrix[i][j];
      gtotal += (img.pixels[loc + 1]) * matrix[i][j];
      btotal += (img.pixels[loc + 2]) * matrix[i][j];
    }
  }
  // Make sure RGB is within range
  rtotal = constrain(rtotal, 0, 255);
  gtotal = constrain(gtotal, 0, 255);
  btotal = constrain(btotal, 0, 255);

  // Return the resulting color
  return color(rtotal, gtotal, btotal);
}
