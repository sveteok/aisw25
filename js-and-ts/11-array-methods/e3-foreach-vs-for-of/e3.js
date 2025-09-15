/*
We have the following array:

[ "horse", "cow", "dog", "hamster", "donkey", "cat", "parrot" ]

Create a program that prints the names of all animals that have the letter e in their name.

implement the program using a for…of loop
implement the program using the forEach method
*/

const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

// Using for...of loop
for (const animal of animals) {
  if (animal.includes("e")) {
    console.log(animal);
  }
}
/*
Output:
horse
hamster
donkey
*/

// Using forEach method
animals.forEach((animal) => {
  if (animal.includes("e")) {
    console.log(animal);
  }
});
/*
Output:
horse
hamster
donkey
*/
