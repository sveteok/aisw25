/*
Slightly mimicking the previous example:

Create a Robot class with x and y coordinates and a handleMessage function 
that can be used to tell the robot to move horizontally or vertically.

Create a FlexibleRobot class that extends the Robot class. 
Override the handleMessage function so 
that it is able to move the robot diagonally (for example, "moveNE" to move northeast).

If the message given to FlexibleRobot's handleMessage isn't recognized by FlexibleRobot, 
call the handleMessage function of the base Robot class to also allow direct movement along the x and y axes.

Create a new FlexibleRobot object at 0, 0 (x = 0, y = 0) and 
call its handleMessage function with a fitting parameter 4 times to instruct it to move to 4, 2 (x = 4, y = 2).
*/

class Robot {
  constructor(public x: number, public y: number) {}

  handleMessage(message: string): void {
    if (message === "moveN") {
      this.y++;
    } else if (message === "moveS") {
      this.y--;
    } else if (message === "moveE") {
      this.x++;
    } else if (message === "moveW") {
      this.x--;
    }
  }
}

class FlexibleRobot extends Robot {
  override handleMessage(message: string): void {
    if (message === "moveNE") {
      this.x++;
      this.y++;
    } else if (message === "moveNW") {
      this.x--;
      this.y++;
    } else if (message === "moveSE") {
      this.x++;
      this.y--;
    } else if (message === "moveSW") {
      this.x--;
      this.y--;
    } else {
      super.handleMessage(message);
    }
  }
}

const moves = ["moveNE", "moveNE", "moveE", "moveE"];
const robot: FlexibleRobot = new FlexibleRobot(0, 0);
for (const move of moves) {
  robot.handleMessage(move);
}
console.log(`End position: (${robot.x}, ${robot.y})`);
//End posotion: (4, 2)

class RobotV2 {
  constructor(public x: number, public y: number) {}

  handleMessage(message: string): void {
    const moves: { [key: string]: [number, number] } = {
      moveN: [0, 1],
      moveS: [0, -1],
      moveE: [1, 0],
      moveW: [-1, 0],
    };

    const move = moves[message];
    if (move !== undefined) {
      this.x += move[0];
      this.y += move[1];
    }
  }
}

class FlexibleRobotV2 extends RobotV2 {
  override handleMessage(message: string): void {
    const moves: { [key: string]: [number, number] } = {
      moveNE: [1, 1],
      moveNW: [-1, 1],
      moveSE: [1, -1],
      moveSW: [-1, -1],
    };

    const move = moves[message];
    if (move !== undefined) {
      this.x += move[0];
      this.y += move[1];
    } else {
      super.handleMessage(message);
    }
  }
}

const robotV2: FlexibleRobotV2 = new FlexibleRobotV2(0, 0);
for (const move of moves) {
  robotV2.handleMessage(move);
}
console.log(`End position: (${robotV2.x}, ${robotV2.y})`);
//End posotion: (4, 2)
