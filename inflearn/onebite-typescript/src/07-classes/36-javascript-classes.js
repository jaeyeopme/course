class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	walk() {
		console.log("walk");
	}
}

// 클래스
const person1: Person = new Person("name", 30);

// 타입(구조적 타입 시스템으로 인해 클래스와 동일하게 취급)
const person2: Person = {
	name: "name",
	age: 30,
	walk() {
		console.log("walk");
	},
};
