/*
Write a function isPalindrome that returns whether a specific string is a palindrome.
*/

export const isPalindrome = (str: string): boolean => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (normalized.length === 0) {
    return false;
  }

  for (let i: number = 0; i < normalized.length / 2; i++) {
    const char1: string = normalized.charAt(i);
    const char2: string = normalized.charAt(normalized.length - 1 - i);

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
