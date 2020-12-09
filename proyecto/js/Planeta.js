
class Planeta {
    constructor(r, d, o, img) {
      this.v = createVector(0,0,1);
  
      this.radius = r;
      this.distance = d;
      this.v.mult(this.distance);
      this.angle = random(TWO_PI);
      this.orbitspeed = o;
      this.numMoons = 0;
  
      this.planetas = null;
  
      // Since there is no direct equivalent of PShape in p5.js, we have
      // to save the texture for later use instead of creating a globe.
      this.texture = img;
    }

    drawOrbit(){
      for (let i=0; i<860; i++) {
        fill(i, 2, 2);
        let r = i / 6; 
        let x=width/2  + r * cos(radians(i));
        let y=height/2 + r * sin(radians(i));
        noFill();
        ellipse(x, y, 1, 1);
      } // for
    }
  
    orbit() {
      this.angle = this.angle + this.orbitspeed;
      if (this.planetas != null) {
        for (let i = 0; i < this.planetas.length; i++) {
          this.planetas[i].orbit();
        }
      }
    }
  
    spawnMoons(total, level) {
      if(this.planetas == null){
        this.planetas = [];
      }
      for (let i = 0; i < total; i++) {
        let r = this.radius / (level * 2);
        let d = random(this.radius + r, (this.radius + r) * 2);
        let o = random(-0.1, 0.1);
      }
    }

    addMoon(radio, distancia, orbita, textura){
      if(this.planetas == null){
        this.planetas = [];
      }
      let d = this.radius + distancia;
      let moon = new Planeta(radio, d, orbita, textura);
      this.planetas[this.numMoons] = moon;
      if(this.distance == 80+147){
        moon.v.x = 10;
        moon.v.y = 10; 
      }
      else{
        moon.v.x = 0;
        moon.v.y = 10; 
        moon.v.z = 10;
      }
      this.planetas[this.numMoons] = moon;
      this.numMoons +=1;
    }
  
    addRings(radio, d, orbita, textura){
      this.planetas = [];
      for(let i = 0; i < 10;i++)
      {
        let moon = new Planeta(radio, d+(i*2), orbita+i, textura);
        moon.angle = radians(TWO_PI+(i));
        this.planetas[i] = moon;
      }
      console.log(this)
    }

    show() {
      push();
      noStroke();
      let v2 = createVector(1, 0, 1);
      let p = this.v.cross(v2);
      
      
      if (p.x != 0 || p.y != 0 || p.z != 0) {
        rotate(this.angle, p);
      }
      stroke(255);
  
      translate(this.v.x, this.v.y, this.v.z);
      noStroke();
      fill(255);
      
      texture(this.texture);
      sphere(this.radius);
      
      if (this.planetas != null) {
        for (let i = 0; i < this.planetas.length; i++) {
          this.planetas[i].show();
        }
      }
      pop();
    }
  }