/* What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

Bonus:

How can you reliably test if a value is NaN? */

//The output will be false

//You can reliably test if a value is Nan using the isNan() method.

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

console.log(isNaN(nanArray[0]));