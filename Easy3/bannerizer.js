/* Write a function that will take a short line of text, a
nd write it to the console log within a box.

*/

function bannerizer(string) {
  let outterLine = "+-";
  let innerLine = "| ";
  for(let i = 0; i <= string.length; i++) {
    if (i !== string.length) {
      outterLine += "-";
      innerLine += " ";
    } else {
      outterLine += "-+";
      innerLine += " |";
    }
  }
  console.log(outterLine);
  console.log(innerLine);
  console.log(`| ${string} |`);
  console.log(innerLine);
  console.log(outterLine);
}

bannerizer("Check Out This Cool Ass Box!");