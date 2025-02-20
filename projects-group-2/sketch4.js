let font;
let points = [];

function preload() {
    font = loadFont('../assets/MyFont.otf');  
}

function setup() {
    createCanvas(600, 600);
    background(131, 175, 155);
    
    points = font.textToPoints('GOOD', 120, 450, 500, { sampleFactor: 0.2 });

    console.log("Generated Points:", points.length);
}

function draw() {
    background(131, 175, 155);
    fill(252, 157, 154);
    noStroke();

    for (let i = 0; i < points.length; i++) {
        let d = dist(mouseX, mouseY, points[i].x, points[i].y);
        let offset = map(d, 0, 100, 8, 0); 
        ellipse(points[i].x + random(-offset, offset), points[i].y + random(-offset, offset), 10, 10);
    }
}