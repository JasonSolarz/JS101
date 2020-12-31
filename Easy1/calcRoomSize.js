/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
*/

function calcRoomSize() {
  let readLine = require("readline-sync");
  let length = Number(readLine.question("Enter the length of the room in meters: "));
  let width = Number(readLine.question("Enter the width of the room in meters: "));
  let area = length * width;
  let areaInFeet = area * 10.7639;
  console.log(`The area of the room is ${area} square meters (${areaInFeet.toFixed(2)} square feet).`);
}

calcRoomSize();