/* When Will I Retire?

Build a program that logs when the user will retire and how many more 
years the user has to work until retirement.
*/

function getUserAge() {
  const readline = require("readline-sync");
  let age = readline.question("What is your age? ");

  return age;
}

function getCurrentYear() {
  let today = new Date();

  return today.getFullYear();
}

function getRetireAge() {
  const readline = require("readline-sync");
  let retireAge = readline.question("At what age would you like to retire? ");

  return retireAge;
}

function displayRetireInformation(age, retireAge, currentYear) {
  let difference = retireAge - age;
  let retireYear = Number(difference) + Number(currentYear);
  console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
  console.log(`You have only ${difference} years of work to go!`); 
}


displayRetireInformation(getUserAge(), getRetireAge(), getCurrentYear());