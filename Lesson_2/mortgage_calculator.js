/* Mortgage Calculator

Requires three pieces of information:

 - The loan amount
 - The Annual Percentage Rate (APR)
 - The loan duration

 Casual PsuedoCode

 Request loan amount as a number
 Request Annual Percentage Rate (APR) as a number
 Request the load duration in months

 Convert APR to Montlhy interest rate

 Calculate loan amount

 Output calculation with fixed deciment of 2

*/

const jsonFile = require("./mortgage_calculator.json");
const readline = require("readline-sync");
let answer = "";

function prompt(string) {
  console.log(string);
}

console.log(jsonFile.welcome);

do {
  let loanAmount = Number(readline.question(jsonFile.loanAmount));
  while (isNaN(loanAmount) || loanAmount <= 0) {
    prompt(jsonFile.validLoanAmount);
    loanAmount = Number(readline.question(jsonFile.loanAmount));
  }

  let percentRate = Number(readline.question(jsonFile.percentRate) * .01);
  while (isNaN(percentRate) || percentRate < 0) {
    prompt(jsonFile.validAPR);
    percentRate = Number(readline.question(jsonFile.percentRate) * .01);
  }

  let totalMonths = Number(readline.question(jsonFile.loanDuration));
  while (isNaN(totalMonths) || totalMonths < 0) {
    prompt(jsonFile.validDuration);
    totalMonths = Number(readline.question(jsonFile.loanDuration));
  }

  let monthlyAPR = Number(percentRate / totalMonths);
  let monthlyPayment = loanAmount * (monthlyAPR / (1 - Math.pow((1 + monthlyAPR), (-totalMonths))));
  let totalLoanAmount = (totalMonths * monthlyPayment).toFixed(2);


  prompt(jsonFile.totalLoanAmount + totalLoanAmount);
  prompt(jsonFile.monthlyPayment + monthlyPayment.toFixed(2));

  prompt(jsonFile.answer);
  answer = readline.question().toLowerCase();
  while (answer[0] !== "y" && answer[0] !== "n") {
    console.log("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

}while(answer[0] === "y");