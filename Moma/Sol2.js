/*
 * @name Multiple Lights
 * @description All types of lights could be used in one sketch.
 */
function setup() {
  createCanvas(1200, 700, WEBGL);

}

function draw() {
  background(0);



  strokeWeight(5);
//1
  push();
  translate(-500, -200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//2
  push();
  translate(-300, -200, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.005);
  rotateY(mouseY * 0.01);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//3
  push();
  translate(-100, -200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//4
  push();
  translate(100, -200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.01);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//5
  push();
  translate(300, -200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//6
  push();
  translate(500, -200, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.02);
  rotateY(mouseY * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//7
  push();
  translate(-500, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//8
  push();
  translate(-300, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//9
  push();
  translate(-100, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(150, 20, 50);
  pop();

//10
  push();
  translate(100, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//11
  push();
  translate(300, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//12
  push();
  translate(500, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//13
  push();
  translate(-500, 200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//14
  push();
  translate(-300, 200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//15
  push();
  translate(-100, 200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//16
  push();
  translate(100, 200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//17
  push();
  translate(300, 200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();

//18
  push();
  translate(500, 200, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.005);
  rotateY(mouseX * 0.005);
  specularMaterial(255);
  box(50, 50, 50);
  pop();
}
