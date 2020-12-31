/* Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive. */

let readline = require("readline-sync");
let userInteger;
let userChoice;

function getUserInteger() {
  let userInput;
  let validInput = false;
  do {
    userInput = Number(readline.question("Please enter an integer greater than 0: "));
    if(userInput > 0) {
      validInput = true;
    } else {
      console.log("Please enter a value greater than 0\n");
    }
  }while(!validInput);

  return userInput;
}

function getUserChoice() {
  let userInput;
  let validInput = false;
  do {
    userInput = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
    if(userInput.toLowerCase() === "s" || userInput.toLowerCase() === "p") {
      validInput = true;
    } else {
      console.log(`"${userInput}" is not a valid option. Please choose again.\n`);
    }
  }while(!validInput);

  return userInput;
}

function calculate(num, type) {
  if(type.toLowerCase() === "s") {
    let sum = 0;
    for(let lcv = 1; lcv <= num; lcv++) {
      sum = sum + lcv;
    }
    console.log(`The sum of the integers between 1 and ${num} is ${sum}`);
  } else if(type.toLowerCase() === "p") {
    let product = 1;
    for(let lcv = 1; lcv <= num; lcv++) {
      product = product * lcv;
    }
    console.log(`The product of the integers between 1 and ${num} is ${product}`);
  }
}

userInteger = getUserInteger();
userChoice = getUserChoice();
calculate(userInteger, userChoice);



