import { v4 as uuidv4 } from 'uuid';

export interface StudentInfo {
	id: string;
	name: string;
	email: string;
}

class Student {
	private id: string;
	private name: string;
	private email: string;

	constructor(name: string, email: string) {
		this.name = name;
		this.email = email;
		this.id = uuidv4();
	}

	getId = (): string => {
		return this.id;
	};

	getInfo = (): StudentInfo => {
		return { id: this.id, name: this.name, email: this.email };
	};
}

class Students {
	private students: Student[];

	constructor() {
		this.students = [];
	}

	add = (name: string, email: string): void => {
		this.students.push(new Student(name, email));
	};

	getStudentIds = (): string[] => {
		return this.students.map((s) => s.getId());
	};

	findStudentById = (id: string): StudentInfo | undefined => {
		const student = this.students.find((s) => s.getId() === id);
		return student?.getInfo();
	};
}

const students = new Students();
export default students;
