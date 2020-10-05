// in this sketch we're going to send the webcam to the shader and run different convolution kernels on the image
// kernel convolution is a process by which every pixel is multiplied by a matrix of values
// here's some more info about convolution http://setosa.io/ev/image-kernels/

// the shader variable
let imgShader;


let img;

var filter;
var x = 0;

function preload() {
  // load the shader


  imgBlur = loadShader('effect.vert', 'blur.frag');
  imgEmboss = loadShader('effect.vert', 'emboss.frag');
  imgOutline = loadShader('effect.vert', 'outline.frag');
  imgSharpen = loadShader('effect.vert', 'sharpen.frag')
}

function setup() {



  let imgHTML = document.getElementById('imgConvolution');
  img = loadImage('assets/gatito.jpeg');
  // shaders require WEBGL mode to work
  var canva = createCanvas(imgHTML.width, imgHTML.height, WEBGL);
  canva.parent('canva');
  noStroke();



}

function draw() {


  console.log('holi');
  frameRate(1);
  // shader() sets the active shader with our shader


  if (x === 0) {
    shader(imgBlur);
  }
  if (x === 1) {
    shader(imgEmboss);
  }
  if (x === 2) {
    shader(imgOutline);
  }
  if (x === 3) {
    shader(imgSharpen);
  }


  // lets just send the cam to our shader as a uniform
  imgBlur.setUniform('tex0', img);
  imgEmboss.setUniform('tex0', img);
  imgOutline.setUniform('tex0', img);
  imgSharpen.setUniform('tex0', img);

  

  // the size of one pixel on the screen
  imgBlur.setUniform('stepSize', [1.0 / width, 1.0 / height]);
  imgEmboss.setUniform('stepSize', [1.0 / width, 1.0 / height]);
  imgOutline.setUniform('stepSize', [1.0 / width, 1.0 / height]);
  imgSharpen.setUniform('stepSize', [1.0 / width, 1.0 / height]);
  

  // how far away to sample from the current pixel
  // 1 is 1 pixel away
  imgBlur.setUniform('dist', 3.0);
  

  // rect gives us some geometry on the screen
  rect(0, 0, width, height);
}

function keyTyped(){
  if (key === "e") {
    x = 1;
  } else if (key === "o") {
    x = 2;
  } else if (key === "s") {
    x = 3;
  } else if (key === "b") {
    x = 0;
  }
}