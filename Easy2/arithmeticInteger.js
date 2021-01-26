/* Write a program that prompts the user for two positive integers, and
then prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power.
Do not worry about validating the input.

*/

const READLINE = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

function requestTwoNumbers() {
  let numbers = [];
  let number = Number(READLINE.question(prompt("Enter the first number: ")));
  numbers.push(number);
  number = Number(READLINE.question(prompt("Enter the second number: ")));
  numbers.push(number);

  return numbers;
}

function arithmeticInteger(numbers) {
  prompt(`${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}`);
  prompt(`${numbers[0]} - ${numbers[1]} = ${numbers[0] - numbers[1]}`);
  prompt(`${numbers[0]} * ${numbers[1]} = ${numbers[0] * numbers[1]}`);
  prompt(`${numbers[0]} / ${numbers[1]} = ${Math.floor(numbers[0] / numbers[1])}`);
  prompt(`${numbers[0]} % ${numbers[1]} = ${numbers[0] % numbers[1]}`);
  prompt(`${numbers[0]} ** ${numbers[1]} = ${Math.pow(numbers[0], numbers[1])}`);
}

arithmeticInteger(requestTwoNumbers());