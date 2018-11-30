function setup() {
  createCanvas(windowWidth/1.4, windowHeight);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();
  noCursor();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    strokeWeight(2);
    stroke(10);
    ellipse(x[i], y[i], 1 + (x.length - i));

  }

  x = x.slice(-100); // keep the last 50 x values
  y = y.slice(-100); // keep the last 50 y values

//top right
for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(200);
  ellipse(windowWidth/2.2, windowHeight/5, mouseY, mouseY);
}

for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(200);
  ellipse(windowWidth/2.2, windowHeight/5, mouseY, mouseY);
}

//bottom right
for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(200);
  ellipse(windowWidth/1.7, windowHeight/1.5, mouseX, mouseX);
}

//top left
for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(200);
  ellipse(windowWidth/10, windowHeight/5, mouseX, mouseX);
}

//bottom left
for (var a = 10; a < width-10; a = a + 100) {
  strokeWeight(1);
  stroke(200);
  ellipse(windowWidth/5, windowHeight/1.5, mouseY, mouseY);
}
}
