


class Laser {
    constructor(pos, angle) {
       this.pos = createVector(pos.x, pos.y)
       this.vel = p5.Vector.fromAngle(angle)
       console.log(angle)
        this.speed = 15
        // this.axisPoint = laserAxis
        // this.shipRotation = 0;
        // this.axisPoint = laserAxis
    }

    

    update() {
        this.pos.add(this.vel)
       
    }



    shoot() {
      console.log(angle)
        push()
        translate(this.pos.x,  this.pos.y);
        // rotate(angle);
         image(laserImage, 0,0, 20, 40);
        pop()
        // this.pos.y += this.speed
       
        
        // if(this.pos.y < - 40) {
        //     lasers.shift()
        // }
        
    }

    hit() {

    }

    // rotate(turn) {
    //     this.shipRotation = turn
    // }



}