/*
Create a function reverseWords that reverses each word in a string, 
but does not reverse the order of the words in the string.

const sentence = "this is a short sentence";
const reversed = reverseWords(sentence);
console.log(reversed); // prints "siht si a trohs ecnetnes"
*/

const reverseWords = (str: string): string => {
  const words: string[] = str.split(" ");
  const reverseWords: string[] = [];
  for (let i: number = 0; i < words.length; i++) {
    const word: string = words[i];
    let reversedWord: string = "";
    for (let j: number = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }
    reverseWords.push(reversedWord);
  }
  return reverseWords.join(" ");
};

const sentence = "this is a short sentence";
const reversed = reverseWords(sentence);
console.log(reversed); // prints "siht si a trohs ecnetnes"
