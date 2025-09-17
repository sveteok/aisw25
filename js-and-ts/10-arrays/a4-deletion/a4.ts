/*
We have the following array:

const fruits = ["banana", "apple", "grapefruit", "pear", "pineapple", "lemon"];

Programmatically find out the index of "pear" and delete it from the array.

Tip: You can use Array.indexOf to find the index of a specific item in the array. Afterwards, use Array.splice to remove the item.

*/

const fruits: string[] = [
  "banana",
  "apple",
  "grapefruit",
  "pear",
  "pineapple",
  "lemon",
];

const index: number = fruits.indexOf("pear");
fruits.splice(index, 1);
console.log(fruits);
