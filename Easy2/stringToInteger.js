function stringToInteger(str) {

  let multiplier = 1;
  let newNum = 0;
  for (let lcv = str.length - 1; lcv >= 0; lcv--) {
    switch (str[lcv]) {
      case "1":
        newNum += 1 * multiplier;
        break;
      case "2":
        newNum += 2 * multiplier;
        break;
      case "3":
        newNum += 3 * multiplier;
        break;
      case "4":
        newNum += 4 * multiplier;
        break;
      case "5":
        newNum += 5 * multiplier;
        break;
      case "6":
        newNum += 6 * multiplier;
        break;
      case "7":
        newNum += 7 * multiplier;
        break;
      case "8":
        newNum += 8 * multiplier;
        break;
      case "9":
        newNum += 9 * multiplier;
        break;
      default:
    }
    multiplier *= 10;
  }
  return newNum;
}

console.log(stringToInteger("4321"));
console.log(stringToInteger("570"));