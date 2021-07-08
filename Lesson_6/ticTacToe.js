const readline = require("readline-sync");
const INITIAL_MARKER = " ";
const PLAYER_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7,8,9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function displayBoard(board) {
  console.clear();

  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);
  
  console.log("");
  console.log(`     |     |`);
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log('     |     |');
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log(`     |     |`);
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function someoneWonMatch(score) {
  return !!detectMatchWinner(score);
}

function joinOr(arr, delimiter = ", ", word = "or") {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function initializeScore() {
  return {
    "Player": 0,
    "Computer": 0,
    "CurrentRound": 1,
    "MatchRoundWin": 3
  }
}

function updateScore(score, winner) {
  score[winner] += 1;
}

function printScore(score) {
  console.log(`Round ${score["CurrentRound"]} - Best of ${score["MatchRoundWin"]} - Player: ${score["Player"]} Computer: ${score["Computer"]}`);
}

function updateRound(score) {
  score["CurrentRound"] += 1;
}

function getRound(score) {
  return score["CurrentRound"];
}

function detectMatchWinner(score) {
  if (score["Player"] === score["MatchRoundWin"]) {
    return "Player";
  } else if (score["Computer"] === score["MatchRoundWin"]) {
    return "Computer";
  } else {
    return null;
  }
}

function detectWinner(board) {


  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if ( 
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
        return "Player";
    } else if 
    (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    console.log(`Choose a square (${joinOr(emptySquares(board))}): `);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    console.log("Sorry, that's not a valid choice.");
  }
  board[square] = PLAYER_MARKER;
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board);
    if (square) break;
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function findAtRiskSquare(line, board) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === "O").length === 2) {
    let unusedSquare = line.find(square => board[square] === " ");
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  if (markersInLine.filter(val => val === "X").length === 2) {
    let unusedSquare = line.find(square => board[square] === " ");
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  if (board[5] === " ") {
   return 5;
  }

  return null;
}

function playAgain() {
  let play;

  while (true) {
    let answer = readline.question("Play again? (y or n): ").trim().toLowerCase();

    if (answer === "y" || answer === "yes") {
      play = true;
      break;
    } else if (answer === "n" || answer === "no") {
      play = false;
      break;
    } else {
      console.log("Invalid Answer.");
    }
  }

  return play;
}
function main() {

  let score = initializeScore();

  while (true) {
    let board = initializeBoard();
    let playerGoesFirst = Math.round(Math.random());

    

    while (true) {
      displayBoard(board);
      printScore(score);

      if(playerGoesFirst) {
        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;

        computerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
      } else {
        computerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;

        displayBoard(board);
        printScore(score);

        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
      }
    }

    displayBoard(board);

    if (someoneWon(board)) {
      console.log(`${detectWinner(board)} won the round!`);
      readline.question("Press any key to continue...");
      updateScore(score, detectWinner(board));
      printScore(score);
    } else {
      console.log("It's a tie!");
    }

    if (someoneWonMatch(score)) {
      console.log(`${detectMatchWinner(score)} WON the match!`);
      if (!playAgain()) {
        break;
      } else {
        score = initializeScore();
      }
    } 
  }
}

main();