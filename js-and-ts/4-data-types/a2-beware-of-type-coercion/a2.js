/*

What are the values of result1 and result2 in the program below? Explain why they are different. What is the type of number before it gets null assigned as its value?

let number;
const result1 = 10 + number;

number = null;
const result2 = 10 + number;

*/

let number; //undefined
const result1 = 10 + number;

number = null; // null
const result2 = 10 + number;

console.log(`result1 - ${result1}`);
console.log(`result2 - ${result2}`);

/*
result1 - NaN
result2 - 10
*/

/*
b)
What are the values of c, d, and e in the program below? Why are d and e different from each other?

Write the answer as a comment in your JS file.

Note: It is generally not a good idea to sum different data types like this when it's not clear what the result is.
*/
const a = true;
const b = false;

const c = a + b;
const d = 10 + a;
const e = 10 + b;

console.log(`a - ${a}; b - ${b};`);
console.log(`c = a + b -> ${c}`);
console.log(`d = 10 + a -> ${d}`);
console.log(`e = 10 + b -> ${e}`);

/*

a - true; b - false;
c = a + b -> 1
d = 10 + a -> 11
e = 10 + b -> 10
*/
