let scores, roundScore, activePlayer, gamePlaying;

function init() {
  // set defaults for when a new game gets initialized
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById("global-score-1").textContent = "0";
  document.getElementById("global-score-2").textContent = "0";

  document.getElementById("current-score-1").textContent = "0";
  document.getElementById("current-score-2").textContent = "0";

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";

  document.getElementById("winner-id").textContent = "";
  document.getElementById("winner-id").style.display = "none";

  // to set the state of whos playing
  updateUI();
}

init();

function rollDice() {
  if (gamePlaying) {
    // math.random() * 6 for a number between 0 and 5, then + 1 for a range of 1-6
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    // get dice to include the png provided
    let diceDOM1 = document.getElementById("dice-1");
    let diceDOM2 = document.getElementById("dice-2");
    diceDOM1.style.display = "block";
    diceDOM2.style.display = "block";

    diceDOM1.src = "dice-" + dice1 + ".png";
    diceDOM2.src = "dice-" + dice2 + ".png";

    // if the player rolls 2 sixes, make the current score 0 and pop a modal / warning
    if (dice1 === 6 && dice2 === 6) {
      document.getElementById(
        "current-score-" + (activePlayer + 1)
      ).textContent = "0";

      document
        .querySelector(".player-" + (activePlayer + 1) + "-panel")
        .classList.add("warning");
      document.getElementById("customModal").style.display = "block";

      // if the player rolled valid numbers, add score
    } else if (dice1 !== 0 && dice2 !== 0) {
      // Add score
      roundScore += dice1 + dice2;
      document.getElementById(
        "current-score-" + (activePlayer + 1)
      ).textContent = roundScore;
    }
  }
}

// close the popup modal and remove the warning class, also toggles next player
function closeModal() {
  document.getElementById("customModal").style.display = "none";
  document
    .querySelector(".player-" + (activePlayer + 1) + "-panel")
    .classList.remove("warning");
  nextPlayer();
}

// adds current score to the overall score of the activePlayer
// also checks if overall score is higher than whats in the input box and declares activePlayer a winner if score[activePlayer] > winningScore
function holdDice() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.getElementById("global-score-" + (activePlayer + 1)).textContent =
      scores[activePlayer];

    let input = document.getElementById("winning-score").value;
    let winningScore = input ? input : 100;

    if (scores[activePlayer] >= winningScore) {
      document.getElementById("winner-id").textContent = `Player ${
        activePlayer + 1
      } Won the game! GGs to them`;
      document.getElementById("winner-id").style.display = "block";
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
}
// adds a class to the activePlayer, removes active class from activePlayer when switching turns
function updateUI() {
  document
    .querySelectorAll(".active")
    .forEach((el) => el.classList.remove("active"));

  document
    .querySelectorAll(".inactive")
    .forEach((el) => el.classList.remove("inactive"));

  document
    .querySelector("#player-" + (activePlayer + 1) + "-wrapper")
    .classList.add("active");
  let inactivePlayer = activePlayer == 1 ? 1 : 2;
  document
    .querySelector("#player-" + inactivePlayer + "-wrapper")
    .classList.add("inactive");
}

// toggles next player, hides current dice and sets current score of both players to 0
function nextPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;

  document.getElementById("current-score-1").textContent = "0";
  document.getElementById("current-score-2").textContent = "0";

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
  updateUI();
}
