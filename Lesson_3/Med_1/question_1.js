/* For this practice problem, write a program that outputs The Flintstones Rock!
10 times, with each line indented 1 space to the right of the line above it. */

function printText(str, numTimes) {
  for(let lcv = 0; lcv < numTimes; lcv++) {
    console.log(str.padStart(lcv + str.length));
  }

}

printText("The Flintstones Rock!", 10);
