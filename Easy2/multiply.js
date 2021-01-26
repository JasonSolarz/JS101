/* Create a function that takes two arguments,
multiplies them together, and returns the result.

PseudoCode:

Ask user for two numbers
Store the numbers into an array
Multiple the numbers and return the value.

*/

const READLINE = require("readline-sync");

function requestTwoNumbers() {
  let numbers = [];
  let number = Number(READLINE.question("Please enter the first number: "));
  numbers.push(number);
  number = Number(READLINE.question("Please enter a second number: "));
  numbers.push(number);

  return numbers;
}

function multiplyNumbers(arr) {
  return arr[0] * arr[1];
}

console.log(multiplyNumbers(requestTwoNumbers()));