const gameBoard = document.getElementById("gameBoard");
const startButton = document.getElementById("startButton");
let score = 0;

function startGame() {
  // Clear game board and set up mole positions
  gameBoard.innerHTML = "";
  const numMoles = 9;
  for (let i = 0; i < numMoles; i++) {
    const mole = document.createElement("div");
    mole.classList.add("mole");
    mole.addEventListener("click", whackMole);
    gameBoard.appendChild(mole);
  }

  // Show moles at random intervals
  let moleTimer = setInterval(() => {
    const moles = document.querySelectorAll(".mole");
    const randomIndex = Math.floor(Math.random() * moles.length);
    const mole = moles[randomIndex];
    mole.style.display = "block";
    setTimeout(() => mole.style.display = "none", 1000);
  }, 1000);

  // End game after 30 seconds
  setTimeout(() => {
    clearInterval(moleTimer);
    alert(`Game over! Your score is ${score}.`);
    location.reload();
  }, 30000);
}

function whackMole(event) {
  // Increase score and hide mole
  score++;
  event.target.style.display = "none";
}

startButton.addEventListener("click", startGame);
