function setup() {
  createCanvas(windowWidth/1, windowHeight, WEBGL);
}

function draw() {
  background(0);
  strokeWeight(5);

//1
  push();
  translate(-500, -250, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(75, 50, 25);
  pop();

//2
  push();
  translate(-300, -150, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(25, 30, 150);
  pop();

//3
  push();
  translate(-100, -250, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 25, 100);
  pop();

//4
  push();
  translate(100, -150, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(50, 25, 100);
  pop();

//5
  push();
  translate(300, -250, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.005);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(25, 25, 150);
  pop();

//6
  push();
  translate(500, -150, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.00);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(75, 50, 75);
  pop();

//7
  push();
  translate(-500, -50, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(50, 100, 50);
  pop();

//8
  push();
  translate(-300, 50, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.005);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(25, 75, 75);
  pop();

//9
  push();
  translate(-100, -50, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(75, 75, 75);
  pop();

//10
  push();
  translate(100, 50, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(25, 150, 50);
  pop();

//11
  push();
  translate(300, -50, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(50, 50, 100);
  pop();

//12
  push();
  translate(500, 50, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.01);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(25, 25, 100);
  pop();

//13
  push();
  translate(-500, 150, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(125, 25, 25);
  pop();

//14
  push();
  translate(-300, 250, 0);
  rotateZ(frameCount * 0.017);
  rotateX(frameCount * 0.013);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(75, 75, 40);
  pop();

//15
  push();
  translate(-100, 150, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.01);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(100, 25, 50);
  pop();

//16
  push();
  translate(100, 250, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(25, 100, 25);
  pop();

//17
  push();
  translate(300, 150, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(70, 70, 50);
  pop();

//18
  push();
  translate(500, 250, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.01);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(75, 75, 25);
  pop();
}
