/*
Create a program that loops through numbers from 1 to 100 and...

if the number is divisible by 3, prints "Fizz"
if the number is divisible by 5, prints "Buzz"
if the number is divisible by both (3 and 5), prints "FizzBuzz"
if no previous conditions apply, prints just the number
Hint: use the modulo / remainder operator %. For example, number % 2 === 0 can be used to check whether the number is divisible by 2.

Make both for and while versions of this exercise.
*/
{
  for (let i: number = 1; i <= 100; i++) {
    let text: string = "";
    if (i % 3 === 0) {
      text += "Fizz";
    }
    if (i % 5 === 0) {
      text += "Buzz";
    }
    console.log(text.length === 0 ? i + "" : text);
  }

  let n: number = 1;
  while (n <= 100) {
    let text: string = "";
    if (n % 3 === 0) {
      text += "Fizz";
    }
    if (n % 5 === 0) {
      text += "Buzz";
    }
    console.log(text.length === 0 ? n + "" : text);
    n++;
  }
}
