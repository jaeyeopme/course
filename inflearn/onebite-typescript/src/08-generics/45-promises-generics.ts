const promise = new Promise<number>((resolve, reject) => {
	setTimeout(() => {
		resolve(50); // 제네릭 타입으로 지정

		reject("error"); // any 타입으로 고정
	}, 3000);
});

promise.then((response) => {
	// response 는 제네릭 타입으로
	console.log(response * 2); // 100
});

promise.catch((error) => {
	// error 는 any 타입으로
	if (typeof error === "string") {
		console.error(error);
	}
});

interface Post {
	id: number;
	title: string;
	content: string;
}

// 함수 반환 타입으로 제네릭 타입을 지정
// 함수 시그니처만 확인하므로 가독서이 더 좋음
function fetchPost(): Promise<Post> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const post: Post = {
				id: 1,
				title: "제목",
				content: "내용",
			};
			resolve(post); // 제네릭 타입으로 지정
		}, 3000);
	});
}

const postRequest = fetchPost();

postRequest.then((post) => {
	console.log(post);
});
