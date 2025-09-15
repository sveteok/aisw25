/*
const charIndex = { a : 1, b : 2, c : 3, d : 4, e : 5, ... , y : 25, z : 26 };

Create a function charIndexString that turns any given string into a charIndex version of the string.

Examples:

console.log(charIndexString("bead")); // prints "2514"
console.log(charIndexString("rose")); // prints "1815195"
Tip: go through the string letter-by-letter. For each letter, figure out its charIndex. Then convert the charIndex into a string and add it to the string that you later return.
*/

const charIndex = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const charIndexString = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i).toLowerCase();
    if (charIndex[char]) {
      result += charIndex[char];
    }
  }
  return result;
};

console.log(charIndexString("bead")); // prints "2514"
console.log(charIndexString("rose")); // prints "1815195"
