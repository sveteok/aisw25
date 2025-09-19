/*
Ercise 5
Take the end state of our previous exercises:

[ "pangram:", "the",  "quick", "gray", "fox", "jumps", "over", "the", "lazy", "dog" ]

Using the shift as well as splice and/or pop methods, 
remove the first element and the last 5 elements of the array.

Also remove the element "gray".

The end result should be [ "the",  "quick", "fox", ]. Print your array.*/

const arr: string[] = [
  "pangram:",
  "the",
  "quick",
  "gray",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

arr.shift();
arr.splice(arr.length - 5, arr.length);
arr.splice(2, 1);
console.log(arr);

export {};
