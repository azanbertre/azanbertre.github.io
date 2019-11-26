let lines = [];
let count = 0;

function setup() {
  createCanvas(600, 600);

  var oCanvas = document.getElementById("defaultCanvas0");
  var c = document.getElementById("canvas");
  c.appendChild(oCanvas);
  oCanvas.parentElement = c;

  background(255);    
  let start = createVector(0, 550);
  let end = createVector(600, 550);
  lines.push(new KochLine(start, end));
}

function draw() {
  background(255);
  for (let line of lines) {
    line.display();
  }  
}

function mouseClicked() {  
  if (count < 4) {
    generate();
    count += 1;
  }  
}

function generate() {
  let next = [];
  for (let line of lines) {
    let a = line.kochA();
    let b = line.kochB();
    let c = line.kochC();
    let d = line.kochD();
    let e = line.kochE();

    next.push(new KochLine(a, b));
    next.push(new KochLine(b, c));
    next.push(new KochLine(c, d));
    next.push(new KochLine(d, e));
  }
  lines = next;  
}

class KochLine {

  constructor(a, b) {
    this.start = a;
    this.end = b;
  }

  display() {
    stroke(0);
    strokeWeight(2);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

  kochA() {
    return this.start;
  }

  kochB() {
    let v = p5.Vector.sub(this.end, this.start);
    v.div(3);    
    v = p5.Vector.add(v, this.start);
    return v;
  }

  kochC() {
    let a = this.start;

    let v = p5.Vector.sub(this.end, this.start);
    v.div(3);
    a = p5.Vector.add(a, v);

    v.rotate(- radians(60));
    a = p5.Vector.add(a, v);

    return a;
  }

  kochD() {
    let v = p5.Vector.sub(this.end, this.start);
    v.mult(2/3);
    v = p5.Vector.add(v, this.start);
    return v;
  }

  kochE() {
    return this.end;
  }

}