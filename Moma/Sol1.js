function setup() {
  createCanvas(windowWidth, windowHeight);
}

windowResized = function() {
 resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
   frameRate(10);

  for (var i = 10; i <= 100; i = i + 15) {

    strokeWeight(2);

    //bottom left blue
    stroke(50, 100, 200, 255);
    line(random(windowWidth/30, windowWidth/1.8), random(windowHeight/1.1, windowHeight/3.5), mouseX - windowWidth/3, mouseY + windowHeight/2.5) ;

    //bottom right blue
    stroke(50, 100, 200, 255);
    line(random(windowWidth/1.4, windowWidth/3.5), random(windowHeight/1.1, windowHeight/3.5), mouseX + windowWidth/2.8, mouseY + windowHeight/2.5);

    //top right blue
    stroke(50, 100, 200, 255);
    line(random(windowWidth/1.4, windowWidth/3.5), random(windowHeight/20, windowHeight/1.5), mouseX + windowWidth/2.8, mouseY - windowHeight/2.2);

    //top left blue
    stroke(50, 100, 200, 255);
    line(random(windowWidth/30, windowWidth/1.8), random(windowHeight/20, windowHeight/1.5), mouseX - windowWidth/3, mouseY - windowHeight/2.2);

    //middle yellow
    stroke(255, 240, 40);
    line(random(windowWidth/30, windowWidth/1.4), random(windowHeight/20, windowHeight/1.1), mouseX, mouseY);

    //left red
    stroke(250, 50, 50, 255);
    line(random(windowWidth/10, windowWidth/1.8), random(windowHeight/1.1, windowHeight/10), mouseX - windowWidth/3, mouseY);

    //right red
    stroke(250, 50, 50, 255);
    line(random(windowWidth/1.5, windowWidth/3.5), random(windowHeight/1.1, windowHeight/10), mouseX + windowWidth/2.8, mouseY);

    //top red
    stroke(250, 50, 50, 255);
    line(random(windowWidth/1.5, windowWidth/10), random(windowHeight/20, windowHeight/1.5), mouseX, mouseY - windowHeight/2.2);

    //bottom red
    stroke(250, 50, 50, 255);
    line(random(windowWidth/1.5, windowWidth/10), random(windowHeight/1.1, windowHeight/3.5), mouseX, mouseY + windowHeight/2.5);
  }
}
