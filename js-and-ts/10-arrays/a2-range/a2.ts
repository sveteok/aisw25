/*
Write a function numberRange that takes two numbers as parameters, start and end. 
The function returns an array filled with numbers from start to end.

console.log(numberRange(1, 5)); // prints [ 1, 2, 3, 4, 5 ]
console.log(numberRange(-5, -1)); // prints [ -5, -4, -3, -2, -1 ]
console.log(numberRange(9, 5)); // prints [ 9, 8, 7, 6, 5 ]
Note the order of the values! When start is smaller than end, the order is ascending, and when start is greater than end, the order is descending.
*/

const numberRange = (start: number, end: number): number[] => {
  const arr: number[] = [];

  if (start <= end) {
    for (let i: number = start; i <= end; i++) {
      arr.push(i);
    }
  } else {
    for (let i: number = start; i >= end; i--) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(numberRange(1, 5)); // prints [ 1, 2, 3, 4, 5 ]
console.log(numberRange(-5, -1)); // prints [ -5, -4, -3, -2, -1 ]
console.log(numberRange(9, 5)); // prints [ 9, 8, 7, 6, 5 ]
