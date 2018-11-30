function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  strokeWeight(0);
  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  ambientLight(30);
  directionalLight(200, 200, 200, 0.25, 0.25, 0.25);
  pointLight(210, 255, 255, locX, locY, 250);

//1
  push();
  translate(windowWidth/-3.3, -250, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(75, 50, 25);
  pop();

//2
  push();
  translate(-windowWidth/5.5, -150, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseY * 0.005);
  ambientMaterial(255);
  box(25, 30, 150);
  pop();

//3
  push();
  translate(-windowWidth/17, -250, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  ambientMaterial(255);
  box(50, 25, 100);
  pop();

//4
  push();
  translate(windowWidth/17, -150, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseY * 0.005);
  ambientMaterial(255);
  box(50, 25, 100);
  pop();

//5
  push();
  translate(windowWidth/5.5, -250, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.005);
  rotateY(mouseX * 0.005);
  ambientMaterial(255);
  box(25, 25, 150);
  pop();

//6
  push();
  translate(windowWidth/3.3, -150, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.00);
  rotateY(mouseY * 0.005);
  ambientMaterial(255);
  box(75, 50, 75);
  pop();

//7
  push();
  translate(windowWidth/-3.3, -50, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(mouseY * 0.005);
  ambientMaterial(255);
  box(50, 100, 50);
  pop();

//8
  push();
  translate(-windowWidth/5.5, 50, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.005);
  rotateY(mouseX * 0.005);
  ambientMaterial(255);
  box(25, 75, 75);
  pop();

//9
  push();
  translate(-windowWidth/17, -50, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(mouseY * 0.005);
  ambientMaterial(255);
  box(75, 75, 75);
  pop();

//10
  push();
  translate(windowWidth/17, 50, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  ambientMaterial(255);
  box(25, 150, 50);
  pop();

//11
  push();
  translate(windowWidth/5.5, -50, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseY * 0.005);
  ambientMaterial(255);
  box(50, 50, 100);
  pop();

//12
  push();
  translate(windowWidth/3.3, 50, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.01);
  rotateY(mouseX * 0.005);
  ambientMaterial(255);
  box(25, 25, 100);
  pop();

//13
  push();
  translate(windowWidth/-3.3, 150, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  ambientMaterial(255);
  box(125, 25, 25);
  pop();

//14
  push();
  translate(-windowWidth/5.5, 250, 0);
  rotateZ(frameCount * 0.017);
  rotateX(frameCount * 0.013);
  rotateY(mouseY * 0.005);
  ambientMaterial(255);
  box(75, 75, 40);
  pop();

//15
  push();
  translate(-windowWidth/17, 150, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.01);
  rotateY(mouseX * 0.005);
  ambientMaterial(255);
  box(100, 25, 50);
  pop();

//16
  push();
  translate(windowWidth/17, 250, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseY * 0.005);
  ambientMaterial(255);
  box(25, 100, 25);
  pop();

//17
  push();
  translate(windowWidth/5.5, 150, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(mouseX * 0.005);
  ambientMaterial(255);
  box(70, 70, 50);
  pop();

//18
  push();
  translate(windowWidth/3.3, 250, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.01);
  rotateY(mouseY * 0.005);
  ambientMaterial(255);
  box(75, 75, 25);
  pop();
}
