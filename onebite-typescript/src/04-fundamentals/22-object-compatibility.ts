type Book = {
	name: string;
	price: number;
};

type ProgrammingBook = {
	name: string;
	price: number;
	skill: string;
};

let book: Book;
const programmingBook: ProgrammingBook = {
	name: "TypeScript",
	price: 30000,
	skill: "TypeScript",
};

book = programmingBook; // 업캐스팅 가능 ()
// programmingBook = book; // 다운캐스팅 불가

console.log(book); // { name: 'TypeScript', price: 30000, skill: 'TypeScript' }

// 초과 프로퍼티 검사
// 리터럴로 업캐스팅 불가능(변수 뿐만 아니라 함수 인자 등도 동일하게 적용)
book = {
	name: "TypeScript",
	price: 30000,
	// skill: "TypeScript",
};
