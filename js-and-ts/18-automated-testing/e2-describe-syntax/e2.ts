/*
Continue your project from the previous exercise. Add another function, isPalindrome to your functions.ts and write tests for it, this time using the describe/it syntax. Again, remember the difficult and borderline cases.

Extra: Catch the bug in this code as well

export function isPalindrome(input: string): boolean {
  if (!input) return false;

  const normalized = input
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  const last = normalized.length - 1;

  for (let i = 0; i < normalized.length / 2; i++) {
    if (normalized[i] !== normalized[last - i]) {
      return false;
    }
  }

  return true;
}
  */

export function isPalindrome(input: string): boolean {
  const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (normalized.length === 0) {
    return false;
  }
  const last = normalized.length - 1;

  for (let i = 0; i < normalized.length / 2; i++) {
    if (normalized[i] !== normalized[last - i]) {
      return false;
    }
  }

  return true;
}
