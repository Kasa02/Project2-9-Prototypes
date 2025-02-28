let font;
let particles = [];

function preload() {
    font = loadFont('../assets/MyFont.otf');
}

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch2'); 
    background(0);
    
    let points = font.textToPoints('GHOST', 75, 460, 500, { sampleFactor: 0.2 });

    console.log("Generated Points:", points.length);

    for (let pt of points) {
        particles.push(new PointParticle(pt.x, pt.y));
    }
}

function draw() {
    background(0);

    for (let p of particles) {
        p.update();
        p.display();
    }
}

class PointParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 6;
    }

    update() {
        let angle = sin(frameCount * 0.05 + this.x * 0.1) * 10;
        this.yOffset = angle;
    }

    display() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y + this.yOffset, this.size, this.size);
    }
}