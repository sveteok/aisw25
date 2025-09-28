/*
Create a new project with a functions.ts file with the following capitalizeWords function.

Install and configure Vitest, and write some tests for the function. Rememer to include the "difficult" and borderline cases in your testing.

Extra: Catch the bug in the code.
export function capitalizeWords(input: string): string {
  if (!input) return "";

  return input
    .split(" ")
    .map(word => {
      if (word.length === 0) return word;

      const first = word[0].toUpperCase();
      // const rest = word.slice(1);
      const rest = word.slice(1).toLowerCase();
      return first + rest;
    })
    .join(" ");
}
*/

export function capitalizeWords(input: string): string {
  const trimmedStr = input.trim();

  if (trimmedStr.length === 0) return "";

  const words: string[] = trimmedStr.split(/\s+/);

  return words
    .map((word) => {
      const first = word.charAt(0).toUpperCase();

      const rest = word.slice(1).toLowerCase();
      return first + rest;
    })
    .join(" ");
}
