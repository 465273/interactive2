
function setup() {
  let c = createCanvas(windowWidth, windowHeight);

  c.elt.style.position = 'fixed'
  c.elt.style.left = '0'
  c.elt.style.top = '0'
  frameRate(20);
}

function draw() {
    strokeWeight(10);
    stroke(random(250,0), random(250,0), random(250,0));
  background(255);
  line(mouseX, mouseY, pmouseX, pmouseY);
  noCursor()

}
