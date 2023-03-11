const player = document.getElementById("player");
const gameBoard = document.getElementById("gameBoard");
let playerX = 25;
let playerY = 175;

// Handle user input
document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
  if (event.keyCode === 37 || key.a) {  // Left arrow
    playerX -= 10;
    player.style.left = `${playerX}px`;
  }
  else if (event.keyCode === 39 || key.d) {  // Right arrow
    playerX += 10;
    player.style.left = `${playerX}px`;
  }
  else if (event.keyCode === 38 || key.w) {  // Up arrow
    playerY -= 10;
    player.style.top = `${playerY}px`;
  }
  else if (event.keyCode === 40 || key.s) {  // Down arrow
    playerY += 10;
    player.style.top = `${playerY}px`;
  }
}

// Game loop
function gameLoop() {
  // Update game state

  // Draw game board

  // Check for collisions

  // Update score

  // Check for game over
}

// Start game loop
const gameInterval = setInterval(gameLoop, 50);
