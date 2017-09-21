var canvas = document.getElementById("canvas");
var puckArea = document.getElementById("puckArea");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var pen = canvas.getContext("2d");
var mid = canvas.width / 2;
var bottom = canvas.height - 30;
var puckX = mid;
var puckY = innerHeight / 2;

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
    puck.clearPuck();
    puck.drawPuck();
  }
});

var puck = {
  drawPuck: function() {
    pen.shadowColor = "white";
    pen.shadowBlur = 30;
    pen.fillStyle = "white";
    pen.fillRect(puckX, puckY, 30, 30);
  },
  clearPuck: function() {
    pen.clearRect(0, 0, innerWidth, innerHeight);
  },
  moveLeft: function() {
    this.clearPuck();
    puckX += 50;
    this.drawPuck();
  },
  moveRight: function() {
    this.clearPuck();
    puckX -= 50;
    this.drawPuck;
  },
  moveUp: function() {
    this.clearPuck();
    puckY -= 50;
    this.drawPuck();
  }
};

function declareGameOver() {
  if (puckY > canvas.height - 30) {
    puckArea.innerHTML = "Game Over";
  }
  if (puckX > canvas.width - 30) {
    puckArea.innerHTML = "Game Over";
  }
}

function emulateGravity() {
  puck.drawPuck();
  puckY += 2;
  declareGameOver();
  requestAnimationFrame(emulateGravity);
  setInterval(function() {
    puck.clearPuck();
  }, 1000 / 60);
}

emulateGravity();
