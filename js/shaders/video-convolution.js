// in this sketch we're going to send the webcam to the shader and run different convolution kernels on the image
// kernel convolution is a process by which every pixel is multiplied by a matrix of values
// here's some more info about convolution http://setosa.io/ev/image-kernels/

// the shader variable
let imgShader;


let img;

var filter;
var x = 0;

let fingers;
let frate = []
let count = 0;
let beginning = true;
let avg = 0;
let _fingers;


function preload() {
    // load the shader


    imgBlur = loadShader('effect.vert', 'blur.frag');
    imgEmboss = loadShader('effect.vert', 'emboss.frag');
    imgOutline = loadShader('effect.vert', 'outline.frag');
    imgSharpen = loadShader('effect.vert', 'sharpen.frag')
}

function setup() {



    let cnv = createCanvas(1200, 400, WEBGL);
    cnv.parent('canva-video');
    noStroke();


    fingers = createVideo(['assets/gato-bailando-wiggle.mp4', 'assets/gato-bailando-wiggle.webm']);
    var a = select("#btnVideoShader");
    a.mousePressed(_action);

}

function draw() {

    background(250);
    image(fingers, 650, 20); 
    
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
function _action() {
    //fingers.loop(); 
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
      
      draw();
    }
  }