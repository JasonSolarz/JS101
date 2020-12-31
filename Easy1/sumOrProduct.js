/* Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive. */

let readline = require("readline-sync");

let userInteger = Number(readline.question("Please enter an integer greater than 0: "));
let userChoice = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if(userChoice.toLowerCase() === "s") {
  let sum = 0;
  for(let lcv = 1; lcv <= userInteger; lcv++) {
    sum = sum + lcv;
  }
  console.log(`The sum of the integers between 1 and ${userInteger} is ${sum}`);
} else if(userChoice.toLowerCase() === "p") {
  let product = 1;
  for(let lcv = 1; lcv <= userInteger; lcv++) {
    product = product * lcv;
  }
  console.log(`The product of the integers between 1 and ${userInteger} is ${product}`);
}

