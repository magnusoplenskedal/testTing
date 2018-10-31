import Vector from "./vector.js";
class ball {
    constructor() {
        this.position = new Vector(screenWidth / 2, screenHeight / 2);
        this.velocity = new Vector(Math.random() * 2,Math.random() * 2);
        this.radius = 10;
    }

    update() {
        this.position.addTo(this.velocity);
        this.bounce();
    }

    bounce() {
        if((this.position.x > screenWidth) || this.position.x < 0) {
            this.velocity.x *= -1;
        }
        if((this.position.y > screenHeight || this.position.y < 0)) {
            this.velocity.y *= -1;
        }
    }

    display() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y ,this.radius ,0 ,2*Math.PI);
        ctx.fillStyle= "red";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

}

export default ball;
