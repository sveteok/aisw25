/*
Using the same array as previously:

[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Create a program that finds us the first animal that ends in letter t.
*/

const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

const animalEndingInT = animals.find((animal) => animal.endsWith("t"));
console.log(animalEndingInT); //cat

//EXTRA: Find the first animal that ends in letter y and starts with letter d.
const animalEndingInYStartingWithD = animals.find(
  (animal) => animal.endsWith("y") && animal.startsWith("d")
);
console.log(animalEndingInYStartingWithD); //donkey
