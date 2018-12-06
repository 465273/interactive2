function setup() {
  createCanvas(windowWidth, windowHeight);
}

windowResized = function() {
 resizeCanvas(windowWidth, windowHeight);
}

var x = [];
var y = [];

function draw() {
  background(255);
  noFill();
  noCursor();

  x.push(mouseX);
  y.push(mouseY);



  for (var i = 0; i < x.length; i = i + 10) {
    strokeWeight(2);
    stroke(0);
    ellipse(x[i], y[i], 1 + (x.length - i));

    if (mouseIsPressed) {
    stroke(200)
    }

  }

  x = x.slice(-100);
  y = y.slice(-100);

//top right
for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/2.2, windowHeight/5, mouseY, mouseY);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/2.2, windowHeight/5, mouseY/1.2, mouseY/1.2);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/2.2, windowHeight/5, mouseY/1.5, mouseY/1.5);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/2.2, windowHeight/5, mouseY/2, mouseY/2);
}

//bottom right
for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/1.7, windowHeight/1.5, mouseX, mouseX);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/1.7, windowHeight/1.5, mouseX/1.2, mouseX/1.2);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/1.7, windowHeight/1.5, mouseX/1.5, mouseX/1.5);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/1.7, windowHeight/1.5, mouseX/2, mouseX/2);
}

//top left
for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/10, windowHeight/5, mouseX, mouseX);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/10, windowHeight/5, mouseX/1.2, mouseX/1.2);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/10, windowHeight/5, mouseX/1.5, mouseX/1.5);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/10, windowHeight/5, mouseX/2, mouseX/2);
}

//bottom left
for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/5, windowHeight/1.5, mouseY, mouseY);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/5, windowHeight/1.5, mouseY/1.2, mouseY/1.2);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/5, windowHeight/1.5, mouseY/1.5, mouseY/1.5);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(220);
  ellipse(windowWidth/5, windowHeight/1.5, mouseY/2, mouseY/2);
}
}
