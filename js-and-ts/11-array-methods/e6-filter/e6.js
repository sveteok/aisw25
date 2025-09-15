/*
Using the same array as previously:

[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Create a program that finds us all animals that:

1. have the letter "o" in their name.
2. don't have a "h or "o" in their name!
Print the array with the found animals.
*/

const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

//1. have the letter "o" in their name.
const animalsWithO = animals.filter((a) => a.includes("o"));
console.log(animalsWithO); // [ 'horse', 'cow', 'dog', 'donkey', 'parrot' ]

//2. don't have a "h" or "o" in their name!
const result = animals.filter((a) => !a.includes("h") && !a.includes("o"));
console.log(result); // [ 'cat' ]
