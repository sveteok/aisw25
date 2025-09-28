/*

Objects
Exercise 4. Team Object
Create an object that represents a team. 
It should have two parameters: a name and a list of members (initially empty). 
It should also have two methods: enroll and info. 
The enroll method should take a name of a new team member as a parameter and add it to the list of members. 
The info should print the message "Team X has N members". Neither method should return anything.

Create an interface or type for the team object.

Exercise 5. Disqualification
Continue developing the Team object from the previous assignment. 
Add a method disqualify() that adds a new disqualified (boolean) property to the team and sets it to true.

Extra 1: Modify the info method so that the only information printed of a disqualified team is "Disqualified". 
Extra 2: Modify the enroll method so that a disqualified team can not get new members.
*/

interface TeamI {
	name: string;
	members: string[];
	disqualified?: boolean;
	enroll: (name: string) => boolean;
	info: () => void;
	disqualify: () => void;
}

const teamObject: TeamI = {
	name: 'Red',
	members: [],
	enroll(name: string): boolean {
		if (this.disqualified) {
			console.log(`Enrollment failed: Team ${this.name} is disqualified`);
			return false;
		}
		this.members.push(name);
		return true;
	},
	info(): void {
		if (this.disqualified) {
			console.log('Disqualified');
			return;
		}

		const memberNumber = this.members.length;
		if (memberNumber !== 0) {
			console.log(`Team ${this.name} has ${memberNumber} ${memberNumber === 1 ? 'member' : 'members'}`);
		}
	},
	disqualify(): void {
		this.disqualified = true;
	},
};

teamObject.info();

teamObject.enroll('Rubini');
teamObject.enroll('Anjalee');
teamObject.enroll('Svetlana');
teamObject.info(); //Team Red has 3 members

teamObject.disqualify();
teamObject.info();

teamObject.enroll('Ann');
teamObject.info();

/*
Team Red has 3 members
Team Red has 3 members
Disqualified
*/

class Team {
	private name: string;
	private members: string[];
	private disqualified: boolean = false;

	constructor(name: string) {
		this.name = name;
		this.members = [];
	}

	enroll(name: string): boolean {
		if (this.disqualified) {
			console.log(`Enrollment failed: Team ${this.name} is disqualified`);
			return false;
		}
		this.members.push(name);
		return true;
	}

	info(): void {
		if (this.disqualified) {
			console.log('Disqualified');
			return;
		}

		const memberNumber = this.members.length;
		if (memberNumber !== 0) {
			console.log(`Team ${this.name} has ${memberNumber} ${memberNumber === 1 ? 'member' : 'members'}`);
		}
	}

	disqualify(): void {
		this.disqualified = true;
	}
}

const team = new Team('Red');

team.info();

team.enroll('Rubini');
team.enroll('Anjalee');
team.enroll('Svetlana');
team.info(); //Team Red has 3 members

team.disqualify();
team.info();

team.enroll('Ann');
team.info();
