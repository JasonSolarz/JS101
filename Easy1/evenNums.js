//**Problem**/
//Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

function evenNums(startNum, endNum) {
  for(startNum; startNum < endNum; startNum++) {
    if(startNum % 2 === 0) {
      console.log(startNum);
    }
  }
}

evenNums(1, 99);