/* Write a program that prompts the user for two positive integers, 
and then prints the results of the following operations on those two numbers: 
addition, subtraction, product, quotient, remainder, and power. 
Do not worry about validating the input.

Break the problem down:

GET two integers from the user
Print out all operations +, -, *, /, %, **

*/

function arithmetic() {
  const READLINE = require("readline-sync");
  num1 = Number(READLINE.question("Enter the first number: "));
  num2 = parseInt(READLINE.question("Enter the second number: "));

  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
}

arithmetic();