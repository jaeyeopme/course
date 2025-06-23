// unknown
const e: unknown = undefined; // 업캐스팅 가능
let unknownVar1: unknown;
// let num: number = unknownVar1 // 다운캐스팅 불가

// never
function neverFunc(): never {
	while (true) {}
}
const num: number = neverFunc(); // 업캐스팅 가능
// let never1: never = 1 // 다운캐스팅 불가

function voidFunc(): void {
	// biome-ignore lint/correctness/noVoidTypeReturn: <explanation>
	return undefined; // void 함수는 undefined를 반환
}
// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
const voidVar: void = undefined; // 업캐스팅 가능

// any
let unknownVar2: unknown;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let anyVar: any;
const neverVar = neverFunc();

anyVar = unknownVar2;
unknownVar2 = anyVar;
anyVar = neverVar;
// neverVar = anyVar
