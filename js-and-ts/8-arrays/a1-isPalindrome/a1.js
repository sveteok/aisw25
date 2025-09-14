/*
Write a function isPalindrome that returns whether a specific string is a palindrome.
*/

const isPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    const char1 = str.charAt(i);
    const char2 = str.charAt(str.length - 1 - i);

    if (char1 !== char2) {
      return false;
    }
  }
  return true;
};

let value = isPalindrome("saippuakivikauppias");
console.log(value); // prints true

value = isPalindrome("saippuakäpykauppias");
console.log(value); // prints false
