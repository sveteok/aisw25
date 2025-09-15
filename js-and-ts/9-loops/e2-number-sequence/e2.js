/*
Using a while loop, make a program that prints out the following number sequence:

3, 6, 9, 12, 15
*/

const limit = 15;
let num = 3;

let result = [];
while (num <= limit) {
  //   console.log(num);
  result.push(num);
  num += 3;
}
console.log(result.toString());
