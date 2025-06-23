// tuple 과 rest parameter 를 이용해서 첫 번째 인자의 타입을 추론
function returnFirst<T>(data: [T, ...unknown[]]) {
	return data[0];
}

const num: number = returnFirst([1, "2", 3]);

// 특정 프로퍼티를 가진 타입만을 허용하는 제네릭 함수
function getLength<T extends { length: number }>(data: T) {
	return data.length;
}

const strLength: number = getLength("hello"); // ✅ length 프로퍼티를 가짐
const arrLength: number = getLength([1, 2, 3]); // ✅ length 프로퍼티를 가짐
// const numberLength: number = getLength(999); // ❌ length 프로퍼티를 가지지 않음
