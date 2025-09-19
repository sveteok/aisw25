/*
Using the same array as previously:

[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Create a program that finds us the index of the first animal that has 6 or more letters in its name and prints the index.

Based on the found index, print the value as well.
*/

const animals: string[] = [
  "horse",
  "cow",
  "dog",
  "hamster",
  "donkey",
  "cat",
  "parrot",
];

const index: number = animals.findIndex((animal: string) => animal.length >= 6);
console.log(index); //3

console.log(animals[index]); //hamster
export {};
