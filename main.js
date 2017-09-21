var canvas = document.getElementById("canvas");
var puckArea = document.getElementById("puckArea");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var pen = canvas.getContext("2d");
var mid = canvas.width / 2;
var bottom = canvas.height - 30;
var puckX = mid;
var puckY = innerHeight / 2;
var gravity = 1;

pen.canvas.addEventListener("click", function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  if (mouseX < puckX + 30 && mouseY > puckY) {
    puck.moveLeft();
  }
  if (mouseX > puckX + 30 && mouseY > puckY) {
    puck.moveRight();
  }
  if (mouseY > puckY + 30) {
    puck.moveUp();
  }
  if (mouseY < puckY + 30) {
    pen.clearRect(0, 0, innerWidth, innerHeight);
    puck.drawPuck();
  }

  console.log("clicked");
});

var puck = {
  drawPuck: function() {
    pen.shadowColor = "white";
    pen.shadowBlur = 30;
    pen.fillStyle = "white";
    pen.fillRect(puckX, puckY, 30, 30);
  },
  moveLeft: function() {
    pen.clearRect(0, 0, innerWidth, innerHeight);
    puckX += 50;
    this.drawPuck();
  },
  moveRight: function() {
    pen.clearRect(0, 0, innerWidth, innerHeight);
    puckX -= 50;
    this.drawPuck;
  },
  moveUp: function() {
    pen.clearRect(0, 0, innerWidth, innerHeight);
    puckY -= 50;
    this.drawPuck();
  }
};

function keepInsideCanvas() {
  if (puckY > canvas.height - 30) {
    puckY -= 1;
  }
  if (puckX > canvas.width - 30) {
    puckX -= 1;
  }
}

function emulateGravity() {
  puck.drawPuck();
  puckY += 2;
  keepInsideCanvas();
  requestAnimationFrame(emulateGravity);
  console.log("emulateGravity running");
}

setInterval(function() {
  pen.clearRect(0, 0, innerWidth, innerHeight);
}, 1000 / 60);

emulateGravity();
