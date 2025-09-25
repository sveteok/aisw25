/*
Get practice with using Reduce by doing the following exercises:

https://coursework.vschool.io/array-reduce-exercises/
*/

//2. Turn an array of numbers into a long string of all those numbers.
const stringConcat = (arr: number[]): string => {
  return arr.reduce((acc, curr) => acc.toString() + curr.toString(), "");
};
console.log(stringConcat([1, 2, 3])); // "123"
