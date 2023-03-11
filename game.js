const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 50;
let speed = 5;

function update() {
  // Move player based on arrow keys
  if (keys.ArrowLeft || keys.a) {
    x -= speed;
  }
  if (keys.ArrowRight || keys.d) {
    x += speed;
  }
  if (keys.ArrowUp || keys.w) {
    y -= speed;
  }
  if (keys.ArrowDown || keys.s) {
    y += speed;
  }

  // Draw player
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x, y, 50, 50);

  // Schedule next update
  requestAnimationFrame(update);
}

// Track arrow key state
const keys = {};
window.addEventListener("keydown", event => {
  keys[event.key] = true;
});
window.addEventListener("keyup", event => {
  keys[event.key] = false;
});

// Start game loop
requestAnimationFrame(update);
