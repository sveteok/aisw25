// Fixed version without class

type TodoItem = { text: string; done: boolean };
type AppMode = 'listMode';

interface AppState {
	todoItems: TodoItem[];
	mode: AppMode;
}

const appState: AppState = {
	todoItems: [
		{ text: 'Buy milk', done: false },
		{ text: 'Feed cat', done: true },
	],
	mode: 'listMode',
};

function addNewTodoItemToList(itemText: string): boolean {
	if (itemText === '') {
		console.log('Error: empty value entered');
		return false;
	}
	appState.todoItems.push({ text: itemText, done: false });

	printTodoList();
	return true;
}

function printTodoList(): void {
	const todoArr: TodoItem[] = appState.todoItems;
	console.log('Total todos:', todoArr.length);

	for (let i = 0; i < todoArr.length; i++) {
		const item = todoArr[i] as TodoItem;
		console.log(`${i + 1}: ${item.text}`);
	}
}

function toggleTodoDoneStatus(index: number): boolean {
	if (index < 0 || appState.todoItems[index] === undefined) {
		console.error('Invalid index!');
		return false;
	}
	appState.todoItems[index].done = !appState.todoItems[index].done;
	printTodoList();
	return true;
}

function printAllTodoDoneStatus() {
	appState.todoItems.forEach((n) => {
		const todoStatusTxt = n.done ? 'is done' : 'is not done';
		console.log(`${n.text} ${todoStatusTxt}`);
	});
}

function reset() {
	appState.todoItems = [];
	appState.mode = 'listMode';
}

// Init call
printTodoList();
addNewTodoItemToList('test');
printAllTodoDoneStatus();

exports = {
	add: addNewTodoItemToList,
	toggle: toggleTodoDoneStatus,
	reset: reset,
	state: appState,
};
