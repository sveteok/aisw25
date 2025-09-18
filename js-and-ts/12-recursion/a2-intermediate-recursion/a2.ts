/*
Create a function sentencify that takes in an array of words and a start array index.

The function must recursively build the given words, starting from the given index, into a sentence where

each word is separated by a space
the sentence ends in an exclamation mark
Example:

const wordArray = ["The", "quick", "silver", "wolf"];

console.log(sentencify(wordArray, 0)); // prints "The quick silver wolf!"
console.log(sentencify(wordArray, 1)); // prints "quick silver wolf!"
*/

const sentencify = (arr: string[], inx: number): string => {
    if (inx > arr.length - 2) {
        return arr[inx] === undefined ? "" : arr[inx] + "!";
    }   
    return arr[inx] + " " + sentencify(arr, ++inx);
}

const wordArray = ["The", "quick", "silver", "wolf"];

console.log(sentencify(wordArray, 0)); //The quick silver wolf!
console.log(sentencify(wordArray, 1)); //quick silver wolf!
console.log(sentencify(wordArray, 4)); //""