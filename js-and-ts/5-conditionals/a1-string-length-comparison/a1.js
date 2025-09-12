/*
Create a program with two variables, each representing words.

Using a conditional, check which word is longer. 

If the first word is longer, the program should print "first word is longer than second word", 
with the placeholders replaced by the actual words.

Likewise, if the second word is longer, then the program should say that it's longer.

Test your program with different words to make sure it works.

HINT: Use can check the length property of a string-type variable to check the length of a string. For example:

const fruit = "lemon";
console.log(fruit.length); // prints 5
*/

const word1 = "lemon1";
console.log(word1.length);

const word2 = "banana";
console.log(word2.length);

if (word1.length < word2.length) {
  console.log(`The word "${word2}" is longer than the word "${word1}"`);
} else if (word1.length > word2.length) {
  console.log(`The word "${word1}" is longer than the word "${word2}"`);
} else {
  console.log(
    `The length of the word "${word1}" is equal to the length of the word "${word2}"`
  );
}
