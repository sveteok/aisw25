/*
Create a function insertNumber that can insert a number into the right slot in a sorted array of numbers.

For example:

const array = [1, 3, 4, 7, 11];
insertNumber(array, 8);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11 ]
insertNumber(array, 90);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11, 90 ]
*/

const insertNumber = (arr: number[], num: number): void => {
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      arr.splice(i, 0, num);
      return;
    }
  }
  arr.push(num);
};

const array: number[] = [1, 3, 4, 7, 11];
insertNumber(array, 8);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11 ]
insertNumber(array, 90);
console.log(array); // prints [ 1, 3, 4, 7, 8, 11, 90 ]
