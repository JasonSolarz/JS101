/* Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line. */

function logOdds(startNum, endNum) {
  for(startNum; startNum <= endNum; startNum++) {
    if(startNum % 2 !== 0) {
      console.log(startNum);
    }
  }
}

logOdds(1, 99);