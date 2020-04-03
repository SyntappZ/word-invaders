class Ship {
  constructor(x, y, w, h, rotate, shipAxis) {
    this.shipX = x;
    this.shipY = y;
    this.width = w;
    this.height = h;
    this.speed = -15;
    this.index = 0;
    this.exhaustSpeed = 0.3;
    this.exhaustRotation = -90;
    this.shipRotation = rotate;
    this.axisPoint = shipAxis;
  }

  show() {
    
  
     translate(this.shipX,  this.shipY);
     rotate(this.shipRotation, this.axisPoint);
     image(myShipImage, 0, 0, this.width, this.height);
    // fill(255)
    // ellipse(0, this.height / 2, 55, 55);
   
      
     let index = floor(this.index) % myExhausts.length
    
     image(myExhausts[index], 0, this.height / 2, 30, 30);
     this.index += this.exhaustSpeed;
    //  this.shipRotation++
     
  }

 
  startPosition() {
    this.shipY += this.speed;
    this.speed++;
    if (this.shipY >= height - 100) {
      this.speed = 0;
    }
  }
  


  rotate(turn) {
    this.shipRotation = turn

  }
}
