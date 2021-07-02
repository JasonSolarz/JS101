/* MADLIBS

Madlibs is a simple game where you create a story template with "blanks" for words. 
You, or another player, then construct a list of words and place them into the story, 
creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an 
adjective, and injects them into a story that you create.
*/

function promptUser(question) {
  let readline = require("readline-sync");
  let input = "";

  while(!verifyInput(input)) {
    input = readline.question(`${question} `);
  }

  return input.toLowerCase();
}

function verifyInput(input) {
  if ((input.trim().length > 0) && !(input >= 0) && !(input <= 0)) {
    return true;
  } else {
    return false;
  }
}

function getStory(noun, verb, adjective, adverb) {
  let story = `Do you ${verb} your ${noun} ${adverb}? That's hilarious!\n\n` +
  `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.\n\n` +
  `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

  return story;  
}

let noun = promptUser("Enter a noun:");
let verb = promptUser("Enter a verb:");
let adjective = promptUser("Enter an adjective:");
let adverb = promptUser("Enter an adverb:");

console.log(getStory(noun, verb, adjective, adverb));