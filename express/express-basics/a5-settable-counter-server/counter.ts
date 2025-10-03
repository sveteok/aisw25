class Counter {
	private counter: Record<string, number>;
	constructor() {
		this.counter = {};
	}

	incrementCounter = (name: string): number => {
		const normalize = name.trim();
		const currUserCount = this.counter[normalize] ?? 0;
		this.counter[normalize] = currUserCount + 1;
		return this.counter[normalize];
	};

	resetCounter = (name: string, counter: number): number => {
		const normalize = name.trim();
		this.counter[normalize] = counter ?? 0;
		return this.counter[normalize];
	};
}

const counter = new Counter();
export default counter;
