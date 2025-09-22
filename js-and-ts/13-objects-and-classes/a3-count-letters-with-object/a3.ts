type CountOfLetters = Record<string, number>;

const getCountOfLetters = (sentence: string): CountOfLetters => {
  const result = Array.from(sentence.toLocaleLowerCase()).reduce(
    (result: CountOfLetters, currChar: string) => {
      if (currChar !== " ") {
        result[currChar] = (result[currChar] ?? 0) + 1;
      }
      return result;
    },
    {}
  );

  return result;
};

const result = getCountOfLetters("a black cat");
console.log(result);
//{ a: 3, b: 1, l: 1, c: 2, k: 1, t: 1 }
