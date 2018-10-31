import Snowflake from "./modules/snowflake.js";
import Vector from "./modules/vector.js";
import * as random from "./modules/random.js";
import {noise} from "./modules/perlin.js";

let snow = [];

let textures = [];
var spritesheet;

function map(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
}

var imageLoaded = false;

function setup() {
    preload();
    window.gravity = new Vector(0, 0.0005);
}

function preload() {
    spritesheet = new Image();   // Create new img element
    spritesheet.addEventListener('load', function() {
        imageLoaded = true;
        createImagePositionArray(spritesheet)

    }, false);
    spritesheet.src = './src/modules/snow.png'; // Set source path
}

function createImagePositionArray(spritesheet) {
    for (let x = 0; x < spritesheet.width; x += 32) {
        for (let y = 0; y < spritesheet.height; y += 32) {
            textures.push(new Vector(x, y));
        }
    }
}

function update() {
   
    snow = snow.filter(s => !s.landed());

    if (imageLoaded && snow.length < 700) {
        let image_index = random.getRandomInt(0, textures.length);
        snow.push(new Snowflake(spritesheet, textures[image_index]));
    } 

    for (let flake of snow) {
        //let wx = map(mouseX, 0, width, -0.001, 0.001); wind frokm mouse movement
        //let windForce = repel(wind, flake)
        flake.applyForce(gravity);
        flake.update();
    }
}

function draw() {
    snow.forEach(flake => flake.draw());
}

export {setup, update, draw};