function setup() {
    createCanvas(600, 600);

    var oCanvas = document.getElementById("defaultCanvas0");
    var c = document.getElementById("canvas");    
    c.appendChild(oCanvas);
    c.style.position = "relative";
    oCanvas.parentElement = c;
}

function draw() {    
    background(255);
    stroke(0);
    strokeWeight(2);
    
    drawCircle(width/2, height/2, 150);

    noLoop();
}

function drawCircle(cx, cy, r) {

    circle(cx, cy, r);

    if (r > 5) {
        drawCircle(cx-r, cy, r/2);
        drawCircle(cx+r, cy, r/2);
        drawCircle(cx, cy-r, r/2);
        drawCircle(cx, cy+r, r/2);
    }    

}