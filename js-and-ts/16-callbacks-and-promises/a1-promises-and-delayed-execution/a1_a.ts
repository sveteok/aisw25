/*
Create a function sum that takes one parameter (limit).
The function sums numbers from 0 up to and including the specified limit, and
returns the total sum.


console.log(sum(10)); // prints 55 (= 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)
*/

const sum = (limit: number) => (limit * (limit + 1)) / 2;

// const sum = (limit: number) => {
// 	return [...Array(limit + 1).keys()].reduce((sum, c) => (sum += c), 0);
// };
console.log(sum(10)); // prints 55 (= 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)
//55

export {};
