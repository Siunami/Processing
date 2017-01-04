function setup() {
  createCanvas(600,600);
  background(200);

}

function draw() {

}

function mouseMoved(){
  var grey = map(mouseX, 0, width, 0, 255);
  fill(grey);
  line(mouseX, mouseY, pmouseX, pmouseY);
  ellipse(mouseX, mouseY, 20, 20);
}