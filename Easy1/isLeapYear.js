//PEDAC

//*Problem*

/*In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. 
If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input,
and returns true if the year is a leap year, or false if it is not a leap year. */

/*Examples/Test Cases*

Example 1:
  Input: 800

  Output: true

Example 2:
  Input: 1224

  Output: true

Example 3:
  Input: 2003

  Output: false

Example 4:
  Input: 300
  Divisible by 4: true
  Divisible by 100: true
  Divisible by 400: false
*/

/*Data Structure*

Number primitives

*/

/*Alghorithm*
Check to see if year is divisible by 4. If true, set isLeapYear to true.
If year >= 100 && year < 400, check year if it is divisible by 100. If true, set isLeapYear to false
if year >= 400, check year if it is divisible by 400. If true, set isLeapYear to true
return isleapYear

*/

// **Code**

function isLeapYear(year) {
  let isLeapYear = false;
  if(year <= 1752) {
    if(year % 4 === 0) {
      isLeapYear = true;
    }
  } else {
    if(year % 4 === 0) {
      isLeapYear = true;
    }
    if(year >= 100 && year < 400) {
      if(year % 100 === 0) {
        isLeapYear = false;
      }
    }
    if(year >= 400) {
      if(year % 400 === 0) {
        isLeapYear = true;
      }
    }
  }

  return isLeapYear;

}

console.log(isLeapYear(2000));   //true
console.log(isLeapYear(2016));   //true
console.log(isLeapYear(2012));   //true
console.log(isLeapYear(2015));   //false
console.log(isLeapYear(400));    //true
console.log(isLeapYear(240001)); //false
console.log(isLeapYear(1752));   //true