let font;
let allPoints = [];
let rows = 4; 
let cols = 3;
let spacingX = 180; 
let spacingY = 140; 

function preload() {
    font = loadFont('../assets/MyFont.otf');
}

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('p5-container');
    background(34, 139, 34);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let xOffset = col * spacingX;
            let yOffset = row * spacingY;
            let points = font.textToPoints('KASA', 50 + xOffset, 150 + yOffset, 180, { sampleFactor: 0.5 }); 
            allPoints = allPoints.concat(points);
        }
    }
}

function draw() {
    background(255);
    fill(0, 0, 0);
    noStroke();

    for (let i = 0; i < allPoints.length; i++) {
        ellipse(allPoints[i].x, allPoints[i].y, 8, 8); 
    }
}