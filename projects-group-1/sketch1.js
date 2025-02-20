let font;
let points = [];

function preload() {
    font = loadFont('../assets/MyFont.otf');  
}

function setup() {

    let canvas = createCanvas(600, 600);
    canvas.parent('p5-container'); 
    background(255);

    if (font) {
        points = font.textToPoints('KASA', 100, 450, 400, { sampleFactor: 0.2 });
    } else {
        console.log("font-unable-to-load");
    }
}

function draw() {
    background('255');
    fill(0);
    noStroke();

    for (let i = 0; i < points.length; i++) {
        ellipse(points[i].x, points[i].y, 5, 10);
    }
}
