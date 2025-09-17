/*
You might remember this task from 4 - Data Types. Now with loops we're able to implement it in a slightly better way.

You are holding a class that has students with ages of 20, 35, 27, 44, 24 and 32.

a)
Create an array with the ages. Print the array.

b)
Calculate and print the average age of the students.

Use a loop when calculating the sum of the ages.

Tip: we can get the length of the array with the length property, and use it for the bounds of the loop. For example:

const numbers = [2, 4, 6];
console.log(numbers.length); // prints 3

// print all elements of the array
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
}
  */

const ages: number[] = [20, 35, 27, 44, 24, 32];
console.log(ages);

const printArrayData = (arr: number[]): void => {
  for (let index: number = 0; index < arr.length; index++) {
    const element: number = arr[index];
    console.log(element);
  }
};

const printAgeAvg = (arr: number[]): void => {
  let avg: number = 0;
  for (let index: number = 0; index < arr.length; index++) {
    avg += arr[index];
  }
  avg = Math.round(avg / arr.length);

  console.log(`${avg} - the average age of the students`);
};

printArrayData(ages);
printAgeAvg(ages);
