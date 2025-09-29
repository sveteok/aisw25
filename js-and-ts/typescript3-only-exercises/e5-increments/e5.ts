/*
Exercise 5. Increments
Create a function incrementScores that takes an array of mixed objects as its parameter. 
It then goes through each object in the array.

If the object is a Goals object it uses the goal method to increase the goal count. 
If the object is a Game object, it uses the win method to increase the points count.

If it is neither, it does nothing.

class Goals {
  player: string;
  goals: number;

  constructor(player: string) {
    this.player = player;
    this.goals = 0;
  }

  goal() {
    this.goals += 1;
  }
}
class Game {
  username: string;
  points: number;

  constructor(username: string) {
    this.username = username;
    this.points = 0;
  }

  win() {
    this.points += 1;
  }
}
  */

class Goals {
	player: string;
	goals: number;

	constructor(player: string) {
		this.player = player;
		this.goals = 0;
	}

	goal() {
		this.goals += 1;
	}
}

class Game {
	username: string;
	points: number;

	constructor(username: string) {
		this.username = username;
		this.points = 0;
	}

	win() {
		this.points += 1;
	}
}

class Team {
	private name: string;
	private members: string[];

	constructor(name: string) {
		this.name = name;
		this.members = [];
	}

	enroll(name: string): boolean {
		this.members.push(name);
		return true;
	}

	info(): void {
		const memberNumber = this.members.length;
		if (memberNumber !== 0) {
			console.log(`Team ${this.name} has ${memberNumber} ${memberNumber === 1 ? 'member' : 'members'}`);
		}
	}
}

const team = new Team('Red');
team.info();
team.enroll('Rubini');
team.enroll('Anjalee');
team.enroll('Svetlana');
team.info(); //Team Red has 3 members

type MixedObject = Goals | Game | null | Team;

const incrementScores = (objects: readonly MixedObject[]): void => {
	objects.forEach((obj) => {
		if (obj === null) {
			return;
		}
		if (obj instanceof Game) {
			obj.win();
		} else if (obj instanceof Goals) {
			obj.goal();
		}
	});
};

const rubiniGame = new Game('Rubini');
const anjaleeGame = new Game('Anjalee');
const svetaGame = new Game('Svetlana');

const rubiniGoals = new Goals('Rubini');
const anjaleeGoals = new Goals('Anjalee');
const svetaGoals = new Goals('Svetlana');

const mixedArr = [
	rubiniGame,
	null,
	rubiniGame,
	rubiniGoals,
	team,
	anjaleeGame,
	svetaGame,
	anjaleeGoals,
	svetaGame,
	svetaGoals,
];
incrementScores(mixedArr);

console.log(`Rubini's game points: ${rubiniGame.points}`);
console.log(`Anjalee's game points: ${anjaleeGame.points}`);
console.log(`Svetlana's game points: ${svetaGame.points}`);
console.log(`Rubini's goals: ${rubiniGoals.goals}`);
console.log(`Anjalee's goals: ${anjaleeGoals.goals}`);
console.log(`Svetlana's goals: ${svetaGoals.goals}`);

/*
Team Red has 3 members
Rubini's game points: 2
Anjalee's game points: 1
Svetlana's game points: 2
Rubini's goals: 1
Anjalee's goals: 1
Svetlana's goals: 1
*/
