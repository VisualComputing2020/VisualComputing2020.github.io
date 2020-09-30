
let img;
let w = 80;
var imgHTML = document.getElementById('imgConvolution');



// It's possible to convolve the image with many different 
// matrices to produce different effects. This is a high-pass 
// filter; it accentuates the edges. 
var matrix = [[0.0625, 0.125, 0.0625],
[0.125, 0.25, 0.125],
[0.0625, 0.125, 0.0625]];

function preload() {
  img = loadImage('assets/flor.jpg');

}

function setup() {

  var blur = createCanvas(imgHTML.width, imgHTML.height);
  blur.parent('blur');
  img.loadPixels();

  // pixelDensity(1) for not scaling pixel density to display density
  // for more information, check the reference of pixelDensity()
  pixelDensity(1);
  noLoop();
  var a = select("#btnFilter");
  a.mousePressed(draw);
}

function draw() {

  var filter = document.getElementById('filter').value;
  console.log(filter);

  switch (filter) {
    case 'Blur':
      matrix = [[0.0625, 0.125, 0.0625],
      [0.125, 0.25, 0.125],
      [0.0625, 0.125, 0.0625]];
      console.log("blur");
      break;
    case 'Emboss':
      matrix = [[-2, -1, 0],
      [-1, 1, 1],
      [0, 1, 2]];
      console.log("Emboss");
      break;
    case 'Outline':
      matrix = [[-1, -1, -1],
      [-1, 8, -1],
      [-1, -1, -1]];
      console.log("Outline");
      break;
    case 'Sharpen':
      matrix = [[0, -1, 0],
      [-1, 5, -1],
      [0, -1, 0]];
      console.log("Sharpen");
      break;
    case 'Identity':
      matrix = [[0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]];
      console.log("Sharpen");
      break;
    default:
      console.log("otro");
  }


  // We're only going to process a portion of the image
  // so let's set the whole image as the background first

  // Calculate the small rectangle we will process
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
      let c = convolution(x, y, matrix, matrixsize, img);

      // retrieve the RGBA values from c and update pixels()
      let loc = (x + y * img.width) * 4;
      pixels[loc] = red(c);
      pixels[loc + 1] = green(c);
      pixels[loc + 2] = blue(c);
      pixels[loc + 3] = alpha(c);

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

