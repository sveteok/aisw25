/*
Using a loop of your choosing and the continue statement, create a program that calculates the factorial of 10, but skips every number that is divisible by 3.
*/

let factorial = 1;
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  factorial *= i;
}
console.log(factorial);
