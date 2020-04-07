class EnemyShip {
  constructor(id) {
    this.pos = createVector(random(200, 400), random(0, -100));
    this.id = id;
    this.r = 45;
    this.speed = 0.5;
    (this.animationSpeed = 0.1),
     (this.shipImage = enemyShipImage);
    this.index = 0;
  }

  show() {
    image(this.shipImage, this.pos.x, this.pos.y, this.r, this.r);
  }
  fall() {
    this.pos.y += this.speed;
  }

  collisionDetection(arr) {
    arr.forEach((laser, i) => {
      let dist = this.pos.dist(laser.pos);

      if (dist < 5) {
        arr.splice(i, 1);

        
      }
    });
  }

 

  explode() {}
}
