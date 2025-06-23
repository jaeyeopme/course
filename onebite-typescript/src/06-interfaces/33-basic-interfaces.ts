interface Person {
	readonly name?: string;
	age?: number;

	// 함수 타입 표현식
	sayHi?: () => void;
	// sayHi: (a: number) => void; // ❌ 메서드 오버로딩 불가

	// 호출 시그니쳐
	sayBye?(): void;
	sayBye?(a: number): void; // ✅ 메서드 오버로딩 가능

	// 하이브리드 타입 가능
	// 하이브리드 타입은 함수가 기본이고 거기에 프로퍼티가 추가되는 형태
	(a: number): void;
}
// } | number // ❌ Union 또는 Intersection 타입 정의 불가

type Person1 = Person | string; // ✅ 타입 별칭과 함께 사용 가능

// 객체 리터럴로 직접 초기화 불가능
// const person: Person | string = { // ✅ 타입 주석에 직접 사용 가능
// 	name: "name",
// 	age: 30
// }

const func: Person = (a) => console.log(a);
func.age = 30;
func(func.age);
