/*  Write a program that will ask for user's name.
The program will then greet the user.
If the user writes "name!" then the computer yells back to the user.

Request name from user
Check to see if last character is !
If yes, respond in caps. If no, respond normally.

*/

const READLINE = require("readline-sync");

function prompt(str) {
  console.log(str);
}
function requestName() {
  return READLINE.question("What is your name? ");
}
function displayGreeting(name) {
  if (name[name.length - 1] === "!") {
    name = name.slice(0, -1);
    prompt(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
  }
  else {
    prompt(`Hello ${name}.`);
  }
}

displayGreeting(requestName());