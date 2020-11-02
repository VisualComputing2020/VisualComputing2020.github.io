let angle =0;
let flag;

function setup(){
    var myCanvas = createCanvas(950, 650, WEBGL);
    myCanvas.parent("spirals");
    blendMode(SCREEN);
    fill(0,15,30);
}

function draw(){
    background(255);
    let x = 250;
    let dia = 20;
    let num = 100;
    translate(width/6, 0);
    if(flag==1){
        push();
        for(let i = 0; i<num; i++){
            scale(-0.95);
            rotate(radians(angle));
            ellipse(x,0,dia,dia);
        }
        pop();
        angle+=0.1;
    }
    if(flag ==2){
        push();
        for(let i = 0; i<num; i++){
            scale(-0.95);
            rotateZ(-radians(angle));
            ellipse(x,0,dia,dia);
        }
        pop();
      angle+=0.1;
    }

    if(flag ==3){
        push();
        for(let i = 0; i<num; i++){
            scale(-0.95);
            rotateZ(-radians(angle));
            ellipse(x,0,dia,dia);
        }
        pop();

        push();
        for(let i = 0; i<num; i++){
            scale(-0.95);
            rotate(radians(angle));
            ellipse(x,0,dia,dia);
        }
        pop();
    }
    angle+=0.05;
}

function keyTyped() {
    if (key === '1') {
      flag = 1;
    } else if (key === '2') {
      flag = 2;
    } else if (key === '3') {
        flag = 3;
    } else if (key === '0') {
    }
    // uncomment to prevent any default behavior
    // return false;
  }

  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      angle = 0.001;
    } else if (keyCode === RIGHT_ARROW) {
        angle = 0.001;
    }
  }
    /*
    
    
    for(let a=0; a<360;a+=22.5){
      rotateZ(radians(a));
      translate(x-660, y-360);
      push();
      for(let i = 0; i<num; i++){
          scale(0.95);
          rotateZ(radians(angle));
          ellipse(x,0,dia,dia);
      }
      pop();
      
      push();
      for(let i = 0; i<num; i++){
          scale(0.95);
          rotateZ(-radians(angle));
          ellipse(x,0,dia,dia);
      }
      pop();
    }
        */