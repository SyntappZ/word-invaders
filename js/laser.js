


class Laser {
    constructor(pos, angle) {
       this.pos = createVector(pos.x, pos.y)
    //    this.vel = p5.Vector.fromAngle(angle)
       this.w = 20
       this.h = 40
       this.speed = 15
      
    }
    update() {
         
       
    }

    shoot() {
        // laserSound.play();
        push()
        translate(this.pos.x,  this.pos.y);
        image(laserImage, 0,0, this.w, this.h);
        pop()
        this.pos.y -= this.speed
       
        
        if(this.pos.y < - this.h) {
            lasers.shift()
        }
        
    }

    hit() {

    }

    // rotate(turn) {
    //     this.shipRotation = turn
    // }



}