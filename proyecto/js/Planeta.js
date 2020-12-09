
class Planeta {
    constructor(r, d, o, img) {
      this.v = createVector(0,0,1);
  
      this.radius = r;
      this.distance = d;
      this.v.mult(this.distance);
      this.angle = random(TWO_PI);
      this.orbitspeed = o;
  
      this.planetas = null;
  
      // Since there is no direct equivalent of PShape in p5.js, we have
      // to save the texture for later use instead of creating a globe.
      this.texture = img;
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
      this.planetas = [];
      for (let i = 0; i < total; i++) {
        let r = this.radius / (level * 2);
        let d = random(this.radius + r, (this.radius + r) * 2);
        let o = random(-0.1, 0.1);
      }
    }

    addMoon(radio, distancia, orbita, textura){
      this.planetas = [];
      let d = this.radius + distancia;
      let moon = new Planeta(radio, d, orbita, textura);
      this.planetas[0] = moon;
      let v2 = createVector(1, 0, 0);
      let p = this.planetas[0].v.cross(v2);
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