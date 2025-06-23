type FuncA = () => string;

type FuncB = () => number;

// infer 키워드와 조건부 타입으로 함수의 반환 타입을 추론할 수 있음
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // number
type C = ReturnType<number>; // never 추론 불가

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<string>>; // string
