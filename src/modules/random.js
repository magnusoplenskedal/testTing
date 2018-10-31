export function getRandomInt(min, max) {
    if (!max) {
        return Math.floor(Math.random() * min);  
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export function getRandom() {
    return Math.random();
}

export function getRandomFloat(min, max) {
    if (!max) {
        return Math.random() * min; 
    }
    return Math.random() * (max - min) + min;
}