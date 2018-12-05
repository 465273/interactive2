var sketch = function(p) {

  p.setup = function() {
    let c = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

    c.elt.style.position = 'fixed'
    c.elt.style.left = '0'
    c.elt.style.top = '0'
    p.frameRate(200);

  }
  
  p.windowResized = function() {
   p.resizeCanvas(p.windowWidth, p.windowHeight);
 }
	var z1 = 0;
  var y1 = 0;

  var z2 = 0;
  var x2 = 0;

  var z3 = 0;
  var y3 = 0;

  var z4 = 0;
  var x4 = 0;


  var z5 = 0;
  var y5 = 0;

  var z6 = 0;
  var x6 = 0;

  var z7 = 0;
  var y7 = 0;

  var z8 = 0;
  var x8 = 0;

  var z9 = 0;
  var y9 = 0;

  var z10 = 0;
  var x10 = 0;

  var z11 = 0;
  var y11 = 0;

  var z12 = 0;
  var x12 = 0;

  var z13 = 0;
  var y13 = 0;

  var z14 = 0;
  var x14 = 0;

  var z15 = 0;
  var y15 = 0;

  var z16= 0;
  var x16 = 0;

  var z17 = 0;
  var y17 = 0;

  var z18 = 0;
  var x18 = 0;

  p.draw = function() {
    p.background(0, 0);
    var locX = p.mouseX - p.height / 2;
    var locY = p.mouseY - p.width / 2;

    p.ambientLight(30);
    p.directionalLight(200, 230, 230, 0.25, 0.25, 0.25);
    p.pointLight(200, 255, 255, locX, locY, 250);
    p.stroke(170);
    p.strokeWeight(0);
    p.noCursor()

    //1
    p.push();
    p.translate(p.windowWidth / -3.3, -250, 0);
    p.rotateZ(z1 * 0.01);
    p.rotateY(y1 * 0.02);
    p.rotateX(p.mouseX * 0.005);
    p.specularMaterial(255);
    p.box(75, 50, 25);
    p.pop();
    if (!p.mouseIsPressed) {
    z1 = z1 + 1;
    y1 = y1 + 1;
    } else {
      z1 = z1 + 0.3;
    y1 = y1 + 0.3;
    }

    //2
    p.push();
    p.translate(-p.windowWidth / 5.5, -150, 0);
    p.rotateZ(z2 * 0.02);
    p.rotateX(x2 * 0.005);
    p.rotateY(p.mouseY * 0.005);
    p.specularMaterial(255);
    p.box(25, 30, 150);
    p.pop();
    if (!p.mouseIsPressed) {
    z2 = z2 + 1;
    x2 = x2 + 1;
    } else {
      z2 = z2 + 0.3;
    x2 = x2 + 0.3;
    }

    //3
    p.push();
    p.translate(-p.windowWidth / 17, -250, 0);
    p.rotateZ(z3 * 0.005);
    p.rotateY(y3 * 0.02);
    p.rotateX(p.mouseX * 0.005);
    p.specularMaterial(255);
    p.box(50, 25, 100);
    p.pop();
    if (!p.mouseIsPressed) {
    z3 = z3 + 1;
    y3 = y3 + 1;
    } else {
      z3 = z3 + 0.3;
    y3 = y3 + 0.3;
    }

    //4
    p.push();
    p.translate(p.windowWidth / 17, -150, 0);
    p.rotateZ(z4 * 0.02);
    p.rotateX(x4 * 0.005);
    p.rotateY(p.mouseY * 0.005);
    p.specularMaterial(255);
    p.box(50, 25, 100);
    p.pop();
    if (!p.mouseIsPressed) {
    z4 = z4 + 1;
    x4 = x4 + 1;
    } else {
      z4 = z4 + 0.3;
    x4 = x4 + 0.3;
    }

    //5
    p.push();
    p.translate(p.windowWidth / 5.5, -250, 0);
    p.rotateZ(z5 * 0.01);
    p.rotateY(y5 * 0.005);
    p.rotateX(p.mouseX * 0.005);
    p.specularMaterial(255);
    p.box(25, 25, 150);
    p.pop();
    if (!p.mouseIsPressed) {
    z5 = z5 + 1;
    y5 = y5 + 1;
    } else {
      z5 = z5 + 0.3;
    y5 = y5 + 0.3;
    }

    //6
    p.push();
    p.translate(p.windowWidth / 3.3, -150, 0);
    p.rotateZ(z6 * 0.02);
    p.rotateX(x6 * 0.00);
    p.rotateY(p.mouseY * 0.005);
    p.specularMaterial(255);
    p.box(75, 50, 75);
    p.pop();
    if (!p.mouseIsPressed) {
    z6 = z6 + 1;
    x6 = x6 + 1;
    } else {
      z6 = z6 + 0.3;
    x6 = x6 + 0.3;
    }

    //7
    p.push();
    p.translate(p.windowWidth / -3.3, -50, 0);
    p.rotateZ(z7 * 0.01);
    p.rotateY(y7 * 0.02);
    p.rotateX(p.mouseX * 0.005);
    p.specularMaterial(255);
    p.box(50, 100, 50);
    p.pop();
    if (!p.mouseIsPressed) {
    z7 = z7 + 1;
    y7 = y7 + 1;
    } else {
      z7 = z7 + 0.3;
    y7 = y7 + 0.3;
    }

    //8
    p.push();
    p.translate(-p.windowWidth / 5.5, 50, 0);
    p.rotateZ(z8 * 0.01);
    p.rotateX(x8 * 0.005);
    p.rotateY(p.mouseY * 0.005);
    p.specularMaterial(255);
    p.box(25, 75, 75);
    p.pop();
    if (!p.mouseIsPressed) {
    z8 = z8 + 1;
    x8 = x8 + 1;
    } else {
      z8 = z8 + 0.3;
    x8 = x8 + 0.3;
    }

    //9
    p.push();
    p.translate(-p.windowWidth / 17, -50, 0);
    p.rotateZ(z9 * 0.01);
    p.rotateY(y9 * 0.01);
    p.rotateX(p.mouseX * 0.005);
    p.specularMaterial(255);
    p.box(75, 75, 75);
    p.pop();
    if (!p.mouseIsPressed) {
    z9 = z9 + 1;
    y9 = y9 + 1;
    } else {
      z9 = z9 + 0.3;
    y9 = y9 + 0.3;
    }

    //10
    p.push();
    p.translate(p.windowWidth / 17, 50, 0);
    p.rotateZ(z10 * 0.01);
    p.rotateX(x10 * 0.02);
    p.rotateY(p.mouseY * 0.005);
    p.specularMaterial(255);
    p.box(25, 150, 50);
    p.pop();
    if (!p.mouseIsPressed) {
    z10 = z10 + 1;
    x10 = x10 + 1;
    } else {
      z10 = z10 + 0.3;
    x10 = x10 + 0.3;
    }

    //11
    p.push();
    p.translate(p.windowWidth / 5.5, -50, 0);
    p.rotateZ(z11 * 0.02);
    p.rotateY(y11 * 0.005);
    p.rotateX(p.mouseX * 0.005);
    p.specularMaterial(255);
    p.box(50, 50, 100);
    p.pop();
    if (!p.mouseIsPressed) {
    z11 = z11 + 1;
    y11 = y11 + 1;
    } else {
      z11 = z11 + 0.3;
    y11 = y11 + 0.3;
    }

    //12
    p.push();
    p.translate(p.windowWidth / 3.3, 50, 0);
    p.rotateZ(z12 * 0.005);
    p.rotateX(x12 * 0.01);
    p.rotateY(p.mouseY * 0.005);
    p.specularMaterial(255);
    p.box(25, 25, 100);
    p.pop();
    if (!p.mouseIsPressed) {
    z12 = z12 + 1;
    x12 = x12 + 1;
    } else {
      z12 = z12 + 0.3;
    x12 = x12 + 0.3;
    }

    //13
    p.push();
    p.translate(p.windowWidth / -3.3, 150, 0);
    p.rotateZ(z13 * 0.01);
    p.rotateY(y13 * 0.02);
    p.rotateX(p.mouseX * 0.005);
    p.specularMaterial(255);
    p.box(125, 25, 25);
    p.pop();
    if (!p.mouseIsPressed) {
    z13 = z13 + 1;
    y13 = y13 + 1;
    } else {
      z13 = z13 + 0.3;
    y13 = y13 + 0.3;
    }

    //14
    p.push();
    p.translate(-p.windowWidth / 5.5, 250, 0);
    p.rotateZ(z14 * 0.017);
    p.rotateX(x14 * 0.013);
    p.rotateY(p.mouseY * 0.005);
    p.specularMaterial(255);
    p.box(75, 75, 40);
    p.pop();
    if (!p.mouseIsPressed) {
    z14 = z14 + 1;
    x14 = x14 + 1;
    } else {
      z14 = z14 + 0.3;
    x14 = x14 + 0.3;
    }

    //15
    p.push();
    p.translate(-p.windowWidth / 17, 150, 0);
    p.rotateZ(z15 * 0.005);
    p.rotateY(y15 * 0.01);
    p.rotateX(p.mouseX * 0.005);
    p.specularMaterial(255);
    p.box(100, 25, 50);
    p.pop();
    if (!p.mouseIsPressed) {
    z15 = z15 + 1;
    y15 = y15 + 1;
    } else {
      z15 = z15 + 0.3;
    y15 = y15 + 0.3;
    }

    //16
    p.push();
    p.translate(p.windowWidth / 17, 250, 0);
    p.rotateZ(z16 * 0.02);
    p.rotateX(x16 * 0.005);
    p.rotateY(p.mouseY * 0.005);
    p.specularMaterial(255);
    p.box(25, 100, 25);
    p.pop();
    if (!p.mouseIsPressed) {
    z16 = z16 + 1;
    x16 = x16 + 1;
    } else {
      z16 = z16 + 0.3;
    x16 = x16 + 0.3;
    }

    //17
    p.push();
    p.translate(p.windowWidth / 5.5, 150, 0);
    p.rotateZ(z17 * 0.01);
    p.rotateY(y17 * 0.01);
    p.rotateX(p.mouseX * 0.005);
    p.specularMaterial(255);
    p.box(70, 70, 50);
    p.pop();
    if (!p.mouseIsPressed) {
    z17 = z17 + 1;
    y17 = y17 + 1;
    } else {
      z17 = z17 + 0.3;
    y17 = y17 + 0.3;
    }


    //18
    p.push();
    p.translate(p.windowWidth / 3.3, 250, 0);
    p.rotateZ(z18 * 0.02);
    p.rotateX(x18 * 0.01);
    p.rotateY(p.mouseY * 0.005);
    p.specularMaterial(255);
    p.box(75, 75, 25);
    p.pop();
    if (!p.mouseIsPressed) {
    z18 = z18 + 1;
    x18 = x18 + 1;
    } else {
      z18 = z18 + 0.3;
    x18 = x18 + 0.3;
    }

  }

  p.mousePressed = function () {
    // p.frameCount = 0;
    // z18 = 0;
    // x18 = 0;
  }

};





var sketch2 = function(p) {

  p.setup = function() {
    let c = p.createCanvas(p.windowWidth, p.windowHeight);

    c.elt.style.position = 'fixed'
    c.elt.style.left = '0'
    c.elt.style.top = '0'
    p.frameRate(10);
  }

  p.draw = function() {

    p.strokeWeight(2);
    p.stroke(p.random(200, 150), p.random(250, 200), p.random(250, 200));
    p.background(0, 100);
    p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    p.noCursor()
  }


};

new p5(sketch2);
new p5(sketch);
