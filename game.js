const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define game constants
const BLOCK_SIZE = 10;
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

// Define game state variables
let snake = [{ x: 50, y: 50 }];
let direction = "right";
let food = null;

function drawSnake() {
  ctx.fillStyle = "green";
  snake.forEach(block => {
    ctx.fillRect(block.x, block.y, BLOCK_SIZE, BLOCK_SIZE);
  });
}

function updateSnake() {
  // Move snake in current direction
  let newHead = { x: snake[0].x, y: snake[0].y };
  if (direction === "right") {
    newHead.x += BLOCK_SIZE;
  } else if (direction === "left") {
    newHead.x -= BLOCK_SIZE;
  } else if (direction === "up") {
    newHead.y -= BLOCK_SIZE;
  } else if (direction === "down") {
    newHead.y += BLOCK_SIZE;
  }

  // Check for collision with walls or snake body
  if (newHead.x < 0 || newHead.x >= CANVAS_WIDTH || newHead.y < 0 || newHead.y >= CANVAS_HEIGHT) {
    gameOver();
    return;
  }
  if (snake.some(block => block.x === newHead.x && block.y === newHead.y)) {
    gameOver();
    return;
  }

  // Add new head and remove tail
  snake.unshift(newHead);
  if (newHead.x === food.x && newHead.y === food.y) {
    generateFood();
  } else {
    snake.pop();
  }
}

function generateFood() {
  // Generate new food block in random location
  food = {
    x: Math.floor(Math.random() * (CANVAS_WIDTH / BLOCK_SIZE)) * BLOCK_SIZE,
    y: Math.floor(Math.random() * (CANVAS_HEIGHT / BLOCK_SIZE)) * BLOCK_SIZE
  };

  // Check that food is not on top of snake
  if (snake.some(block => block.x === food.x && block.y === food.y)) {
    generateFood();
  }
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, BLOCK_SIZE, BLOCK_SIZE);
}

function update() {
  // Update game state
  updateSnake();

  // Clear canvas and draw game objects
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawSnake();
  drawFood();

  // Schedule next update
  setTimeout(() => requestAnimationFrame(update), 100);
}

function gameOver() {
  alert("Game over!");
  location.reload();
}

function handleKeyPress(event) {
  // Update direction based on arrow key press
  if (event.code === "ArrowRight" && direction !== "left") {
    direction = "right";
  } else if (event.code === "ArrowLeft"
