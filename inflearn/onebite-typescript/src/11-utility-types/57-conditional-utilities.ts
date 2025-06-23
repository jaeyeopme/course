// Exclude<T, U>: T 의 프로퍼티 중 U 키를 제외
const str1: Exclude<string | boolean, boolean> = "Hello, World!"; // string

// never 는 유니온 타입에서 제외됨(공집합)
type CustomExclude<T, U> = T extends U ? never : T;

// CustomExclude<string, boolean> | // string
// CustomExclude<boolean, boolean> // never
const str2: CustomExclude<string | boolean, boolean> = "Hello, World!"; // string

// Extract<T, U>: T 의 프로퍼티 중 U 키만 선택
const str3: Extract<string | boolean, string> = "Hello, World!"; // string

type CustomExtract<T, U> = T extends U ? T : never;

// CustomExtract<string, string> | // string
// CustomExtract<boolean, string> // never
const str4: CustomExtract<string | boolean, string> = "Hello, World!"; // string

// RetuenType<T>: T 함수의 반환 타입을 추론
function funcA() {
	return "Hello, World!";
}

const func1: ReturnType<typeof funcA> = "Hello, World!"; // string

function funcB() {
	return 10;
}

type CustomReturnType<T extends (...args: any) => any> = T extends (
	...args: any
) => infer R
	? R
	: never;

const func2: CustomReturnType<typeof funcB> = 30; // number
