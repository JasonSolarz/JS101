/* Grade Book

Write a function that determines the mean (average) of the three scores 
passed to it, and returns the letter associated with that grade.

*/

function getGrade(...grades) {
  let grade = grades.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0) / grades.length;

  switch (true) {
    case grade >= 90:
      return "A";
      break;
    case grade >= 80:
      return "B";
      break;
    case grade >= 70:
      return "C";
      break;
    case grade >= 60:
      return "D";
      break;
    default:
      return "F";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));
console.log(getGrade(70, 70, 70, 70, 70));