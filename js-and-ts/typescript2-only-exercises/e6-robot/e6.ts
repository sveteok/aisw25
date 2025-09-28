/*
Create a class Robot, that models a robot that can move around in a square room, and possibly crash to a wall.

The Robot class should have four properties: x and y, that tell the current coordinates of the robot, gridLimit 
that tells how far from the center the room walls are, and crashed that tells if the robot has crashed or not.

The Robot constructor should accept one parameter: gridSize. It should use this parameter to initialize gridLimit, 
set x- and y-coordinates to zero, and crashed to false.

The Robot class should have four methods for moving: moveNorth, moveEast, moveSouth, and moveWest. 
These methods should not take any parameters.

When a movement method is executed, it should check if the robot has crashed. 
If it has, it should just log a message saying that a crashed robot can not move. 
Else it should move the robot one step to the indicated direction. 
If the robot moves beyond the gridLimit, 
the method should log a message saying that the robot has crashed, and 
set the crashed value to true.
*/

const ROBOT_INITIALIZED = `Robot is located in a square room with boundaries:
X:(-{GRID_LIMIT}, {GRID_LIMIT})
Y:(-{GRID_LIMIT}, {GRID_LIMIT})`;

const CURRENT_POSITION = `Current position: [{X}, {Y}]`;
const CANNOT_MOVED = `CRASH.... Crashed robot cannot move.`;
const HIT_WALL = `Robot hit the wall!`;
const MOVED = `The robot moved.`;

class Robot {
	private x: number;
	private y: number;
	private gridLimit: number;
	private crashed: boolean;

	constructor(gridSize: number) {
		this.x = 0;
		this.y = 0;
		this.gridLimit = gridSize;
		this.crashed = false;
		console.log(ROBOT_INITIALIZED.replaceAll('{GRID_LIMIT}', `${this.gridLimit}`));
		console.log(CURRENT_POSITION.replace(`{X}`, `${this.x}`).replace(`{Y}`, `${this.y}`));
	}

	printCurrentPosition(text?: string): void {
		const currentPosition: string = CURRENT_POSITION.replace(`{X}`, `${this.x}`).replace(`{Y}`, `${this.y}`);

		console.log(`${text ? text + ' ' : ''}${currentPosition}`);
	}

	moveNorth(): void {
		if (!this.isCrashed()) {
			this.y += 1;
			this.checkAndUpdateCrashState();
		}
	}

	moveEast(): void {
		if (!this.isCrashed()) {
			this.x += 1;
			this.checkAndUpdateCrashState();
		}
	}

	moveSouth(): void {
		if (!this.isCrashed()) {
			this.y -= 1;
			this.checkAndUpdateCrashState();
		}
	}

	moveWest(): void {
		if (!this.isCrashed()) {
			this.x -= 1;
			this.checkAndUpdateCrashState();
		}
	}

	private isCrashed(): boolean {
		if (this.crashed) {
			this.printCurrentPosition(CANNOT_MOVED);
			return true;
		}
		return false;
	}

	private checkAndUpdateCrashState(): void {
		const xCrashed = this.x >= this.gridLimit || this.x <= -this.gridLimit;
		const yCrashed = this.y >= this.gridLimit || this.y <= -this.gridLimit;
		if (xCrashed || yCrashed) {
			this.crashed = true;
			this.printCurrentPosition(HIT_WALL);
		} else {
			this.printCurrentPosition(MOVED);
		}
	}
}

const robot = new Robot(5);
robot.moveNorth();
robot.moveNorth();
robot.moveNorth();
robot.moveNorth();
robot.moveNorth();
robot.moveNorth();
robot.moveEast();
robot.moveSouth();
