let font;
let particles = [];

function preload() {
    font = loadFont('../assets/MyFont.otf');
}

function setup() {
    createCanvas(600, 600);
    background(0);

    let points = font.textToPoints('SQUEEZE', 60, 400, 400, { sampleFactor: 0.2 });

    console.log("Generated Points:", points.length);

    for (let pt of points) {
        particles.push(new PointParticle(pt.x, pt.y));
    }
}

function draw() {
    background(0);

    for (let p of particles) {
        p.update(mouseX, mouseY);
        p.display();
    }
}

class PointParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 6;
        this.pulledX = x;
        this.pulledY = y;
    }

    update(mx, my) {
        let d = dist(mx, my, this.x, this.y);
        let pull = map(d, 0, 100, 20, 0);
        let angle = atan2(my - this.y, mx - this.x);

        this.pulledX = this.x + cos(angle) * pull;
        this.pulledY = this.y + sin(angle) * pull;
    }

    display() {
        fill(147,197,114);
        noStroke();
        ellipse(this.pulledX, this.pulledY, this.size, this.size);
    }
}