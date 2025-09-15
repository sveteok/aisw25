/*
Create an array full of numbers.

Now, calculate the sum of all numbers.

Use the whatever method comes into your mind…
Use reduce!
Extra: Add NaN values into the array. How to take them into account in summing?

*/
const numbers = [1, 4, 78, 33, 43, 0, 3, NaN];

const sum = numbers.reduce((acc, curr) => acc + (isNaN(curr) ? 0 : curr), 0);
console.log(`Sum of all numbers: ${sum}`);
