const ranks: Record<"S" | "A" | "B" | "C" | "D" | "F", number> = {
  S: 8,
  A: 6,
  B: 4,
  C: 3,
  D: 2,
  F: 0,
};

type Grade = keyof typeof ranks;

//a
const calculateTotalScore = (grades: string): number => {
  //   let sum = 0;
  //   for (let i = 0; i < grades.length; i++) {
  //     const curr = grades.charAt(i);
  //     sum += ranks[curr] ? ranks[curr] : 0;
  //   }
  //   return sum;
  return Array.from(grades).reduce(
    (sum: number, curr: string) => (sum += ranks[curr as Grade] ?? 0),
    0
  );
};

const myGrades = "DFCBDABSBL";
const totalScore = calculateTotalScore(myGrades);
console.log(totalScore); //33

//b
const calculateAverageScore = (grades: string): number => {
  return calculateTotalScore(grades) / grades.length;
};

const avgScore = calculateAverageScore(myGrades);
console.log(avgScore); //3.3

//c
const scores = ["AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC"];
const avgScores: number[] = scores.map((s) => calculateAverageScore(s));
console.log(`Average scores: ${avgScores.map((s) => s.toFixed(2)).join(", ")}`);
// Average scores: 5.38, 1.90, 5.29, 3.44
