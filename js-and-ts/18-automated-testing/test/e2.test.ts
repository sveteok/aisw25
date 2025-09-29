import { describe, it, expect } from "vitest";
import { isPalindrome } from "../e2-describe-syntax/e2.js";

describe("isPalindrome", () => {
  it("returns true with saippuakivikauppias", () => {
    const result = isPalindrome("saippuakivikauppias");
    expect(result).toBe(true);
  });

  it("return true for an even-length palindrome 'ahha'", () => {
    const result = isPalindrome("ahha");
    expect(result).toBe(true);
  });

  it("handle mixed style (lowercase and uppercase). Returns true with 'Level'", () => {
    const result = isPalindrome("Level");
    expect(result).toBe(true);
  });

  it("handle a single character input", () => {
    const result = isPalindrome("A");
    expect(result).toBe(true);
  });

  it("return false for a string containing only spaces", () => {
    const result = isPalindrome(" ");
    expect(result).toBe(false);
  });

  it("return false for empty string", () => {
    const result = isPalindrome("");
    expect(result).toBe(false);
  });

  it("return false for a string containing only non-alphanumeric characters", () => {
    const result = isPalindrome(".,-!?");
    expect(result).toBe(false);
  });

  it("returns false with saippuakäpykauppias", () => {
    const result = isPalindrome("saippuakäpykauppias");
    expect(result).toBe(false);
  });

  it("handle punctuation. Returns true with 'Was it a Cat I Saw?'", () => {
    const result = isPalindrome("Was it a Cat I Saw?");
    expect(result).toBe(true);
  });

  it("should handle mixed whitespace characters (spaces and tabs)", () => {
    const result = isPalindrome("Was it \t a Cat I S\naw?");
    expect(result).toBe(true);
  });

  it("handle leading and trailing spaces", () => {
    const result = isPalindrome("    Never odd or even.");
    expect(result).toBe(true);
  });

  it("handle multiple spaces between words", () => {
    const result = isPalindrome("Never    odd or.    even.");
    expect(result).toBe(true);
  });

  it("handle inputs with numbers. Returns true for '123googoog'", () => {
    const result = isPalindrome("123googoog");
    expect(result).toBe(false);
  });
});

/*
test/e2.test.ts (13 tests) 3ms
   ✓ isPalindrome > returns true with saippuakivikauppias 1ms
   ✓ isPalindrome > return true for an even-length palindrome 'ahha' 0ms
   ✓ isPalindrome > handle mixed style (lowercase and uppercase). Returns true with 'Level' 0ms
   ✓ isPalindrome > handle a single character input 0ms
   ✓ isPalindrome > return false for a string containing only spaces 0ms
   ✓ isPalindrome > return false for empty string 0ms
   ✓ isPalindrome > return false for a string containing only non-alphanumeric characters 0ms
   ✓ isPalindrome > returns false with saippuakäpykauppias 0ms
   ✓ isPalindrome > handle punctuation. Returns true with 'Was it a Cat I Saw?' 0ms
   ✓ isPalindrome > should handle mixed whitespace characters (spaces and tabs) 0ms
   ✓ isPalindrome > handle leading and trailing spaces 0ms
   ✓ isPalindrome > handle multiple spaces between words 0ms
   ✓ isPalindrome > handle inputs with numbers. Returns true for '123googoog' 0ms

 Test Files  1 passed (1)
      Tests  13 passed (13)
   Start at  21:03:02
   Duration  19ms

 PASS  Waiting for file changes...
       press h to show help, press q to quit
       */
