/*
Get practice with using Reduce by doing the following exercises:

https://coursework.vschool.io/array-reduce-exercises/
*/

//5. Given an array of arrays, flatten them into a single array
const arrays: (string | boolean | number)[][] = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6],
];

const flatten = (
  arr: (string | boolean | number)[][]
): (string | boolean | number)[] => {
  return arr.reduce(
    (acc: (string | boolean | number)[], curr: (string | boolean | number)[]) =>
      acc.concat(curr),
    []
  );
};
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
