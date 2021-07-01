
function stringToInteger(string) {
  let newInteger = 0;
  let digitCounter = 1;

  for (let lcv = string.length; lcv > 0; lcv--) {
    if (string[lcv -1] === "-") {
      newInteger *= -1;
    } else if (string[lcv -1] === "+") {
      //do nothing
    } else {
      newInteger += string[lcv - 1] * digitCounter;
      digitCounter *= 10;
    }
  }

  return newInteger;
}

console.log(stringToInteger("-4555"));