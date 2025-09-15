/*

Create a program that counts a sum of increasing integers, 1 + 2 + 3..., until the sum exceeds 10000, and finally prints the last number that was added to the sum.

Use your preferred loop method for this (while or for loop with a fitting condition, or infinite while loop with a break statement).
*/

const variant1 = () => {
  let sum = 0,
    n = 1;

  while (true) {
    sum += n;
    if (sum >= 10000) {
      console.log(`${n} - the last number that was added to the sum`);
      break;
    }
    n++;
  }
};

variant1();

const variant2 = () => {
  let sum = 0,
    n = 0;

  while (sum < 10000) {
    n++;
    sum += n;
  }
  console.log(`${n} - the last number that was added to the sum`);
};

variant2();
