// 인터페이스 확장과 재정의
interface Person {
	name: string;
}

interface Person {
	// name: "person" // ❌ 원본 타입의 서브 타입으로 재정의 불가
	name: string; // ✅ 원본 타입과 동일한 타입으로 재정의 가능
	age: number; // ✅ 원본 타입에 없는 프로퍼티 추가
}

interface Developer extends Person {
	name: "developer"; // ✅ 원본 타입의 서브 타입으로 재정의 가능
}

const person: Person = {
	name: "",
	age: 30,
};
