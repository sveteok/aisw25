/*

Create a program for checking whether a game was worth playing after completing it.

Have three variables: score, hoursPlayed and price. Give them some values.

A game is determined to be worth its price if:

- its score is at least 4 and it is free
- its score is 4 and its ratio of hours played to price is at least 4
- its score is 5 and its ratio of hours played to price is at least 2
Games with scores less than 4 are never considered worth their price.

Print whether the game was worth its price with your specific values. Alternate the values to verify that your program works properly.

EXTRA: If you didn't do it yet, do the task with only a single if clause and an else clause, without using else if or multiple if clauses.


*/

const score = 4,
  hoursPlayed = 40,
  price = 5.76;

if (
  (score > 4 && price === 0) ||
  (score === 4 && hoursPlayed / price >= 4) ||
  (score === 5 && hoursPlayed / price >= 2)
) {
  console.log("The game is considered worth playing.");
} else {
  console.log("The game is not considered worth playing.");
}
