var socket;
var r;
var g;
var b;

function setup() {
  socket = io.connect('http://127.0.0.1:3000');
  socket.on('mouse', newDrawing);
  r = random(255);
  g = random(255);
  b = random(255);
  createCanvas(600,400);
  background(51);
}

function newDrawing(data) {
  noStroke();
  fill(data.red, data.green, data.blue);
  ellipse(data.x, data.y, 36, 36)
}

function mouseDragged() {
  console.log('Sending ' + mouseX + ',' + mouseY + ',' + r + ',' + g + ',' + b);

  var data = {
    x: mouseX,
    y: mouseY,
    red: r,
    green: g,
    blue: b
  }

  socket.emit('mouse', data);

  noStroke();
  fill(r,g,b);
  ellipse(mouseX,mouseY,36,36);
}

function draw() {

}
