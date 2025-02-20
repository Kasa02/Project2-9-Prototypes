let font;
let points = [];

function preload() {
    font = loadFont('../assets/MyFont.otf');
}

function setup() {
    createCanvas(600, 600);
    background(131, 175, 155);
    
    points = font.textToPoints('GOOD', 150, 430, 400, { sampleFactor: 0.2 });

    console.log("Generated Points:", points.length);
}

function draw() {
    background(131, 175, 155);
    fill(255, 165, 0);
    noStroke();

    for (let i = 0; i < points.length; i++) {
        let d = dist(mouseX, mouseY, points[i].x, points[i].y);
        let wind = map(d, 0, 50, 10, 0); 

        ellipse(points[i].x + random(-wind, wind), points[i].y + random(-wind, wind), 8, 8);
    }
}