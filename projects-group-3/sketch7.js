let font;
let points = [];

function preload() {
    font = loadFont('../assets/MyFont.otf');
}

function setup() {
    createCanvas(600, 600);
    background(197, 31, 31);
    
    points = font.textToPoints('HOOTO', 75, 460, 500, { sampleFactor: 0.2 });

    console.log("Generated Points:", points.length);
}

function draw() {
    background(197, 31, 31);
    fill(255);
    noStroke();

    for (let i = 0; i < points.length; i++) {
        let angle = sin(frameCount * 0.05 + points[i].x * 0.1) * 10;
        ellipse(points[i].x, points[i].y + angle, 6, 6);
    }
}