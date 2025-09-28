import { test, expect } from "vitest";
import { capitalizeWords, reverse } from "../e1-test-with-vitest/functions.js";

// test("dummy test", () => {
//   expect(true).toBe(true);
// });

test("e3 - create one test for reverse function for 100% coverage", () => {
  const input = "this is a test";
  expect(reverse(input)).toBe("tset a si siht");
});

test("for a string containing only spaces", () => {
  const input = "     ";
  expect(reverse(input)).toBe("     ");
});

test("handle empty sentence", () => {
  const input = "";
  expect(reverse(input)).toBe("");
});

test("handle for a string containing only non-alphanumeric characters", () => {
  const input = ".,-!?";
  expect(reverse(input)).toBe("?!-,.");
});

test("handle mixed whitespace characters (spaces and tabs)", () => {
  const input = "Was it \t a Cat I S\naw?";
  expect(reverse(input)).toBe("?wa\nS I taC a \t ti saW");
});

test("should capitalisze the first letter and lowercase the rest for sentence", () => {
  const input = "this is a test sentence";
  expect(capitalizeWords(input)).toBe("This Is A Test Sentence");
});

test("should return empty string", () => {
  const input = "";
  expect(capitalizeWords(input)).toBe("");
});

test("handle a string that contains only spaces, tabs, newlines and should return an empty string", () => {
  const input = "       \n \t";
  expect(capitalizeWords(input)).toBe("");
});

test("handle untrimmed string and should return trimmed string", () => {
  const input = " this is a test sentence  ";
  expect(capitalizeWords(input)).toBe("This Is A Test Sentence");
});

test("handle multiple spaces between words", () => {
  const input = "this  is      a test sentence  ";
  expect(capitalizeWords(input)).toBe("This Is A Test Sentence");
});

test("handle mixed-case style", () => {
  const input = "thIs iS a tESt seNTence";
  expect(capitalizeWords(input)).toBe("This Is A Test Sentence");
});

test("handle one word", () => {
  const input = "test";
  expect(capitalizeWords(input)).toBe("Test");
});

test("handle one character", () => {
  const input = "t";
  expect(capitalizeWords(input)).toBe("T");
});

test("handle first number", () => {
  const inputString = "1st string input";
  const outputString = "1st String Input";
  expect(capitalizeWords(inputString)).toBe(outputString);
});

test("handle punctuation", () => {
  const inputString = "Hello, user! How are you?";
  const outputString = "Hello, User! How Are You?";
  expect(capitalizeWords(inputString)).toBe(outputString);
});

/*
✓ test/function.test.ts (10 tests) 3ms
   ✓ should capitalisze the first letter and lowercase the rest for sentence 1ms
   ✓ should return empty string 0ms
   ✓ handle a string that contains only spaces, tabs, newlines and should return an empty string 0ms
   ✓ handle untrimmed string and should return trimmed string 0ms
   ✓ handle multiple spaces between words 0ms
   ✓ handle mixed-case style 0ms
   ✓ handle one word 0ms
   ✓ handle one character 0ms
   ✓ handle first number 0ms
   ✓ handle punctuation 0ms

 Test Files  1 passed (1)
      Tests  10 passed (10)
   Start at  16:52:01
   Duration  195ms (transform 27ms, setup 0ms, collect 29ms, tests 3ms, environment 0ms, prepare 38ms)

 PASS  Waiting for file changes...
 */
