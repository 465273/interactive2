function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
   frameRate(40);

  for (var i = 10; i <= 100; i = i + 15) {

    //bottom left blue
    stroke(50, 100, 200, 80);
    line(random(i, 1300), random(50, 600), 0, 700) ;
    strokeWeight(2);

    //bottom right blue
    stroke(50, 100, 200, 80);
    line(random(i, 1300), random(50, 600), 1400, 700);

    //top right blue
    stroke(50, 100, 200, 80);
    line(random(i, 1300), random(50, 600), 1400, 0);

    //top left blue
    stroke(50, 100, 200, 80);
    line(random(i, 1300), random(50, 600), 0, 0);

    //middle yellow
    stroke(255, 240, 40);
    line(random(i, 1300), random(50, 600), 700, 350);

    //left red
    stroke(250, 50, 50, 80);
    line(random(i, 1300), random(50, 600), 0, 350);

    //right red
    stroke(250, 50, 50, 80);
    line(random(i, 1300), random(50, 600), 1400, 350);

    //top red
    stroke(250, 50, 50, 80);
    line(random(i, 1300), random(50, 600), 700, 0);

    //bottom red
    stroke(250, 50, 50, 80);
    line(random(i, 1300), random(50, 600), 700, 700);
  }
}
