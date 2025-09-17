/*
We have the following list of numbers: [ 8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50 ]
*/

//a) Using a loop, find the first number that is above 20 and print it.
const numbers: number[] = [8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50];
for (const n of numbers) {
  if (n > 20) {
    console.log(n);
    break;
  }
}

//b) Do the same as in a), but use Array.find instead.
console.log(numbers.find((n) => n > 20));

// c) Using Array.findIndex, find the index of the first number that is above 20 and print the index.
const index: number = numbers.findIndex((n) => n > 20);
console.log(index);

// d) Using Array.splice, remove all elements that come after the index that you found in c). Afterwards, print the whole array.
numbers.splice(index);
console.log(numbers);
