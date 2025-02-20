let font;
let points = [];

function preload() {
    font = loadFont('../assets/MyFont.otf');
}

function setup() {
    createCanvas(600, 600);
    background(197, 31, 31);
    
    points = font.textToPoints('HOOTO', 60, 400, 450, { sampleFactor: 0.2 });

    console.log("Generated Points:", points.length);
}

function draw() {
    background(197, 31, 31);
    fill(255);
    noStroke();

    for (let i = 0; i < points.length; i++) {
        let d = dist(mouseX, mouseY, points[i].x, points[i].y);
        let pull = map(d, 0, 100, 20, 0);
        let angle = atan2(mouseY - points[i].y, mouseX - points[i].x);

        let x = points[i].x + cos(angle) * pull;
        let y = points[i].y + sin(angle) * pull;
        
        ellipse(x, y, 6, 6);
    }
}