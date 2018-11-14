function setup() {
  createCanvas(1300, 700);
}

function draw() {
  background(255);

  for (var a = 10; a < width-10; a = a + 10) {
    line(a, height/2, mouseX, mouseY);
  }
}
