/*
Write a function that multiplies two numbers together and returns the result to the caller.
Try writing the function with all the three different function syntaxes; named, anonymous and arrow.
Call the function multiple times in your program using different values as parameters
Print the results to the console
*/

function multipliesTwoNumbers(number1, number2) {
  return number1 * number2;
}

const multipliesTwoNumbers2 = (number1, number2) => {
  return number1 * number2;
};

const multipliesTwoNumbers3 = function (number1, number2) {
  return number1 * number2;
};

console.log(multipliesTwoNumbers(2, 3));
console.log(multipliesTwoNumbers2(2, 3));
console.log(multipliesTwoNumbers3(2, 3));
