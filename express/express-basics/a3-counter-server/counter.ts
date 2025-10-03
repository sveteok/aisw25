class Counter {
	private counter: number;
	private fibIndex: number;

	constructor() {
		this.counter = 0;
		this.fibIndex = 0;
	}

	getCounter = (): number => {
		return ++this.counter;
	};

	static fibonacci = (num: number): number => {
		if (num === 0) {
			return 0;
		}
		if (num === 1) {
			return 1;
		}
		let n1 = 0,
			n2 = 1,
			temp;
		for (let i = 2; i <= num; i++) {
			temp = n1 + n2;
			n1 = n2;
			n2 = temp;
		}
		return n2;
	};

	getNextFibonacciNumber = (): number => {
		return Counter.fibonacci(this.fibIndex++);
	};
}

const counter = new Counter();
export default counter;
