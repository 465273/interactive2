var bg;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  bg = loadImage("interactive2/Moma/SolLewitt.png");
}

function draw() {
  background(255);
  strokeWeight(10);

//4
  push();
  translate(windowWidth/17, -150, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseY * 0.005);
  ambientMaterial(255);
  box(100, 100, 100);
  pop();
}
