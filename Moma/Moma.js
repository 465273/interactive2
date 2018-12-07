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
    p.background(100, 0);
    var locX = p.mouseX - p.height / 2;
    var locY = p.mouseY - p.width / 2;

    p.ambientLight(100);
    p.directionalLight(200, 200, 200, 0.25, 0.25, 0.25);
    p.pointLight(255, 255, 255, locX, locY, 255);
    // strokeCap(ROUND);

    //p.line(p.mouseX - p.windowWidth/2, p.mouseY - p.windowHeight/2, p.pmouseX - p.windowWidth/2, p.pmouseY - p.windowHeight/2);
    p.noCursor()

    p.stroke(255);
    p.strokeWeight(0);
    p.push();

    p.translate(-p.windowWidth/11.2, p.windowHeight/3.5, 0);
    p.rotateZ(p.frameCount * 0.02);
    p.rotateX(p.mouseX * 0.002);
    p.rotateY(p.mouseY * 0.002);
    p.ambientMaterial(255);
    p.box(80, 80, 80);

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
    p.stroke(p.random(0,100), p.random(0,100), p.random(0,100));
  p.background(200);
  p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
  p.noCursor()

  for (var i = 3; i <= 100; i = i + 15) {
    p.strokeWeight(2);
    p.stroke(250)
    p.line(p.windowWidth/2.67, p.windowHeight/2.4, p.random(p.windowWidth/2.67, p.windowWidth/2.25), p.random(p.windowHeight/2.4, p.windowHeight/1.75));
  }

  for (var i = 3; i <= 100; i = i + 15) {
    p.strokeWeight(2);
    p.stroke(150)
    p.line(p.windowWidth/2.25, p.windowHeight/2.4, p.random(p.windowWidth/2.67, p.windowWidth/2.25), p.random(p.windowHeight/2.4, p.windowHeight/1.75));
  }

  for (var i = 3; i <= 100; i = i + 15) {
    p.strokeWeight(2);
    p.stroke(100)
    p.line(p.windowWidth/2.67, p.windowHeight/1.75, p.random(p.windowWidth/2.67, p.windowWidth/2.25), p.random(p.windowHeight/2.4, p.windowHeight/1.75));
  }




  for (var a = 10; a < p.width-10; a = a + 100) {
    p.strokeWeight(2);
    p.noFill()
    p.stroke(50);
    p.ellipse(p.windowWidth/2.43, p.windowHeight/5.3, p.mouseX/6, p.mouseX/6);
  }

  for (var a = 10; a < p.width-10; a = a + 100) {
    p.strokeWeight(2);
    p.noFill()
    p.stroke(50);
    p.ellipse(p.windowWidth/2.43, p.windowHeight/5.3, p.mouseX/8, p.mouseX/8);
  }

  for (var a = 10; a < p.width-10; a = a + 100) {
    p.strokeWeight(2);
    p.noFill()
    p.stroke(50);
    p.ellipse(p.windowWidth/2.43, p.windowHeight/5.3, p.mouseX/12, p.mouseX/12);
  }

}
};

new p5(sketch2);
new p5(sketch);
