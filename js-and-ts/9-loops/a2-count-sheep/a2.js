/*
Create a function countSheep that takes a number as a parameter and returns a string so that, for example countSheep(3) returns 1 sheep... 2 sheep... 3 sheep....

Call your function and console.log the result to make sure the function works.
*/
const countSheep = (n) => {
  let text = "";
  for (let i = 1; i <= n; i++) {
    text += `${i} sheep... `;
  }
  return text;
};

console.log(countSheep(3));
