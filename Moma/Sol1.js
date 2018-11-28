function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
   frameRate(10);

  for (var i = 10; i <= 100; i = i + 15) {

    //bottom left blue
    stroke(50, 100, 200, 255);
    line(random(windowWidth/30, windowWidth/1.8), random(windowHeight/1.1, windowHeight/3.5), windowWidth/30, windowHeight/1.1) ;
    strokeWeight(2);

    //bottom right blue
    stroke(50, 100, 200, 255);
    line(random(windowWidth/1.4, windowWidth/3.5), random(windowHeight/1.1, windowHeight/3.5), windowWidth/1.4, windowHeight/1.1);

    //top right blue
    stroke(50, 100, 200, 255);
    line(random(windowWidth/1.4, windowWidth/3.5), random(windowHeight/20, windowHeight/1.5), windowWidth/1.4, windowHeight/20);

    //top left blue
    stroke(50, 100, 200, 255);
    line(random(windowWidth/30, windowWidth/1.8), random(windowHeight/20, windowHeight/1.5), windowWidth/30, windowHeight/20);

    //middle yellow
    stroke(255, 240, 40);
    line(random(windowWidth/30, windowWidth/1.4), random(windowHeight/20, windowHeight/1.1), windowWidth/2.6, windowHeight/2);

    //left red
    stroke(250, 50, 50, 255);
    line(random(windowWidth/10, windowWidth/1.8), random(windowHeight/1.1, windowHeight/10), windowWidth/30, windowHeight/2);

    //right red
    stroke(250, 50, 50, 255);
    line(random(windowWidth/1.5, windowWidth/3.5), random(windowHeight/1.1, windowHeight/10), windowWidth/1.4, windowHeight/2);

    //top red
    stroke(250, 50, 50, 255);
    line(random(windowWidth/1.5, windowWidth/10), random(windowHeight/20, windowHeight/1.5), windowWidth/2.6, windowHeight/20);

    //bottom red
    stroke(250, 50, 50, 255);
    line(random(windowWidth/1.5, windowWidth/10), random(windowHeight/1.1, windowHeight/3.5), windowWidth/2.6, windowHeight/1.1);
  }
}
