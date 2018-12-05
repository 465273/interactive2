var sketch = function (p) {

  p.setup = function(){
    let c = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

    c.elt.style.position = 'fixed'
    c.elt.style.left = '0'
    c.elt.style.top = '0'
    p.frameRate(200);
  }

   p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.draw = function() {
    p.stroke(p.random(250,0), p.random(250,0), p.random(250,0));
    p.background(0, 0, 0, 0);
    var locX = p.mouseX - p.height / 2;
    var locY = p.mouseY - p.width / 2;

    p.ambientLight(100);
    p.directionalLight(200, 200, 200, 0.25, 0.25, 0.25);
    p.pointLight(255, 255, 255, locX, locY, 255);
    // strokeCap(ROUND);

    //p.line(p.mouseX - p.windowWidth/2, p.mouseY - p.windowHeight/2, p.pmouseX - p.windowWidth/2, p.pmouseY - p.windowHeight/2);
    p.noCursor()

    p.stroke(255);
    p.strokeWeight(2);
    p.push();

    p.translate(p.windowWidth/3.5, p.windowHeight/100, 0);
    p.rotateZ(p.frameCount * 0.02);
    p.rotateX(p.mouseX * 0.002);
    p.rotateY(p.mouseY * 0.002);
    p.ambientMaterial(255);
    p.box(50, 50, 50);

   // image(i,0,0);
    p.pop();
  }

};


var sketch2 = function (p) {

p.setup = function(){
  let c = p.createCanvas(p.windowWidth, p.windowHeight);

  c.elt.style.position = 'fixed'
  c.elt.style.left = '0'
  c.elt.style.top = '0'
  p.frameRate(20);
}

p.draw = function() {
    p.strokeWeight(4);
    p.stroke(p.random(250,0), p.random(250,0), p.random(250,0));
  p.background(255);
  p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
  p.noCursor()

  for (var i = 3; i <= 100; i = i + 15) {
    p.strokeWeight(2);
    p.stroke(0, 0, 255)
    p.line(p.windowWidth/2.2, p.windowHeight/2.2, p.random(p.windowWidth/1.85, p.windowWidth/2.2), p.random(p.windowHeight/2.2, p.windowHeight/1.8));
  }

  for (var i = 3; i <= 100; i = i + 15) {
    p.strokeWeight(2);
    p.stroke(255, 0, 0)
    p.line(p.windowWidth/1.8, p.windowHeight/2.2, p.random(p.windowWidth/1.85, p.windowWidth/2.2), p.random(p.windowHeight/2.2, p.windowHeight/1.8));
  }

  for (var i = 3; i <= 100; i = i + 15) {
    p.strokeWeight(2);
    p.stroke(255, 255, 0)
    p.line(p.windowWidth/2.2, p.windowHeight/1.8, p.random(p.windowWidth/1.9, p.windowWidth/2.2), p.random(p.windowHeight/2.2, p.windowHeight/1.8));
  }




  for (var a = 10; a < p.width-10; a = a + 100) {
    p.strokeWeight(2);
    p.noFill()
    p.stroke(0);
    p.ellipse(p.windowWidth/5, p.windowHeight/2, p.mouseX/6, p.mouseX/6);
  }

  for (var a = 10; a < p.width-10; a = a + 100) {
    p.strokeWeight(2);
    p.noFill()
    p.stroke(0);
    p.ellipse(p.windowWidth/5, p.windowHeight/2, p.mouseX/8, p.mouseX/8);
  }

  for (var a = 10; a < p.width-10; a = a + 100) {
    p.strokeWeight(2);
    p.noFill()
    p.stroke(0);
    p.ellipse(p.windowWidth/5, p.windowHeight/2, p.mouseX/12, p.mouseX/12);
  }

}
};

new p5(sketch2);
new p5(sketch);
