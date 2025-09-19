/*
Create a function findLargest that finds and returns the largest number in a given array of numbers by using array iteration.

const array = [4, 19, 7, 1, 9, 22, 6, 13];
const largest = findLargest(array);
console.log(largest); // prints 22
*/

const findLargest = (arr: number[]): number | never => {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty!");
  }
  let largestNum: number = arr[0];
  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
};

const array: number[] = [4, 19, 7, 1, 9, 22, 6, 13];
const largest: number = findLargest(array);
console.log(largest); // prints 22

// console.log(findLargest([])); // throws Error: Array cannot be empty!
export {};
