// ✅ 타입 별칭으로도 확장 가능(객체 타입이면 가능)
// type Animal {
// 	name: string;
// 	color?: string;
// }

interface Animal {
	name: string;
	color?: string;
}

interface Dog extends Animal {
	name: "dog" | string; // ✅ 원본 타입의 서브 타입으로만 재정의 가능
	// name?: string; // ❌ 필수 -> 선택적 재정의 불가(LSP 위반)
	color: string; // ✅ 선택적 -> 필수는 재정의 가능
	isBark: boolean;
}

interface Cat extends Animal {
	name: "cat" | string;
	color: string;
	isScratch: boolean;
}

interface DogCat extends Dog, Cat {} // ✅ 다중 상속 가능

const dogcat: DogCat = {
	name: "dogCat",
	color: "brown",
	isBark: true,
	isScratch: true,
};
