class EnemyShip {
  constructor(id) {
    this.pos = createVector(random(200, 400), random(0, -100));
    this.id = id;
    this.h = 45;
    this.w = 45;
    this.speed = 0.5;
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(90);
    image(enemyShipImage, 0, 0, this.w, this.w);
    pop();
  }
  fall() {
    this.pos.y += this.speed;
  }

  collisionDetection(arr) {
    arr.forEach((laser, i) => {
      let dist = this.pos.dist(laser.pos);
      console.log(dist)
      if (dist < 5) {
        arr.splice(i, 1);
      }
    });
    
  }

  hit() {

  }

  explode() {}
}
