let font;
let points = [];
let sizes = []; 

function preload() {
    font = loadFont('../assets/MyFont.otf');  
}

function setup() {
    createCanvas(600, 600);
    background(130, 57, 53);
    
    points = font.textToPoints('GOOD', 120, 450, 500, { sampleFactor: 0.2 });
    console.log("Generated Points:", points.length);

    for (let i = 0; i < points.length; i++) {
        sizes[i] = 4; 
    }
}

function draw() {
    background(130, 57, 53);
    fill(255, 165, 0);
    noStroke();

    for (let i = 0; i < points.length; i++) {
        let d = dist(mouseX, mouseY, points[i].x, points[i].y);
        let targetSize = map(d, 0, 100, 10, 4); 
        
        sizes[i] = lerp(sizes[i], targetSize, 0.1); 

        ellipse(points[i].x, points[i].y, sizes[i], sizes[i]);
    }
}