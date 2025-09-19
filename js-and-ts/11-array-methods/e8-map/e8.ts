/*
Using the same array as previously:

[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Using map:

1. create a new array that contains the lengths of the animals' names
2. create a new array that contains booleans that tell whether the specific animals have the letter "o" as their second letter
Print the original array as well as both arrays created with map.
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

// 1. create a new array that contains the lengths of the animals' names
const lengths: number[] = animals.map((animal: string) => animal.length);
console.log(lengths);
/*
  Output:
  [
    5, 3, 3, 7,
    6, 3, 6
  ]
  */

// 2. create a new array that contains booleans
// that tell whether the specific animals have the letter "o" as their second letter
const hasOAsSecondLetter: boolean[] = animals.map(
  (animal: string) => animal[1] === "o"
);
console.log(hasOAsSecondLetter);
/*
  Output:
  [
    true,  true,
    true,  false,
    true,  false,
    false
  ]
  */

console.log(animals);
/*
  Output:
  [
    'horse',  'cow',
    'dog',    'hamster',
    'donkey', 'cat',
    'parrot'
  ]
  */
export {};
