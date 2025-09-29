// Fixed version with class

type TodoItem = { text: string; done: boolean };
type AppMode = 'listMode';

interface AppState {
	todoItems: TodoItem[];
	mode: AppMode;
}

class TodoApp {
	state: AppState = {
		todoItems: [
			{ text: 'Buy milk', done: false },
			{ text: 'Feed cat', done: true },
		],
		mode: 'listMode',
	};

	constructor() {
		this.printList();
		this.add('test');
		this.printStatus();
	}

	add(text: string): boolean {
		if (!text.trim()) {
			console.log('Error: empty value entered');
			return false;
		}
		// this.state.todoItems.push({ text, done: false });
		this.state = {
			...this.state,
			todoItems: [...this.state.todoItems, { text, done: false }],
		};
		this.printList();
		return true;
	}

	toggle(index: number): boolean {
		if (index < 0 || !this.state.todoItems[index]) {
			console.error('Invalid index!');
			return false;
		}
		// this.state.todoItems[index].done = !this.state.todoItems[index].done;
		this.state = {
			...this.state,
			todoItems: this.state.todoItems.map((item, i) => (i === index ? { ...item, done: !item.done } : item)),
		};
		this.printList();
		return true;
	}

	reset() {
		this.state = { todoItems: [], mode: 'listMode' };
	}

	printList() {
		console.log('Total todos:', this.state.todoItems.length);
		this.state.todoItems.forEach((item, i) => {
			console.log(`${i + 1}: ${item.text}`);
		});
	}

	printStatus() {
		this.state.todoItems.forEach((n) => {
			const status = n.done ? 'is done' : 'is not done';
			console.log(`${n.text} ${status}`);
		});
	}
}

const app = new TodoApp();
app.printList();

exports = {
	app,
};
