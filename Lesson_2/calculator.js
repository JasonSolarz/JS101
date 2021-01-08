// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require("readline-sync");
const jsonFile = require("./calculator_messages.json");

let calcAgain = "";

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(jsonFile.promptLang);
let language = readline.question();
while (!["1", "2"].includes(language)) {
  prompt(jsonFile.invalidLang);
  language = readline.question();
}

if (language === "1") {
  language = "english";
} else if (language === "2") {
  language = "chinese";
}

prompt(jsonFile[language].welcome);
let name = readline.question();

do {

  prompt(jsonFile[language].prompt1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(jsonFile[language].invalidNumber);
    number1 = readline.question();
  }

  prompt(jsonFile[language].prompt2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(jsonFile[language].invalidNumber);
    number2 = readline.question();
  }

  prompt(jsonFile[language].chooseOperation);
  let operation = readline.question();

  while (!jsonFile[language].validOperations.includes(operation)) {
    prompt(jsonFile[language].validOperationMsg);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
    default:
      prompt(jsonFile.invalidOperationMsg);
  }

  console.log(jsonFile[language].result + output);

  prompt(jsonFile[language].playAgainMsg);
  calcAgain = readline.question();

  while (!jsonFile[language].validPlayAgain.includes(calcAgain)) {
    prompt(jsonFile[language].invalidPlayAgainMsg);
    calcAgain = readline.question();
  }

} while (calcAgain[0].toLowerCase() === "y");

console.log(name + jsonFile[language].goodBye);