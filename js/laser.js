class Laser {
  constructor(pos, id) {
    this.pos = createVector(pos.x, pos.y);
    this.velocity = createVector(0, 0);
    this.acceleration = 0;
    this.speed = 10;
    this.angle = 0;
    this.height = 40;
    this.width = 20;
    this.id = id
   
  }

  shoot(target) {
   this.target = target
    this.acceleration = p5.Vector.sub(target, this.pos);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.speed);
    this.pos.add(this.velocity);
  
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    this.angle = this.velocity.heading() + (PI / 2) + 90
    rotate(this.angle);
    image(laserImage, 0, 0, this.width, this.height);
    pop();

   
  }

  
}
