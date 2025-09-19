/*
Create the following array of numbers:

[4, 7, 11, 5, 6, 9, 15, 7]

Go through the array in a loop and delete all numbers that are lesser than 7.

Print the array afterwards to make sure it worked.

You can use either a for or while loop for the task.


*/

const numbers: number[] = [4, 7, 11, 5, 6, 9, 15, 7];
let i: number = 0;
while (i < numbers.length) {
  if (numbers[i] < 7) {
    numbers.splice(i, 1);
  } else {
    i++;
  }
}
console.log(numbers);

export {};
