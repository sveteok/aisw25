/**
The Fibonacci sequence is a sequence of numbers that is defined as follows:

F(0) = 0
F(1) = 1
F(n) = F(n - 1) + F(n - 2)
Using recursion, create a function that can calculate any number of the Fibonacci sequence. 
Test your function to make sure it works.

F(2) = F(1) + F(0) = 1 F(3) = F(2) + F(1) = F(1) + F(0) + F(1) = 1 + 1 + 0 = 2

0,1,1,2,3,5,8,13,21,...
 */

const fibonacci = (n: number): number => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(0)); //0
console.log(fibonacci(1)); //1
console.log(fibonacci(7)); //13
console.log(fibonacci(8)); //21
