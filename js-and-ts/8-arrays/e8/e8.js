/*
Create the following array:

[5, 7, 2, 9, 3, 13, 15, 6, 17, 24]

Go through the array and print all numbers that are divisible by 3.

Use for..in
Use for..of


*/

const numbers = [5, 7, 2, 9, 3, 13, 15, 6, 17, 24];
for (const i in numbers) {
  if (numbers[i] % 3 === 0) {
    console.log(numbers[i]);
  }
}

for (const n of numbers) {
  if (n % 3 === 0) {
    console.log(n);
  }
}
