/*
Create a variable for the length of a side in a square.
Calculate and print out the area of a square with the given length of each side.
For example, a square with sides that are 5 meters long is 25 square meters in area.
EXTRA: Calculate the area with exponentiation ** instead of multiplication *.
*/

let sideLength = 5;
console.log(
  `The area of a square with ${sideLength} meter sides is ${
    sideLength * sideLength
  }`
);
let square = sideLength ** 2;
console.log(`The area of a square with ${sideLength} meter sides is ${square}`);
