/*
Create a program with 3 variables representing names. Print out the names, ordered so that the longest name is first.

For example, if the names were Maria, Joe and Philippa, the program would print Philippa Maria Joe.

*/
const name1 = "Svetlana";
const name2 = "Rubini";
const name3 = "Anjalee";

if (
  name1.length >= name2.length &&
  name1.length >= name3.length &&
  name2.length >= name3.length
) {
  console.log(`${name1} ${name2} ${name3}`);
}

if (
  name1.length >= name2.length &&
  name1.length >= name3.length &&
  name3.length >= name2.length
) {
  console.log(`${name1} ${name3} ${name2}`);
}

if (
  name2.length >= name1.length &&
  name2.length >= name3.length &&
  name1.length >= name3.length
) {
  console.log(`${name2} ${name1} ${name3}`);
}

if (
  name2.length >= name1.length &&
  name2.length >= name3.length &&
  name3.length >= name1.length
) {
  console.log(`${name2} ${name3} ${name1}`);
}

if (
  name3.length >= name1.length &&
  name3.length >= name2.length &&
  name1.length >= name2.length
) {
  console.log(`${name3} ${name1} ${name2}`);
}

if (
  name3.length >= name1.length &&
  name3.length >= name2.length &&
  name2.length >= name1.length
) {
  console.log(`${name3} ${name2} ${name1}`);
}
