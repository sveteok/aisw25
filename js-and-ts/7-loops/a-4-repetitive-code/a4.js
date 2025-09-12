/*
The following function counts how many vowels there are in the given (English) sentence. However, it has some repetitive code that could be simplified away by splitting some of the code into a helper function.

Do the following:

a) Identify the repetitive bit of code

b) Create a helper function that performs the repetitive bit of code and returns a fitting value

c) Modify the checkSentenceVowels function so that it calls your helper function once for each vowel instead of having the same loop just copy-pasted 6 times for each vowel

The charAt function takes a letter of the string at the specified index. For example, for the string "abc", charAt(0) === 'a', chartAt(1) === 'b' and charAt(2) === 'c'.
*/

const numOfVowelInSentence = (str, vowel) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === vowel) {
      count++;
    }
  }
  return count;
};

function checkSentenceVowels(sentence) {
  // Check how many different vowels we have in the sentence

  let countOfAs = numOfVowelInSentence(sentence, "a");
  let countOfEs = numOfVowelInSentence(sentence, "e");
  let countOfIs = numOfVowelInSentence(sentence, "i");
  let countOfOs = numOfVowelInSentence(sentence, "o");
  let countOfUs = numOfVowelInSentence(sentence, "u");
  let countOfYs = numOfVowelInSentence(sentence, "y");

  console.log("A letter count: " + countOfAs);
  console.log("E letter count: " + countOfEs);
  console.log("I letter count: " + countOfIs);
  console.log("O letter count: " + countOfOs);
  console.log("U letter count: " + countOfUs);
  console.log("Y letter count: " + countOfYs);

  //   console.log("A letter count: " + numOfVowelInSentence(sentence, "a"));
  //   console.log("E letter count: " + numOfVowelInSentence(sentence, "e"));
  //   console.log("I letter count: " + numOfVowelInSentence(sentence, "i"));
  //   console.log("O letter count: " + numOfVowelInSentence(sentence, "o"));
  //   console.log("U letter count: " + numOfVowelInSentence(sentence, "u"));
  //   console.log("Y letter count: " + numOfVowelInSentence(sentence, "y"));

  const totalCount =
    countOfAs + countOfEs + countOfIs + countOfOs + countOfUs + countOfYs;

  console.log("Total vowel count: " + totalCount);
}

checkSentenceVowels("A wizard's job is to vex chumps quickly in fog.");
