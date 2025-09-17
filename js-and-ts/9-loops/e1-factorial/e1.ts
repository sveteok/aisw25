/*
Using a while loop, write a program that prints the factorial of integers from 1 to n with a given number n

for example, if n = 4, program prints 24 (= 1 * 2 * 3 * 4). 
*/

const n: number = 4;
let value: number = 1;
let result: number = value;

while (value <= n) {
  result *= value;
  value++;
}
console.log(result);
