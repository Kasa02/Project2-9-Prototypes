let font;
let allPoints = [];
let textSize = 150; 
let spacingX = 150; 
let spacingY = 120; 
let rows, cols; 

function preload() {
    font = loadFont('../assets/MyFont.otf');
}

function setup() {
    createCanvas(600, 600);
    background(23, 50, 7); 
    
   
    cols = floor(width / spacingX);
    rows = floor(height / spacingY);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let xOffset = col * spacingX;
            let yOffset = row * spacingY;
            let points = font.textToPoints('HOOTO', 10 + xOffset, 110 + yOffset, textSize, { sampleFactor: 0.2 });

            allPoints = allPoints.concat(points);
        }
    }

    console.log(`Total Points: ${allPoints.length}, Rows: ${rows}, Cols: ${cols}`);
}

function draw() {
    background(23, 50, 7);
    fill(217, 116, 43); 
    noStroke();

    for (let i = 0; i < allPoints.length; i++) {
        let wave = sin(frameCount * 0.05 + allPoints[i].x * 0.1) * 5; 
        ellipse(allPoints[i].x, allPoints[i].y + wave, 4, 4); 
    }
}