class List<T> {
	constructor(private items: T[] = []) {}

	push(item: T): void {
		this.items.push(item);
	}

	pop() {
		return this.items.pop();
	}

	print() {
		console.log(this.items);
	}
}

// 인터페이스 또는 타입과 달리 타입 추론 가능
const list = new List([1, 2, 3]);
list.push(5);
list.pop();
list.print(); // [1, 2, 3]
