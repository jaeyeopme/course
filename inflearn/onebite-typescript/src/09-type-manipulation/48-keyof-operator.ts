interface Person {
	name: string;
	age: number;
}

const person: Person = {
	name: "jaeyeopme",
	age: 30,
};

// typeof: 타입 별칭에 사용하면 인스턴스의 타입을 추출할 수 있음
type Person2 = typeof person;

// keyof: 인터페이스 또는 타입 별칭의 프로퍼티 키를 유니온 타입으로 추출할 수 있음
// 원본 프로퍼티가 변경되어도 추적하지 않아도 됨
function getPropertyKey(person: Person2, key: keyof Person2) {
	return person[key];
}

// keyof 와 typeof 를 같이 사용하면 변수의 프로퍼티 키를 유니온 타입으로 추출할 수 있음
function getPropertyKey2(data: typeof person, key: keyof typeof person) {
	return data[key];
}
