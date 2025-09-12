/*
Create a program that has three variables for three numbers: number1, number2, and number3. Decide their values freely.

Use conditional(s) to accomplish the following:

find the largest number and print it
find the smallest number and print it
if they're all equal, print that out
*/

const number1 = 5,
  number2 = 10,
  number3 = 1;

if (number1 === number2 && number2 === number3) {
  console.log("They're all equal");
} else {
  let smallestNum = number1,
    largestNum = number1;

  if (number2 > largestNum) {
    largestNum = number2;
  }

  if (number3 > largestNum) {
    largestNum = number3;
  }

  if (number2 < smallestNum) {
    smallestNum = number2;
  }

  if (number3 < smallestNum) {
    smallestNum = number3;
  }

  console.log(
    `The largest number is ${largestNum}. The smallest number is ${smallestNum}`
  );
}
