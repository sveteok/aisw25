/*

a)
Create a function incrementAll that takes an array of numbers as a parameter and returns a new array where all of the array's elements have been incremented by one.

Think of a fitting array method to use for this task.

const numbers = [4, 7, 1, 8, 5];
const newNumbers = incrementAll(numbers);
console.log(newNumbers); // prints [ 5, 8, 2, 9, 6 ]

*/

const incrementAll = (arr) => {
  for (const i in arr) {
    arr[i]++;
  }
  return arr;
};

const numbers = [4, 7, 1, 8, 5];
const newNumbers = incrementAll(numbers);
console.log(newNumbers); // prints [ 5, 8, 2, 9, 6 ]

const incrementAllV2 = (arr) => {
  return arr.map((n) => n++);
};

console.log(incrementAllV2(numbers));

/*
b)
Create a function decrementAll that takes an array of numbers as a parameter and returns a new array where all of the array's elements have been decremented by one.

const numbers = [4, 7, 1, 8, 5];
const newNumbers = decrementAll(numbers);
console.log(newNumbers); // prints [ 3, 6, 0, 7, 4 ]
*/

const numbersB = [4, 7, 1, 8, 5];
const decrementAllV1 = (arr) => {
  for (const i in arr) {
    arr[i]--;
  }
  return arr;
};

const result = decrementAllV1(numbersB);
console.log(result); // prints [ 3, 6, 0, 7, 4 ]

const decrementAll = (arr) => {
  return arr.map((n) => n--);
};
console.log(decrementAll(numbersB));
