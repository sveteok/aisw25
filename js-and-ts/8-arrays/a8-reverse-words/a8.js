/*
Create a function reverseWords that reverses each word in a string, 
but does not reverse the order of the words in the string.

const sentence = "this is a short sentence";
const reversed = reverseWords(sentence);
console.log(reversed); // prints "siht si a trohs ecnetnes"
*/

const reverseWords = (str) => {
  const words = str.split(" ");
  const reverseWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let reversedWord = "";
    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }
    reverseWords.push(reversedWord);
  }
  return reverseWords.join(" ");
};

const sentence = "this is a short sentence";
const reversed = reverseWords(sentence);
console.log(reversed); // prints "siht si a trohs ecnetnes"
