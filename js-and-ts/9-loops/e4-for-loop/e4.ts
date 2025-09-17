/*
Using the for loop for each problem, print out the following number sequences:

0 100 200 300 400 500 600 700 800 900 1000
1 2 4 8 16 32 64 128
3 6 9 12 15
9 8 7 6 5 4 3 2 1 0
1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/

{
  //0 100 200 300 400 500 600 700 800 900 1000
  let result: number[] = [];
  for (let i: number = 0; i <= 1000; i += 100) {
    result.push(i);
  }
  console.log(result.join(" "));

  //1 2 4 8 16 32 64 128
  result = [];
  for (let i: number = 1; i <= 128; i *= 2) {
    result.push(i);
  }
  console.log(result.join(" "));

  //3 6 9 12 15
  result = [];
  for (let i: number = 3; i <= 15; i += 3) {
    result.push(i);
  }
  console.log(result.join(" "));

  //9 8 7 6 5 4 3 2 1 0
  result = [];
  for (let i: number = 9; i >= 0; i--) {
    result.push(i);
  }
  console.log(result.join(" "));

  //1 1 1 2 2 2 3 3 3 4 4 4
  result = [];
  for (let i: number = 1; i <= 4; i++) {
    for (let r: number = 0; r < 3; r++) {
      result.push(i);
    }
  }
  console.log(result.join(" "));

  // 1 1 1 2 2 2 3 3 3 4 4 4 - alternative solution
  result = [];
  for (let i: number = 1; i <= 4; i++) {
    result.push(i, i, i);
    // result = [...result, i, i, i]; // this works through spread operator, but create a new array each time
  }
  console.log(result.join(" "));

  //0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
  result = [];
  for (let r: number = 0; r < 3; r++) {
    for (let i: number = 0; i <= 4; i++) {
      result.push(i);
    }
  }
  console.log(result.join(" "));
}
