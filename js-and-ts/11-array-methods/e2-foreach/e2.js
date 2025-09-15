/*
With the help of forEach, calculate:

the product of the numbers 5, 13, 2, 10, 8
the average of the numbers 5, 13, 2, 10, 8
*/

const numbers = [5, 13, 2, 10, 8];

// Product
let product = 1;
numbers.forEach((num) => (product *= num));
console.log(`Product: ${product}`); //Product: 10400

// Average
let sum = 0;
numbers.forEach((num) => (sum += num));
const average = sum / numbers.length;
console.log(`Average: ${average}`); //Average: 7.6
