/*
Get practice with using Reduce by doing the following exercises:

https://coursework.vschool.io/array-reduce-exercises/
*/

//1. Turn an array of numbers into a total of all the numbers
function total(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(total([1, 2, 3])); // 6
