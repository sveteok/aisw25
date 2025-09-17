/*
Create a function dice that takes one parameter: numberOfSides (number) and returns a number.

The function should return a random number between 1 and numberOfSides.

Declare the return type of your function explicitly, even if it is not strictly necessary.

For example:

dice(6) 
// returns a random number between 1 and 6
dice(20) 
// returns a random number between 1 and 20
*/

function dice(numberOfSides: number): number {
  return Math.floor(Math.random() * numberOfSides) + 1;
}

console.log(dice(6));
console.log(dice(20));
