/*

a)
Create a function incrementAll that takes an array of numbers as a parameter and returns a new array where all of the array's elements have been incremented by one.

Think of a fitting array method to use for this task.

const numbers = [4, 7, 1, 8, 5];
const newNumbers = incrementAll(numbers);
console.log(newNumbers); // prints [ 5, 8, 2, 9, 6 ]

*/
{
  const numbers: number[] = [4, 7, 1, 8, 5];
  console.log(numbers);
  const incrementAll = (arr: number[]): number[] => arr.map((n: number) => ++n);
  console.log(incrementAll(numbers));

  /*
b)
Create a function decrementAll that takes an array of numbers as a parameter and returns a new array where all of the array's elements have been decremented by one.

const numbers = [4, 7, 1, 8, 5];
const newNumbers = decrementAll(numbers);
console.log(newNumbers); // prints [ 3, 6, 0, 7, 4 ]
*/

  const decrementAll = (arr: number[]): number[] => arr.map((n: number) => --n);
  console.log(decrementAll(numbers));
}
