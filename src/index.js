import {setup, update, draw} from "main.js";
var canvas = document.getElementById("myCanvas");

// Creating global variables
window.screenWidth = canvas.clientWidth;
window.screenHeight = canvas.clientHeight;
window.ctx = canvas.getContext("2d");

function run() {
    window.requestAnimationFrame(draw);  
}


window.requestAnimationFrame(draw);