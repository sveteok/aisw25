/*
When you have two numbers, you can compare which is greater by using the > (greater than) operator:

const person1Age = 15;
const person2Age = 24;

const isFirstPersonOlder = person1Age > person2Age;
console.log(isFirstPersonOlder);
a)
What does the code above print?
false
b)
What is the type of isFirstPersonOlder?
boolean
c)
You are teaching students of two classes on a course.

Students of the first class got grades of 9, 6 and 9.

Students of the second class got grades of 7, 10, and 5.

Create a program that

calculates the average grade of both classes
prints whether the first class got a higher average score than the second class
*/

const person1Age = 15;
const person2Age = 24;

const isFirstPersonOlder = person1Age > person2Age;
console.log(isFirstPersonOlder);

const firstClassStudentsGrades = [9, 6, 9];
const secondClassStudentsGrades = [7, 10, 5];

function calcAvgGrade(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let average = sum / arr.length;
  return average;
}

console.log(
  `The first class ${
    calcAvgGrade(firstClassStudentsGrades) >
    calcAvgGrade(secondClassStudentsGrades)
      ? "got"
      : "didn't get"
  } a higher average score than the second class`
);
