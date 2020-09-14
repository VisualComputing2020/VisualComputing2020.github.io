color red = color(255,0,0);
color green = color(0,255,0);
color blue = color(0,0,255);
PGraphics pg, pgC;
PImage img;

void setup(){
  size(1200,450);
  //frameRate(10);
  img = loadImage("/assets/img/Unal.jpg");
  pg = createGraphics(img.width,img.height);
  pg.beginDraw();
  pg.image(img,0,0);
  pg.endDraw();
  pgC = createGraphics(img.width,img.height);
  pgC.beginDraw();
  pgC.image(img,0,0);
  pgC.endDraw();
  
}

void draw(){
  background(255,255,255);
  PImage imagen = createImage(img.width,img.height, RGB);
  imagen.loadPixels();
  pgC.loadPixels();
  float[][] imgR = new float[pgC.width][pgC.height];
  float[][] imgG = new float[pgC.width][pgC.height];
  float[][] imgB = new float[pgC.width][pgC.height];
  int[][] imgMN = new int[pgC.width][pgC.height];
  for(int i = 0; i < pgC.width; i++){
    for(int j = 0; j < pgC.height; j++){
      for(int ik = -1; ik <= 1; ik++){
        for(int jk = -1; jk <= 1; jk++){
          int xpos = i + ik;
          int ypos = j + jk;
          
          float redc = red(img.get(xpos,ypos));
          float greenc = green(img.get(xpos,ypos));
          float bluec = blue(img.get(xpos,ypos));
          imgR[i][j] = redc;
          imgG[i][j] = greenc;
          imgB[i][j] = bluec;
          
        }
      }
    }
  }
  float pixel_colorR;
  float pixel_colorG;
  float pixel_colorB;
  int[][] bottomSobel = {{-2,-1,0},{-1,1,1},{0,1,2}};
  for(int i = 0; i < pgC.width; i++){
    for(int j = 0; j < pgC.height; j++){
      if(i==0||i==pgC.width-1||j==0||j==pgC.height-1){
        pixel_colorR = 0;
        pixel_colorG = 0;
        pixel_colorB = 0;
      }
      else{
        pixel_colorR = (imgR[i-1][j-1]*bottomSobel[0][0]) + 
                      (imgR[i][j-1]*bottomSobel[0][1]) +
                      (imgR[i+1][j-1]*bottomSobel[0][2]) +
                      (imgR[i-1][j]*bottomSobel[1][0]) +
                      (imgR[i][j]*bottomSobel[1][1]) +
                      (imgR[i+1][j]*bottomSobel[1][2]) +
                      (imgR[i-1][j+1]*bottomSobel[2][0]) +
                      (imgR[i][j+1]*bottomSobel[2][1]) +
                      (imgR[i+1][j+1]*bottomSobel[2][2]);
           
        pixel_colorG = (imgG[i-1][j-1]*bottomSobel[0][0]) + 
                      (imgG[i][j-1]*bottomSobel[0][1]) +
                      (imgG[i+1][j-1]*bottomSobel[0][2]) +
                      (imgG[i-1][j]*bottomSobel[1][0]) +
                      (imgG[i][j]*bottomSobel[1][1]) +
                      (imgG[i+1][j]*bottomSobel[1][2]) +
                      (imgG[i-1][j+1]*bottomSobel[2][0]) +
                      (imgG[i][j+1]*bottomSobel[2][1]) +
                      (imgG[i+1][j+1]*bottomSobel[2][2]);
           
        pixel_colorB = (imgB[i-1][j-1]*bottomSobel[0][0]) + 
                      (imgB[i][j-1]*bottomSobel[0][1]) +
                      (imgB[i+1][j-1]*bottomSobel[0][2]) +
                      (imgB[i-1][j]*bottomSobel[1][0]) +
                      (imgB[i][j]*bottomSobel[1][1]) +
                      (imgB[i+1][j]*bottomSobel[1][2]) +
                      (imgB[i-1][j+1]*bottomSobel[2][0]) +
                      (imgB[i][j+1]*bottomSobel[2][1]) +
                      (imgB[i+1][j+1]*bottomSobel[2][2]);
      }      
      imgMN[i][j] = color((int)pixel_colorR, (int)pixel_colorG, (int)pixel_colorB);
      imagen.set(i,j,imgMN[i][j]);
    }
  }
  // Falta volver la matriz un vector y pasarlo al arreglo principal
  int[] imgC = pgC.pixels;
  for(int i = 0; i < pgC.width; i++){
    for(int j = 0; j < pgC.height; j++){
      imgC[i] = imgMN[i][j];
    }
  }
  imagen.updatePixels();
  pgC.updatePixels();
  image(pg,50,50);
  image(imagen,600,50);
} 