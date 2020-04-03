class Ship {
  constructor(x, y, w, h, shipAxis) {
    this.pos = createVector(x, y)
    this.width = w;
    this.height = h;
    this.speed = -15;
    this.index = 0;
    this.exhaustSpeed = 0.3;
    
    
    this.axisPoint = shipAxis;
    this.heading = 0;
    this.rotation = 0;
  }

  show() {
    
  
     translate(this.pos.x,  this.pos.y);
     rotate(this.heading, this.axisPoint);
     image(myShipImage, 0, 0, this.width, this.height);
    // fill(255)
    // ellipse(0, this.height / 2, 55, 55);
   
      
     let index = floor(this.index) % myExhausts.length
    
     image(myExhausts[index], 0, this.height / 2, 30, 30);
     this.index += this.exhaustSpeed;
    //  this.shipRotation++
     
  }

 
  startPosition() {
    this.pos.y += this.speed;
    this.speed++;
    if (this.pos.y >= height - 100) {
      this.speed = 0;
    }
  }
  
  setRotation(turn) {
    this.rotation = turn
  }

  turn() {
    this.heading += this.rotation

  }
}
