/*
Create a program that has a variable representing the number of a month. (1 = January, 2 = February and so on)

The program should print how many days there are in the given month. Do it using an array and indexing.

You might recall when we did this using if and switch-case earlier. This array solution is quite a bit simpler, right?
*/

const getDaysInMounth = (numOfMounth) => {
  const days = [undefined, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return days[numOfMounth];
};

console.log(getDaysInMounth(2));
console.log(getDaysInMounth(13));
console.log(getDaysInMounth(0));
console.log(getDaysInMounth(12));
console.log(getDaysInMounth(1));
