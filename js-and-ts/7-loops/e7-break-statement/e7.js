/*
Using a loop of your choosing and the continue statement, create a program that calculates the factorial of 10, but skips every number that is divisible by 3.
*/
let factorial = 1;
let i = 1;

while (true) {
  factorial *= i;

  if (factorial % 600 === 0) {
    console.log(
      `${i} - the smallest number that has a factorial that is divisible by 600`
    );
    break;
  }
  i++;
}
