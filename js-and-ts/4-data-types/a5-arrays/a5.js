/*You are holding a class that has students with ages of 20, 35, 27 and 44.

a)
Create an array with the ages. Print the contents of the array.

b)
Calculate and print the average age of the students.
*/
const ages = [20, 35, 27, 44];
console.log(ages);

function calcAvgGrade(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
}

function calcAvgGradeV1(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let average = sum / arr.length;
  return average;
}

console.log(`Averege: ${calcAvgGrade(ages)}`);
console.log(`calcAvgGradeV1: ${calcAvgGradeV1(ages)}`);
