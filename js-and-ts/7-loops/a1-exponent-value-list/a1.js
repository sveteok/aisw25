/*

a)
Create a function named exponentValueList that takes a number n as a parameter.

The number should print 2 multiplied by itself from 1... to n times, each value on its own line.

For example, n = 4 should result in

2
4
8
16
If n is zero or negative, the function should just print n needs to be positive and return.

*/

const exponentValueList = (n) => {
  if (n <= 0) {
    console.error("The number must be positive.");
    return;
  }
  let val = 2;
  for (let i = 1; i <= n; i++) {
    console.log(val);
    val *= 2;
  }
};

exponentValueList(4);
exponentValueList(0);
/*

b)
Add a parameter to exponentValueList so that instead of the number to raise in power always being 2, 
it can also be defined by the caller.
*/
console.log();
const exponentValueListB = (n, baseNum) => {
  if (n <= 0 || n === undefined || n === null) {
    console.log("The number must be positive.");
    return;
  }
  if (baseNum === undefined || baseNum === null) {
    console.log("Base number is required");
    return;
  }

  for (let i = 1; i <= n; i++) {
    console.log(baseNum ** i);
  }
};

exponentValueListB(4, 3);
exponentValueListB(0, 2);
