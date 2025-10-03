import { v4 as uuidv4 } from 'uuid';
import { isValidString } from './utils.js';

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

	update = (name: string, email: string): StudentInfo => {
		this.name = name;
		this.email = email;
		return this.getInfo();
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

	updateStudent = (id: string, name: string, email: string): boolean => {
		const student = this.students.find((s) => s.getId() === id);
		if (!student) {
			throw new Error('Student not found');
		}
		if (!isValidString(name)) {
			throw new Error('Invalid name');
		}
		if (!isValidString(email)) {
			throw new Error('Invalid email');
		}
		student.update(name, email);
		return true;
	};

	deleteStudent = (id: string): boolean => {
		const student = this.students.find((s) => s.getId() === id);
		if (!student) {
			throw new Error('Student not found');
		}
		this.students.filter((s) => s.getId() !== id);
		return true;
	};
}

const students = new Students();
export default students;
