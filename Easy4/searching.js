/* Searching 101

Write a program that solicits six numbers from the user and logs a message 
that describes whether the sixth number appears among the first five numbers.
*/

const readline = require("readline-sync");
let numbers = [];
let searchNumber;

numbers[0] = readline.question("Enter the 1st number: ");
numbers[1] = readline.question("Enter the 2nd number: ");
numbers[2] = readline.question("Enter the 3rd number: ");
numbers[3] = readline.question("Enter the 4th number: ");
numbers[4] = readline.question("Enter the 5th number: ");
searchNumber = readline.question("Enter the last number: ");

if (numbers.includes(searchNumber)) {
  console.log(`The number ${searchNumber} appears in ${numbers}`)
} else {
  console.log(`It does not appear in ${numbers}`);
}