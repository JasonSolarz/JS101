/* Rock Paper Scissors

1. The user makes a choice
2. The computer makes a choice
3. The winner is displayed
*/

const READLINE = require("readline-sync");
const FILE = require("./rock_paper_scissors.json");
const DISPLAY_VALID_CHOICES = ["(r)ock", "(p)aper", "(s)cissors", "(l)izard", "(sp)ock"];
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function returnWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if ((userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
    (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
    (userChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) ||
    (userChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))) {
    updateScore([1, 0]);
    return (FILE.playerWinRound);
  } else if (userChoice === computerChoice) {
    return (FILE.roundTie);
  } else {
    updateScore([0, 1]);
    return (FILE.compWinRound);
  }
}

function convertUserChoice(userChoice) {
  switch (userChoice) {
    case "r":
      return "rock";
    case "p":
      return "paper";
    case "s":
      return "scissors";
    case "l":
      return "lizard";
    case "sp":
      return "spock";
    default:
      return userChoice;
  }
}

let score = [0, 0];

function updateScore([player, computer]) {
  score[0] += player;
  score[1] += computer;
}

prompt(FILE.welcomeMessage);

let playAgain;

do {

  while (true) {
    prompt(`Choose one: ${DISPLAY_VALID_CHOICES.join(', ')}`);
    let userChoice = convertUserChoice(READLINE.question().toLowerCase());

    while (!VALID_CHOICES.includes(userChoice)) {
      prompt(FILE.invalidChoice);
      userChoice = convertUserChoice(READLINE.question().toLowerCase());
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(returnWinner(userChoice, computerChoice));

    console.log(`Player Score: ${score[0]}\nComputer Score: ${score[1]}\n`);

    if (score[0] === 5) {
      prompt(FILE.playerWinGame);
      break;
    } else if (score[1] === 5) {
      prompt(FILE.compWinRound);
      break;
    }
  }

  prompt(FILE.playAgain);
  playAgain = READLINE.question().toLowerCase();
  while (playAgain[0] !== "n" && playAgain[0] !== "y") {
    prompt(FILE.invalidPlayAgain);
    playAgain = READLINE.question().toLowerCase();
  }

  score = [0, 0];

} while (playAgain === 'y');