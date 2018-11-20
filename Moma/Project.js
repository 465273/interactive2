function setup() {
  createCanvas(1400, 700);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    ellipse(x[i], y[i], 1 + (x.length - i));
    strokeWeight(2);
    stroke(10);
  }

  x = x.slice(-100); // keep the last 50 x values
  y = y.slice(-100); // keep the last 50 y values


for (var a = 10; a < width-10; a = a + 100) {
  ellipse(a, 0, mouseX, mouseY);
  strokeWeight(1);
  stroke(200);
}

for (var a = 10; a < width-10; a = a + 100) {
  ellipse(a, 700, mouseX, mouseY);
  strokeWeight(1);
  stroke(200);
}
}
