/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Further Exploration

Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.
*/

function calcRoomSize() {
  let readLine = require("readline-sync");
  let length;
  let width;
  let areaInMeters;
  let areaInFeet;

  let inputType = readLine.question("Please select an input type: (meters or feet): ");
  if(inputType.toLowerCase() === "meters") {
    length = Number(readLine.question("Enter the length of the room in meters: "));
    width = Number(readLine.question("Enter the width of the room in meters: "));
    areaInMeters = length * width;
    areaInFeet = areaInMeters * 10.7639;
    console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);
  } else if(inputType.toLowerCase() === "feet") {
      length = Number(readLine.question("Enter the length of the room in feet: "));
      width = Number(readLine.question("Enter the width of the room in meters: "));
      areaInFeet = length * width;
      areaInMeters = areaInFeet / 10.7639;
      console.log(`The area of the room is ${areaInFeet.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`);
  }


}

calcRoomSize();