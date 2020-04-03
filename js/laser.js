


class Laser {
    constructor(pos, laserAxis) {
        this.x = pos.x
        this.y = pos.y
        this.speed = 15
        this.axisPoint = laserAxis
        this.shipRotation = 0;
        // this.axisPoint = laserAxis
    }



    shoot() {
        push()
        translate(this.x,  this.y);
        rotate(this.shipRotation, this.axisPoint);
        image(laserImage, 0, 0, 20, 40);
        pop()
        this.y -= this.speed
        
        if(this.y < - 40) {
            lasers.shift()
        }
        
    }

    hit() {

    }

    rotate(turn) {
        this.shipRotation = turn
    }



}