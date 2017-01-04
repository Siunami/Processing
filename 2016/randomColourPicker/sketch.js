var distance;
var red;
var green;
var blue;
var hasBegun = false;

function setup() {
  createCanvas(600,600);
  background(0);
  textSize(15);
  fill(255);
  textAlign(CENTER);
  text("Click the button to begin finding new RGB Colors!", width/2, height/2 - 200);
}

function draw() {
  distance = dist(width/2, height/2, mouseX, mouseY);
  var thisText = "Red: " + red + " Green: " + green + " Blue: " + blue;
  if(hasBegun){
    textAlign(CENTER);
    text(thisText, width/2, height/2 - 200);
  }
  fill(255);
  noStroke();
  ellipse(width/2, height/2, 100,100);
}

function mousePressed(){
  if (!hasBegun && distance <= 50){
    hasBegun = true;
  }
  if (distance <= 50){
    red = floor(random(0,255));
    green = floor(random(0,255));
    blue = floor(random(0,255));
    background(this.red, this.green, this.blue);
  }

}
