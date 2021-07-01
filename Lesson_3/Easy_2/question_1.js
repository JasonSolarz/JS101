//Question
//Given a string, return a new string that replaces
//every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

const regex = /important/g;
console.log(advice.replace(regex, "urgent"));

//Answer
//Using regex, we can declare a global replacement using the keyword g after
//the search term.