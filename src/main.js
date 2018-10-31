import {setup as setupSnow} from "./snow.js";
import {update as updateSnow} from "./snow.js";
import {draw as drawSnow} from "./snow.js";

var tick = 0;
let prev = window.performance.now();
function setup() {
    window.mouseX = 0;
    window.mouseY = 0;
    window.mouseActive = true;
    createCanvas();
    window.h = document.createElement("H2");
    h.style.color = "white";
    h.style.position = "absolute";
    h.style.top = "1px";
    h.style.left = "10px";
    document.body.appendChild(h);
    setupSnow();
    var tNow = window.performance.now();

    //let laks = setInterval(update, 16.67);
}

function update() {
    updateSnow();
}


function draw() {
    drawBackground("black");
    drawSnow();
}

function loop() {
    update();
    drawFPS();
    draw();
    window.requestAnimationFrame(loop);
}

function start() {
    window.requestAnimationFrame(loop);
}

function drawBackground(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
}

function createCanvas(windowWidth, windowHeight) {
    var canvas = document.createElement("canvas");
    canvas.className  = "myClass";
    canvas.id = "myId";
    canvas.width = windowWidth || document.documentElement.clientWidth;
    canvas.height = windowHeight || document.documentElement.clientHeight;
    document.getElementsByTagName('body')[0].appendChild(canvas);
    window.width = canvas.clientWidth;
    window.height = canvas.clientHeight;
    window.ctx = canvas.getContext("2d");
    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        window.mouseX = mousePos.x;
        window.mouseY = mousePos.y;
    }, false);

    canvas.addEventListener ("mouseout", (evt) => {
        window.mouseActive = false;
    }, false)
    
    canvas.addEventListener("mouseover", (evt)=> {
        window.mouseActive = true;
    }, false)
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function drawFPS() {
    tick++;
    let now = window.performance.now();
    if (now - prev > 1000) {
        prev = now;
        h.innerHTML = tick + " fps";
        tick = 0;

    }
}
setup();
start();