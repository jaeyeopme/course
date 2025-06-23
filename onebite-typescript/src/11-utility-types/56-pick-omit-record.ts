interface Post {
	title: string;
	tags: string[];
	content?: string;
	thumbnail?: string;
}

// Pick<T, K>: T 의 프로퍼티 중 K 키만 선택
const draft1: Pick<Post, "title" | "thumbnail"> = {
	title: "This is title",
	thumbnail: "thumbnail.jpg",
};

// K extends "title" | "tags" | "content" | "thumbnail"
type CustomPick<T, K extends keyof T> = {
	[key in K]: T[key];
};

const draft2: CustomPick<Post, "title" | "thumbnail"> = {
	title: "This is title",
	thumbnail: "thumbnail.jpg",
};

// Omit<T, K>: T 의 프로퍼티 중 K 키를 제외
const draft3: Omit<Post, "content" | "thumbnail"> = {
	title: "This is title",
	tags: ["tag1", "tag2"],
};

// Exclude<keyof T, K>: T 의 프로퍼티 키 중 K 키를 제외
// Pick<T, K>: T 의 프로퍼티 중 K 키만 선택
type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const draft4: CustomOmit<Post, "content" | "thumbnail"> = {
	title: "This is title",
	tags: ["tag1", "tag2"],
};

// Record<K, V>: K 키를 V 타입의 값을 가지는 객체 타입
const thumbnail1: Record<"large" | "medium" | "small", { url: string }> = {
	large: { url: "https://example.com/large.jpg" },
	medium: { url: "https://example.com/medium.jpg" },
	small: { url: "https://example.com/small.jpg" },
};

// K 는 keyof any 로 유니온 타입이거나 문자열 리터럴 타입이어야 함
type CustomRecord<K extends keyof any, V> = {
	[key in K]: V;
};

const thumbnail2: CustomRecord<"large" | "medium" | "small", { url: string }> =
	{
		large: { url: "https://example.com/large.jpg" },
		medium: { url: "https://example.com/medium.jpg" },
		small: { url: "https://example.com/small.jpg" },
	};
