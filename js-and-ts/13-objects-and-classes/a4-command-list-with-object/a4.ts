let x: number = 0;
let y: number = 0;

type Commands = Record<"N" | "E" | "S" | "W" | "C", () => void>;

const commandHandlers: Commands = {
  N: () => y++,
  E: () => x++,
  S: () => y--,
  W: () => x--,
  C: () => {},
};
type comandSymbol = keyof typeof commandHandlers;

const commandList: string = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

for (let i: number = 0; i < commandList.length; i++) {
  const curr: comandSymbol = commandList.charAt(i) as comandSymbol;

  if (!(curr in commandHandlers)) {
    break;
  }
  commandHandlers[curr]();
}

console.log(`Final position: (${x}, ${y})`);
// Final position: (8, 7)
