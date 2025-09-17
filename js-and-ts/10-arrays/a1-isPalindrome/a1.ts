/*
Write a function isPalindrome that returns whether a specific string is a palindrome.
*/

const isPalindrome = (str: string): boolean => {
  for (let i: number = 0; i < str.length / 2; i++) {
    const char1: string = str.charAt(i);
    const char2: string = str.charAt(str.length - 1 - i);

    if (char1 !== char2) {
      return false;
    }
  }
  return true;
};

let value: boolean = isPalindrome("saippuakivikauppias");
console.log(value); // prints true

value = isPalindrome("saippuakäpykauppias");
console.log(value); // prints false
