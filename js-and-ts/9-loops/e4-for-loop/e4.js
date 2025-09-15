/*
Using the for loop for each problem, print out the following number sequences:

0 100 200 300 400 500 600 700 800 900 1000
1 2 4 8 16 32 64 128
3 6 9 12 15
9 8 7 6 5 4 3 2 1 0
1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/

//0 100 200 300 400 500 600 700 800 900 1000
let result = [];
for (let i = 0; i <= 1000; i += 100) {
  result.push(i);
}
console.log(result.join(" "));

//1 2 4 8 16 32 64 128
result = [];
for (let i = 1; i <= 128; i *= 2) {
  result.push(i);
}
console.log(result.join(" "));

//3 6 9 12 15
result = [];
for (let i = 3; i <= 15; i += 3) {
  result.push(i);
}
console.log(result.join(" "));

//9 8 7 6 5 4 3 2 1 0
result = [];
for (let i = 9; i >= 0; i--) {
  result.push(i);
}
console.log(result.join(" "));

//1 1 1 2 2 2 3 3 3 4 4 4
result = [];
for (let i = 1; i <= 4; i++) {
  for (let r = 0; r < 3; r++) {
    result.push(i);
  }
}
// for (let i = 1; i <= 4; i++) {
//   result = [...result, i, i, i];
// }
console.log(result.join(" "));

//0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
result = [];
for (let r = 0; r < 3; r++) {
  for (let i = 0; i <= 4; i++) {
    result.push(i);
  }
}
console.log(result.join(" "));
