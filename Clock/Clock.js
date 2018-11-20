
var cx, cy;
var secondsRadius;
var minutesRadius;
var hoursRadius;
var clockDiameter;
let t = 0; // time variable

function setup() {
  createCanvas(1420, 690);
  stroke(255);
  rectMode(CENTER);
  fill(255);
  pg = createGraphics(1400, 690);

  var radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.60;
  hoursRadius = radius * 0.50;


  cx = width / 2;
  cy = height / 2;
}

function draw() {
  background(10, 10);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);

noStroke();
fill(0, 120, 150);
for (let x = 0; x <= width; x = x + 30) {
  for (let y = 0; y <= height; y = y + 30) {
    // starting point of each circle depends on mouse position
    let xAngle = map(mouseX, 0, width, -5 * PI, 5 * PI, true);
    let yAngle = map(mouseY, 0, height, -5 * PI, 5 * PI, true);
    // and also varies based on the particle's location
    let angle = xAngle * (x / width) + yAngle * (y / height);

    // each particle moves in a circle
    let myX = x + 60 * cos(1.68 * PI * t + angle);
    let myY = y + 30 * sin(1.68 * PI * t + angle);

    ellipse(myX, myY, 10); // draw particle
  }
}

t = t + 0.01;


  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;


  stroke(255);
  strokeWeight(7);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(8);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(10);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);


  strokeWeight(30);
  beginShape(POINTS);
  for (var a = 0; a < 360; a+=30) {
    var angle = radians(a);
    var x = cx + cos(angle) * secondsRadius;
    var y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();


}
