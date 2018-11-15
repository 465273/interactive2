function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(255);
   frameRate(40);

  for (var i = 10; i <= 100; i = i + 15) {

    //bottom left blue
    stroke(50, 100, 200, 80);
    line(random(i, 300), random(50, 500), 0, 500) ;

    //bottom right blue
    stroke(50, 100, 200, 80);
    line(random(i, 600), random(50, 500), 600, 500);

    //top right blue
    stroke(50, 100, 200, 80);
    line(random(i, 600), random(50, 500), 600, 0);

    //top left blue
    stroke(50, 100, 200, 80);
    line(random(i, 600), random(50, 500), 0, 0);

    //middle yellow
    stroke(255, 240, 40);
    line(random(i, 600), random(50, 500), 300, 250);

    //left red
    stroke(250, 50, 50, 80);
    line(random(i, 600), random(50, 500), 0, 250);

    //right red
    stroke(250, 50, 50, 80);
    line(random(i, 600), random(50, 500), 600, 250);

    //top red
    stroke(250, 50, 50, 80);
    line(random(i, 600), random(50, 500), 300, 0);

    //bottom red
    stroke(250, 50, 50, 80);
    line(random(i, 600), random(50, 500), 300, 500);
  }
}
