interface KeyPair<K, V> {
	key: K;
	value: V;
}

// 반드시 타입을 명시적으로 지정(추론 불가)
const keyPair: KeyPair<string, string> = {
	key: "key",
	value: "value",
};

// index signature 응용
interface Map<V> {
	[key: string]: V;
}

// 반드시 타입을 명시적으로 지정(추론 불가)
const numberMap: Map<number> = {
	key: 1,
	anotherKey: 2,
};

type Map2<V> = {
	[key: string]: V;
};

// interface 와 동일하게 사용
// 반드시 타입을 명시적으로 지정(추론 불가)
const stringMap: Map2<string> = {
	key: "value",
	anotherKey: "anotherValue",
};
