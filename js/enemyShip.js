class EnemyShip {
    constructor(x, y, id) {
      this.pos = createVector(x, y);
      this.id = id
      this.h = 45;
      this.w = 45;
      this.speed = 0.5;
    }
    
    show() {
     push()
     translate(this.pos.x, this.pos.y)
     rotate(90)
     image(enemyShipImage, 0, 0, this.w, this.w)
     pop()
      
    }
    fall() {
    this.pos.y += this.speed
   
    }
  }
  