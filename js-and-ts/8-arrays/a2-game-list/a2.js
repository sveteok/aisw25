/*
We have the following list of games:

const games = [
  { id: 1586948654, date: "2022-10-27", score: 145, won: false },
  { id: 2356325431, date: "2022-10-30", score: 95, won: false },
  { id: 2968411644, date: "2022-10-31", score: 180, won: true },
  { id: 1131684981, date: "2022-11-01", score: 210, won: true },
  { id: 1958468135, date: "2022-11-01", score: 111, won: true },
  { id: 2221358512, date: "2022-11-02", score: 197, won: false },
  { id: 1847684969, date: "2022-11-03", score: 203, won: true },
];
a)
Find the game with id of 1958468135 and print it.

b)
Find the index of the first game that the player has won. Print the index.
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

for (const game of games) {
  if (game.id === 1958468135) {
    console.log(
      `Game #${game.id}\nCreated: ${game.date}\nScore: ${game.score}\nWon: ${game.won}`
    );
    break;
  }
}
console.log(games.find((g) => g.id === 1958468135));

for (const i in games) {
  if (games[i].won === true) {
    console.log(`${i} - the index of the first game that the player has won.`);
    break;
  }
}

console.log(games.findIndex((g) => g.won));
