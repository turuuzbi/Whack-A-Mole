const holeContainer = document.querySelector("#hole-container");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
let time = document.querySelector("#time");
let score = document.querySelector("#score");
let moleTime = null;
let timeCounter = null;
let current = null;
function startWhacking() {
  for (let i = 0; i < 9; i++) {
    const Hole = document.createElement("div");
    Hole.id = i.toString();
    Hole.classList.add("Hole");
    holeContainer.appendChild(Hole);
    const Mole = document.createElement("div");
    Hole.appendChild(Mole);
    Mole.classList.add("Mole");
    Hole.querySelector(".Mole").addEventListener("click", function () {
      Hole.querySelector(".Mole").style.display = "none";
      score.innerHTML = Number(score.innerText) + 1;
    });
  }
}

function showMole() {
  if (current !== null) {
    document.getElementById(current).querySelector(".Mole").style.display =
      "none";
  }
  const randomNumber = Math.floor(Math.random() * 9);
  const currentHole = document.getElementById(randomNumber);
  current = randomNumber;
  currentHole.querySelector(".Mole").style.display = "block";
}

startWhacking();

function timeHandler() {
  if (time.innerText > 0) {
    time.innerText = Number(time.innerText) - 1;
  } else {
    clearInterval(moleTime);
    clearInterval(timeCounter);
    const lastMole = document.getElementById(current);
    lastMole.querySelector(".Mole").style.display = "none";
  }
}

function restartGame() {
  for (let i = 0; i < 9; i++) {
    const Hole = document.querySelector(".Hole");
    const Mole = Hole.querySelector(".Mole");
    Mole.style.display = "none";
  }
  clearInterval(moleTime);
  clearInterval(timeCounter);
  time.innerHTML = 3;
  score.innerHTML = 0;
  const lastMole = document.getElementById(current);
  lastMole.querySelector(".Mole").style.display = "none";
}

startButton.addEventListener("click", function () {
  moleTime = setInterval(showMole, 1000);
  timeCounter = setInterval(timeHandler, 1000);
});
restartButton.addEventListener("click", function () {
  restartGame();
});
