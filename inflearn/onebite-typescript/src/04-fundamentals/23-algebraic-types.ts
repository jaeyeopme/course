function union() {
	type Dog = {
		name: string;
		color: string;
	};

	type Person = {
		name: string;
		language: string;
	};

	// Dog 이거나 Person 이어야 함
	// 둘 중 하나의 타입을 완전히 충족
	type Union = Dog | Person;

	// Dog 의 모든 속성 충족
	const union1: Union = {
		name: "",
		color: "",
	};

	// Person 의 모든 속성 충족
	const union2: Union = {
		name: "",
		language: "",
	};

	// Dog + Person 그리고 초과 프로퍼티 허용
	const union3: Union = {
		name: "",
		color: "",
		language: "",
	};

	// 에러 발생
	// Dog 도 아니고 Person 도 아님
	// name 만으로는 둘 중 어느 쪽도 될 수 없음
	const union4: Union = {
		name: "",
	};
}

function intersection() {
	type Dog = {
		name: string;
		color: string;
	};

	type Person = {
		name: string;
		language: string;
	};

	// Dog 그리고 Person 이어야 함
	// 모든 타입을 동시에 충족
	type Intersection = Dog & Person;

	const intersection1: Intersection = {
		name: "", //공통 속성
		color: "", // Dog 속성
		language: "", // Person 속성
	};

	// 에러 발생
	// Person 의 language 속성이 없음
	// Dog 속성만으로 부족
	const intersection2: Intersection = {
		name: "",
		color: "",
	};
}
