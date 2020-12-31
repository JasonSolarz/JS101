/* Create a simple tip calculator. 
The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers.  */

function tipCalculator() {
  let readline = require("readline-sync");
  let bill = Number(readline.question("What is the bill? "));
  let tipPercentage = Number(readline.question("What is the tip percentage? ") / 100);
  let tip = bill * tipPercentage;

  console.log(`The tip is ${tip.toFixed(2)}`);
  console.log(`The total is $${(bill + tip).toFixed(2)}`);
}

tipCalculator();