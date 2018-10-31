import Vector from "./Vector.js";
import * as random from "./random.js";
import { point } from "./figures.js";

function constrain(n, min, max) {
    if (n < min) return min;

    if(n > max) return max;

    return n;
}

function getRandomSize() {
    let r = Math.pow(random.getRandom(), 2);
    return constrain(r * 36, 8, 36);
    
}

class Snowflake {
    constructor(snowflake_image, image_location) {
        let x = random.getRandomInt(width);
        let y = random.getRandomInt(-10, -100);
        this.pos = new Vector(x, y);
        this.vel = new Vector(0, 2);
        this.acc = new Vector(0,0);
        this.dir = random.getRandom() > 0.5 ? -1: 1;
        this.angle = random.getRandomFloat(2 * Math.PI);
        this.xOffset = 0;

        this.r = getRandomSize();
        this.mass = this.r;
        this.maxSpeed = constrain(this.r / 9, 0.9, 10);
        this.snowflake_image = snowflake_image;
        this.image_location = image_location;
    }
    
    landed() {
        return this.pos.y > window.height;
    }

    applyForce(force) {
        // Parallax effect hack!
        let f = force.copy();
        f.multiplyBy(this.mass);

        /* let f = force.copy();
        f.divideBy(this.mass); */
        this.acc.addTo(f);
    }

    draw() {
        if (this.snowflake_image) {
            ctx.save();
            ctx.translate(this.pos.x + this.xOffset, this.pos.y);
            ctx.translate(-this.r/2, -this.r/2);
            ctx.rotate(this.angle);
            ctx.drawImage(
                this.snowflake_image,
                this.image_location.x, 
                this.image_location.y, 
                32, 32, //height and width of slice
                -this.r/2, 
                -this.r/2, 
                this.r,//constrain(32 * this.r / 32, 8, 36), 
                this.r//constrain(32 * this.r / 32, 8, 36)
                );
            ctx.restore();
        }
        else {
            point(ctx, this.pos.x, this.pos.y, this.r, "white");
        }
        
    }

    update() {

        this.xOffset = Math.sin(this.angle) * this.r;
        this.vel.addTo(this.acc);
        this.vel.limitBy(this.maxSpeed);
        this.pos.addTo(this.vel);
        this.acc.multiplyBy(0);
        this.angle += this.vel.magnitude() / 150 * this.dir; 
    }
}

export default Snowflake;