/*
Objects
Exercise 4. Team Object
Create an object that represents a team. 
It should have two parameters: a name and a list of members (initially empty). 
It should also have two methods: enroll and info. 
The enroll method should take a name of a new team member as a parameter and add it to the list of members. 
The info should print the message "Team X has N members". Neither method should return anything.

Create an interface or type for the team object.
*/

interface TeamI {
	name: string;
	members: string[];
	enroll: (name: string) => boolean;
	info: () => void;
}

const teamObject: TeamI = {
	name: 'Red',
	members: [],
	enroll(name: string): boolean {
		this.members.push(name);
		return true;
	},
	info(): void {
		const memberNumber = this.members.length;
		if (memberNumber !== 0) {
			console.log(`Team ${this.name} has ${memberNumber} ${memberNumber === 1 ? 'member' : 'members'}`);
		}
	},
};

teamObject.info();
teamObject.enroll('Rubini');
teamObject.enroll('Anjalee');
teamObject.enroll('Svetlana');
teamObject.info(); //Team Red has 3 members

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
