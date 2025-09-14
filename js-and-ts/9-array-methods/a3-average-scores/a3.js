/*
Use the same game list as on assignment 2.

a) 
Find all games that the player has won and calculate the player's average score in them. Print the average score.

Think of fitting array methods that can help with the task.

b)
Find all games that the player has lost and calculate the player's average score in them. Print the average score.
*/

const games = [
  { id: 1586948654, date: "2022-10-27", score: 145, won: false },
  { id: 2356325431, date: "2022-10-30", score: 95, won: false },
  { id: 2968411644, date: "2022-10-31", score: 180, won: true },
  { id: 1131684981, date: "2022-11-01", score: 210, won: true },
  { id: 1958468135, date: "2022-11-01", score: 111, won: true },
  { id: 2221358512, date: "2022-11-02", score: 197, won: false },
  { id: 1847684969, date: "2022-11-03", score: 203, won: true },
];

//a) Find all games that the player has won and calculate the player's average score in them. Print the average score.
let wonGames = games.filter((game) => game.won);
let avgScore =
  wonGames.reduce((sum, game) => sum + game.score, 0) / wonGames.length;
console.log(`The average score ${avgScore}`);

//b) Find all games that the player has lost and calculate the player's average score in them. Print the average score.

let score = 0;
let lostGames = games.filter((game) => !game.won);
lostGames.forEach((g) => {
  score += g.score;
});
console.log(`The average score ${score / lostGames.length}`);
