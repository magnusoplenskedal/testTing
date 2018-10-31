
class Vector {
    constructor(x,y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    static fromRadians(theta){
        let x = Math.cos(theta);
        let y = Math.sin(theta);
        return new Vector(x,y);
    }

    getDirection() {
        return Math.atan2(this.y, this.x);
    }
    normalize() {
        let mag = this.magnitude();
        this.x /= mag;
        this.y /= mag;
    }
    // use pythagoras theorem to work out the magnitude of the vector
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    add(v2) {
        return new Vector(this.x + v2.x, this.y + v2.y);
    }
    //To this
    addTo(v2) {
        this.x += v2.x;
        this.y += v2.y;
    }

    limitBy(scalar) {
        let currentMag = this.magnitude();
        this.x *= scalar / currentMag;
        this.y *= scalar / currentMag;
    }
    
    subtract(v2) {
        return new Vector(this.x - v2.x, this.y - v2.y);
    }

    //From this
    subtractFrom(v2) {
        this.x -= v2.x;
        this.y -= v2.y;
    }

    //Multiply vector with scalar
    multiply(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }
    
    // multiply this vector by the scalar
    multiplyBy(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }

    // return new vector
    divide(scalar) {
        return new Vector(this.x / scalar, this.y / scalar);
    }

    //Divide this by scalar
    divideBy(scalar) {
        this.x /= scalar;
        this.y /= scalar;
    }

    copy() {
        return new Vector(this.x, this.y);
    }
    //
}

export default Vector;