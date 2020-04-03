


class Laser {
    constructor(x, y, laserAxis) {
        this.x = x
        this.y = y
        this.speed = 15
        // this.axisPoint = laserAxis
    }



    shoot() {
        // translate(this.x,  this.y);
        // rotate(this.shipRotation, this.axisPoint);
        image(laserImage, this.x, this.y, 20, 40);
        this.y -= this.speed
        
        if(this.y < - 40) {
            lasers.shift()
        }
        
    }

    hit() {

    }

    rotate() {

    }



}