/* Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.` */

let munstersDescription = "The Munsters are creepy and spooky.";

function flipCase(str) {
  let newCase = "";

  for(let lcv = 0; lcv < str.length; lcv++) {
    if(str[lcv] === str[lcv].toUpperCase()) {
      newCase += str[lcv].toLowerCase();
    } else if (str[lcv] === str[lcv].toLowerCase()) {
      newCase += str[lcv].toUpperCase();
    }
  }

  return newCase;
}


console.log(flipCase(munstersDescription));


//Another solution

munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");