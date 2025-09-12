/*
Make a copy of your answer to Exercise 2.
Modify the implementation to work as a do-while loop instead of a while loop. Test to make sure your program works.
Modify the condition so it's always false and test it again.
*/

const limit = 15;
let num = 3;

let result = [];
do {
  //   console.log(num);
  result.push(num);
  num += 3;
} while (num <= 3); // while (num <= limit);

console.log(result.toString());
