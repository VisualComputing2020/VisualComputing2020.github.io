let img, edgeImg_prom, edgeImg_luma, p, l;
let w = 80;
var imgHTML = document.getElementById('imgGrayScale');
var flag = 0;
var list = []
var lightness;



function setup() {
  img = loadImage('assets/otro_gatito.jpeg');
  var imagen = createCanvas(imgHTML.width, imgHTML.height);
  imagen.parent('_imagen');
  img.loadPixels();

  // pixelDensity(1) for not scaling pixel density to display density
  // for more information, check the reference of pixelDensity()
  pixelDensity(1);
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
      noLoop();
      break;
    case 'Promedio': 
      flag = 1;
      image(grayScale(1), 0, 0, imgHTML.width, imgHTML.height);
      console.log("Promedio");
      noLoop();
      break;
    case 'Luma':
      flag = 2;
      image(grayScale(2), 0, 0, imgHTML.width, imgHTML.height);
      console.log("Luma");
      noLoop();
      break;
    default:
      console.log("No válido");
  }
}

function grayScale(value){
  
  //const xstart = constrain(0, 0, img.width);
  //const ystart = constrain(0, 0, img.height);

  edgeImg_prom = createImage(img.width, img.height)
  //edgeImg_luma = createImage(img.width, img.height)
  loadPixels();
  edgeImg_prom.loadPixels();
  //edgeImg_luma.loadPixels();
  
  /*for (let x = xstart; x < img.width; x++) {
    for (let y = ystart; y < img.height; y=y+2) {
      
      let r = red(img.get(x,y));
      let b = blue(img.get(x,y));
      let g = green(img.get(x,y));
      let prom_c, luma_c;
      prom_c = (r + b + g)/3;
      edgeImg_prom.set(x, y, color(prom_c));
      luma_c = ((r*0.216) + (b*0.0722) + (g*0.715));
      edgeImg_luma.set(x, y, color(luma_c));
    }
  }*/

  for (let y = 0; y < img.height; y++) {
		for (let x = 0; x < img.width; x++){ 
			let index = (x+y*width)*4; // Posicion del pixel
            let r=img.pixels[index+0]; // Componente Red
            let g=img.pixels[index+1]; // Componente Green
            let b=img.pixels[index+2]; // Componente Blue
            let a=img.pixels[index+3]; // Componente Alpha
			
			if (value===1){
				let I=(r+g+b)/3; // Promedio de los tres componentes
				lightness = I;
				title = 'RGB';
			} else if (value===2){ // Promedio ponderado de RGB con corrección gamma (Luma)
				let Y601= 0.2989*r + 0.5870*g + 0.1140*b; // SDTV
				lightness = Y601;
				title = 'LUMA ';
			} 
						            
			edgeImg_prom.pixels[index+0] = lightness;
			edgeImg_prom.pixels[index+1] = lightness;
			edgeImg_prom.pixels[index+2] = lightness;
			edgeImg_prom.pixels[index+3] = a;
			
			if (value===0){ // Imagen original
				edgeImg_prom.pixels[index+0] = r;
				edgeImg_prom.pixels[index+1] = g;
				edgeImg_prom.pixels[index+2] = b;
				edgeImg_prom.pixels[index+3] = a;
				title = 'IMAGEN ORIGINAL';
			}
		}
	}
	updatePixels();
  edgeImg_prom.updatePixels();
  //edgeImg_luma.updatePixels();

    return edgeImg_prom;
}