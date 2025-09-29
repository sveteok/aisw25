// Node.js messy code exercise

type TodoItem = { text: string; done: boolean };
type AppMode = 'listMode';

interface AppState {
	todoItems: TodoItem[];
	mode: AppMode;
}

function createTodoApp(): {
	add: (text: string) => boolean;
	toggle: (index: number) => boolean;
	reset: () => void;
	printList: () => void;
	printStatus: () => void;
} {
	let state: AppState = {
		todoItems: [
			{ text: 'Buy milk', done: false },
			{ text: 'Feed cat', done: true },
		],
		mode: 'listMode',
	};

	return {
		add(text: string): boolean {
			if (!text.trim()) {
				console.log('Error: empty value entered');
				return false;
			}
			state.todoItems.push({ text, done: false });
			this.printList();
			return true;
		},
		toggle(index: number): boolean {
			if (index < 0 || !state.todoItems[index]) {
				console.error('Invalid index!');
				return false;
			}
			state.todoItems[index].done = !state.todoItems[index].done;
			this.printList();
			return true;
		},
		reset() {
			state = { todoItems: [], mode: 'listMode' };
		},
		printList() {
			console.log('Total todos:', state.todoItems.length);
			state.todoItems.forEach((item, i) => {
				console.log(`${i + 1}: ${item.text}`);
			});
		},
		printStatus() {
			state.todoItems.forEach((n) => {
				const status = n.done ? 'is done' : 'is not done';
				console.log(`${n.text} ${status}`);
			});
		},
	};
}

const app = createTodoApp();
app.printList();
app.add('test');
app.printStatus();
