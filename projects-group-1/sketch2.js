let font;
let points = [];

function preload() {
    font = loadFont('../assets/MyFont.otf');  
}

function setup() {

    let canvas = createCanvas(600, 600);
    canvas.parent('p5-container'); 
    background(34, 139, 34);

    if (font) {
        points = font.textToPoints('KASA', 120, 450, 500, { sampleFactor: 0.2 });
    } else {
        console.log("font-unable-to-load");
    }
}

function draw() {
    background(34, 139, 34);
    fill(255, 165, 0);
    noStroke();

    for (let i = 0; i < points.length; i++) {
        let jitterX = random(-1, 1);
        let jitterY = random(-1, 1);
        ellipse(points[i].x + jitterX, points[i].y + jitterY, 5, 5);
    }
}