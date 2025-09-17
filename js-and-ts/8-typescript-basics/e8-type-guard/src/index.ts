/*
Create a function that takes in an array of unknown elements and 
checks if it is a number array, and then returns true or false.
*/

const isNumberArray = (arr: unknown[]): arr is number[] => {
  return arr.every((item) => typeof item === "number");
};

console.log(isNumberArray([1, 2, 3]));
console.log(isNumberArray([1, "2", 3]));
