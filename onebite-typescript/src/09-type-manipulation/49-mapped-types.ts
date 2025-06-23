interface User {
	id: number;
	name: string;
	age: number;
}

// mapped type 은 타입 별칭의 각 프로퍼티를 순회하며 새로운 타입을 정의함
// 타입 지정 부분은 indexed access 와 동일한 문법
type PartialUser = {
	// 각 프로퍼티를 순회
	[key in "id" | "name" | "age"]?: User[key];
	// id?: User["id"] => id: number;
	// name?: User["name"] => name: string;
	// age?: User["age"] => age: number;
};

type BooleanUser = {
	[k in keyof User]: boolean;
	// id: boolean;
	// name: boolean;
	// age: boolean;
};

type ReadonlyUser = {
	readonly [key in keyof User]: User[key];
	// readonly id: number;
	// readonly name: string;
	// readonly age: number;
};
