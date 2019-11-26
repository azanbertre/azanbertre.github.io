let current = "A";
let count = 0;

let slider;

let lsys;
let turtle;

function setup() {
    createCanvas(600, 600);
    slider = createSlider(-25, 25, 100);
    slider.position(10, 10);
    slider.style('width', '80px');

    var oCanvas = document.getElementById("defaultCanvas0");
    var c = document.getElementById("canvas");    
    c.appendChild(oCanvas);
    c.style.position = "relative";
    oCanvas.parentElement = c;

    slider.elt.parentElement = c;
    c.appendChild(slider.elt);

    console.log("Generation " + count + ": " + current);
    
    let ruleset = [new Rule('F', "FF+[+F-F-F]-[-F+F+F]")];
    lsys = new LSystem("F", ruleset);
    turtle = new Turtle(lsys.getSentence(), height/4, radians(25));

    slider.input(function () {        
        turtle.setTheta(radians(slider.value()));
        redraw();
    });
}

function draw() {
    background(255);
    fill(0);

    translate(width/2, height);
    rotate(-PI/2);
    turtle.render();
    noLoop();
}

function mousePressed() {  
    if (count < 4) {
        push();
        lsys.generate();

        turtle.setToDo(lsys.getSentence());
        turtle.changeLen(0.5);
        pop();
        redraw();
        count += 1;
    }
}

class Rule {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    getA() {
        return this.a;
    }

    getB() {
        return this.b;
    }
}

class Turtle {
    constructor(s, l, t) {
        this.todo = s;
        this.len = l; 
        this.theta = t;
    } 
    
    render() {
        stroke(0, 175);
        for (let i = 0; i < this.todo.length; i++) {
            let c = this.todo[i];
            if (c == 'F') {
                line(0, 0, this.len, 0);
                translate(this.len, 0);
            } else if (c == 'G') {
                translate(this.len, 0);
            } else if (c == '+') {
                rotate(this.theta);
            } else if (c == '-') {
                rotate(-this.theta);
            } else if (c == '[') {
                push();
            } else if (c == ']') {
                pop();
            }
        }
    }

    setLen(l) {
        this.len = l;
    } 

    changeLen(percent) {
        this.len *= percent;
    }

    setToDo(s) {
        this.todo = s;
    }

    setTheta(t) {
        this.theta = t;
    }
}

class LSystem {

    // Construct an LSystem with a startin sentence and a ruleset
    constructor(axiom, r) {        
        this.sentence = axiom;
        this.ruleset = r;
        this.generation = 0;
    }

    // Generate the next generation
    generate() {
        // An empty StringBuffer that we will fill
        let nextgen = "";
        // For every character in the sentence        
        for (let i = 0; i < this.sentence.length; i++) {            
            // What is the character
            let curr = this.sentence[i];
            // We will replace it with itself unless it matches one of our rules
            let replace = "" + curr;
            // Check every rule
            for (let j = 0; j < this.ruleset.length; j++) {
                let a = this.ruleset[j].getA();
                // if we match the Rule, get the replacement String out of the Rule
                if (a == curr) {
                    replace = this.ruleset[j].getB();
                    break; 
                }
        }
        // Append replacement String
        nextgen += replace;
        }
        // Replace sentence
        this.sentence = nextgen.toString();
        // Increment generation
        this.generation++;
    }

    getSentence() {
        return this.sentence; 
    }

    getGeneration() {
        return this.generation; 
    }


}