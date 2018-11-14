

let t = 0; // time variable

function setup() {
  createCanvas(1420, 690);
  noStroke();
  fill(0, 200, 250);
}

function draw() {
  background(10, 10); // translucent background (creates trails)


  // make a x and y grid of ellipses
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

  t = t + 0.01; // update time
}
