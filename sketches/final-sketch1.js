let font;
let textPoints;

function preload() {
    font = loadFont('../assets/MyFont.otf');  
}

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch1'); 
    background(0);

    if (font) {
        textPoints = new TextPoints('BLUR', 120, 450, 500, 0.2);
    } else {
        console.log("font-unable-to-load");
    }
}

function draw() {
    background(0);
    textPoints.display();
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    jitter() {
        let jitterX = random(-1, 1);
        let jitterY = random(-1, 1);
        return { x: this.x + jitterX, y: this.y + jitterY };
    }
}

/** 定义 TextPoints 类 */
class TextPoints {
    constructor(text, x, y, fontSize, sampleFactor) {
        this.points = font.textToPoints(text, x, y, fontSize, { sampleFactor });
    }

    display() {
        fill(255);
        noStroke();
        
        for (let pt of this.points) {
            let jittered = new Point(pt.x, pt.y).jitter();
            ellipse(jittered.x, jittered.y, 5, 5);
        }
    }
}