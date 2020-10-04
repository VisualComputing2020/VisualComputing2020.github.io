// in this sketch we're going to send the webcam to the shader and run different convolution kernels on the image
// kernel convolution is a process by which every pixel is multiplied by a matrix of values
// here's some more info about convolution http://setosa.io/ev/image-kernels/

// the shader variable
let imgShader;

// the camera variable
let img;

function preload(){
  // load the shader
  imgShader = loadShader('effect.vert', 'effect.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  var canva = createCanvas(windowWidth, windowHeight, WEBGL);
  canva.parent('canva-shader');
  noStroke();

  // initialize the webcam at the window size
  /*cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);

  // hide the html element that createCapture adds to the screen
  cam.hide();
*/
  img = loadImage('assets/gatito.jpeg');
}

function draw() {  
  // shader() sets the active shader with our shader
  shader(imgShader);

  // lets just send the cam to our shader as a uniform
  imgShader.setUniform('tex0', img);
  
  // the size of one pixel on the screen
  imgShader.setUniform('stepSize', [1.0/width, 1.0/height]);

  // how far away to sample from the current pixel
  // 1 is 1 pixel away
  imgShader.setUniform('dist', 3.0);

  // rect gives us some geometry on the screen
  rect(0,0,width, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}