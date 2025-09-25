export type Symbols = "N" | "E" | "S" | "W" | "C";
export type Commands = Record<Symbols, () => void>;

class Robot {
  constructor(public x: number, public y: number) {}

  readonly commandHandlers: Commands = {
    N: () => this.y++,
    E: () => this.x++,
    S: () => this.y--,
    W: () => this.x--,
    C: () => {},
  };

  handleCommandList(commandList: string): void {
    for (const c of commandList) {
      const curr: Symbols | "B" = c as Symbols | "B";

      if (curr === "B") {
        break;
      }

      if (curr in this.commandHandlers) {
        this.commandHandlers[curr]();
      }
    }
  }

  getPosition(): [number, number] {
    return [this.x, this.y];
  }
}

const commandList: string = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

const robot = new Robot(0, 0);
robot.handleCommandList(commandList);
console.log(`Final position: (${robot.getPosition().join(", ")})`);
//Final position: (8, 7)
