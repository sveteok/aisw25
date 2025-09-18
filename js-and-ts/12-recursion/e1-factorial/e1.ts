/*
Write a program that calculates the factorial n! of a given number n. 
Use recursion rather than a loop.

n! = n*(n-1)*(n-2)*...*1

example: n=4, n! = 4*3*2*1

Note: n! = factorial n
*/

const factorialFun = (n: number): number => {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorialFun(n - 1);
  }
}
console.log(factorialFun(4)); // 24