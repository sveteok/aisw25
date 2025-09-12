/*
Create a program and assign two numbers to variables a and b (decide the value for these freely).

Calculate the sum, difference, fraction and product of these numbers.
Assign a third number to variable c and try out calculating a + b * c.
How does the result change if you add parentheses to the calculation?
(a + b) * c
a + (b * c)
Print all the results using console.log.


*/

let a = 3,
  b = 5;

let sum, difference, fraction, product;

sum = a + b;
difference = a - b;
fraction = a / b;
product = a * b;

console.log("a: " + a);
console.log("b: " + b);
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Fraction: " + fraction);
console.log("Product: " + product);

let c = 2,
  result;
console.log("c: " + c);
result = a + b * c;
console.log("a + b * c: " + result);
result = (a + b) * c;
console.log("(a + b) * c: " + result);
result = a + b * c;
console.log("a + (b * c): " + result);

/*
a: 3
b: 5
Sum: 8
Difference: -2
Fraction: 0.6
Product: 15
c: 2
a + b * c: 13
(a + b) * c: 16
a + (b * c): 13
*/
