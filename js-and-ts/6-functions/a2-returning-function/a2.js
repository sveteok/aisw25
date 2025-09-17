/*
Create a function named minimum that takes 3 numbers as parameters.
The function should find the smallest of the given numbers and return it.
Call your function with different numbers as parameters to make sure it works. 
Forward the returned value to console.log to print the return value of your function.

DO NOT call console.log in the function itself,
but instead call it after calling your function.
*/

//using if statements
const minimum = (num1, num2, num3) => {
  let smallest = num1;
  if (num2 < smallest) {
    smallest = num2;
  }
  if (num3 < smallest) {
    smallest = num3;
  }
  return smallest;
};

//using Math.min()
const minimumV2 = (num1, num2, num3) => {
  return Math.min(num1, num2, num3);
};

//using array reduce()
const minimumV3 = (num1, num2, num3) => {
  const numbers = [num1, num2, num3];
  return numbers.reduce((min, curr) => (curr < min ? curr : min), numbers[0]);
};

//using array for loop
const minimumV4 = (num1, num2, num3) => {
  const numbers = [num1, num2, num3];
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
};

const smallest = minimum(2, 3, 4);
console.log(smallest);

console.log();
console.log(minimum(-3, 0, 8));
console.log(minimum(3, 3, 3));
console.log(minimum(10, 9, 80));

console.log();
console.log(minimumV2(-3, 0, 8));
console.log(minimumV2(3, 3, 3));
console.log(minimumV2(10, 9, 80));

console.log();
console.log(minimumV3(-3, 0, 8));
console.log(minimumV3(3, 3, 3));
console.log(minimumV3(10, 9, 80));

console.log();
console.log(minimumV4(-3, 0, 8));
console.log(minimumV4(3, 3, 3));
console.log(minimumV4(10, 9, 80));
