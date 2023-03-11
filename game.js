const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game variables
let birdX = 50;
let birdY = 300;
let birdVelocity = 0;
let gravity = 0.5;
let pipeX = 400;
let pipeGap = 150;
let pipeWidth = 50;
let pipeHeight = 300;
let score = 0;
let gameOver = false;

// Load images
const birdImg = new Image();
birdImg.src = "bird.png";
const pipeImg = new Image();
pipeImg.src = "pipe.png";

// Handle user input
document.addEventListener("keydown", flap);

function flap(event) {
  if (event.keyCode === 32) {  // Space bar
    birdVelocity = -10;
  }
}

// Game loop
function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw bird
  ctx.drawImage(birdImg, birdX, birdY, 50, 50);

  // Draw pipes and check for collision
  pipeX -= 5;
  if (pipeX < -pipeWidth) {
    pipeX = canvas.width;
    pipeHeight = Math.random() * 200 + 100;
    score++;
  }
  ctx.drawImage(pipeImg, pipeX, 0, pipeWidth, pipeHeight);
  ctx.drawImage(pipeImg, pipeX, pipeHeight + pipeGap, pipeWidth, canvas.height - pipeHeight - pipeGap);
  if (birdX + 50 > pipeX && birdX < pipeX + pipeWidth && (birdY < pipeHeight || birdY + 50 > pipeHeight + pipeGap)) {
    gameOver = true;
  }

  // Update bird position and velocity
  birdVelocity += gravity;
  birdY += birdVelocity;
  if (birdY > canvas.height - 50) {
    gameOver = true;
  }

  // Update score and check for game over
  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
  ctx.fillText(`Score: ${score}`, 20, 50);
  if (gameOver) {
    clearInterval(gameInterval);
    ctx.fillText("Game Over", canvas.width/2 - 80, canvas.height/2);
  }
}

// Start game loop
const gameInterval = setInterval(gameLoop, 50);
