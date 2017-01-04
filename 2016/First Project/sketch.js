var numberDots;
var canvasWidth = 600;
var canvasHeight = 600;

function setup() {
  numberDots = random(600, 1000);
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketch-holder');
  noLoop();
}

function draw() {
  for (var i = 0; i < numberDots; i++){
    ellipse(random(canvasWidth), random(canvasHeight), 5, 5);
  }
}
/*
class Walker() {
  int x;
  int y;

  Walker() {
    x = width/2;
    y = height/2;
  }

  void display(){
    stroke(0);
    point(x,y);
  }

  void step(){
    int select = int(random(4));
    if (select == 0){
      x++;
    } else if (select == 1) {
      x--;
    } else if (select == 2) {
      y++;
    } else if (select == 3) {
      y--;
    }
  }
}*/
