// 객체 타입
interface Post {
	id: number;
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
	};
}

// 원본 프로퍼티가 변경되어도 추적하지 않아도 됨
// 프로퍼티를 Interface OR Type[string literal] 를 통해 접근(중첩 가능)
function printPostAuthor(authorName: Post["author"]["name"]) {
	console.log(`${authorName}`);
}

const post: Post = {
	id: 1,
	title: "This is title",
	content: "This is content",
	author: {
		id: 1,
		name: "jaeyeopme",
	},
};

printPostAuthor(post.author.name);

// 배열 타입
type CommentList = {
	id: number;
	content: string;
}[];

// 배열 타입의 경우, 인덱스 접근을 통해 타입을 추출할 수 있음(number literal 가능)
const comment: CommentList[number] = {
	id: 1,
	content: "This is comment",
};

function printCommentContent(commentContent: CommentList[number]["content"]) {
	console.log(`${commentContent}`);
}

printCommentContent(comment.content);

// 튜플 타입
// 배열과 동일하게 인덱스 접근을 통해 타입을 추출할 수 있음
type Tuple = [number, string, boolean];
type Tup0 = Tuple[number]; // number | string | boolean
type Tup1 = Tuple[0]; // number
type Tup2 = Tuple[1]; // string
type Tup3 = Tuple[2]; // boolean
// type Tup4 = Tuple[3]; // ❌ 불가능
