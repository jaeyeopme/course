interface Post {
	title: string;
	tags: string[];
	content?: string;
	thumbnail?: string;
}

// Partial<T>
const draft1: Partial<Post> = {
	content: "This is content",
};

type CustomPartial<T> = {
	[key in keyof T]?: T[key];
};

const draft2: CustomPartial<Post> = {
	content: "This is content",
};

// Required<T>
const draft3: Required<Post> = {
	title: "This is title",
	tags: ["tag1", "tag2"],
	content: "This is content",
	thumbnail: "thumbnail.jpg",
};

// -? 연산자로 프로퍼티를 필수로 변경
type CustomRequired<T> = {
	[key in keyof T]-?: T[key];
};

const draft4: CustomRequired<Post> = {
	title: "This is title",
	tags: ["tag1", "tag2"],
	content: "This is content",
	thumbnail: "thumbnail.jpg",
};

// Readonly<T>
const draft5: Readonly<Post> = {
	title: "This is title",
	tags: ["tag1", "tag2"],
	content: "This is content",
	thumbnail: "thumbnail.jpg",
};

// draft5.title = "New Title"; // 수정 불가

type CustomReadonly<T> = {
	readonly [key in keyof T]: T[key];
};

const draft6: CustomReadonly<Post> = {
	title: "This is title",
	tags: ["tag1", "tag2"],
	content: "This is content",
	thumbnail: "thumbnail.jpg",
};

// draft6.title = "New Title"; // 수정 불가
