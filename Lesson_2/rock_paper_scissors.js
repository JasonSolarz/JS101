/* Rock Paper Scissors

1. The user makes a choice
2. The computer makes a choice
3. The winner is displayed
*/

const READLINE = require("readline-sync");
const FILE = require("./rock_paper_scissors.json");
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function returnWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if ((userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")) {
    return ("You win!");
  } else if ((userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")) {
    return ("Computer wins!");
  } else {
    return ("It's a tie..");
  }
}

prompt(FILE.welcomeMessage);

let playAgain;

do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = READLINE.question().toLowerCase();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt(FILE.invalidChoice);
    userChoice = READLINE.question();
  }

  let randomIndex = Math.round(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(returnWinner(userChoice, computerChoice));

  prompt(FILE.playAgain);
  playAgain = READLINE.question().toLowerCase();
  while (playAgain[0] !== "n" && playAgain[0] !== "y") {
    prompt(FILE.invalidPlayAgain);
    playAgain = READLINE.question().toLowerCase();
  }
} while (playAgain === 'y');