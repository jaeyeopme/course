import BookItem from "@/components/book-item";
import type { BookData } from "@/types";
import style from "./page.module.css";

async function RecommendedBooks() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
	);

	if (!response.ok) {
		return <div>에러가 발생했습니다</div>;
	}

	const books: BookData[] = await response.json();

	return (
		<>
			{books.map((book) => (
				<BookItem key={book.id} {...book} />
			))}
		</>
	);
}

async function AllBooks() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
	);

	if (!response.ok) {
		return <div>에러가 발생했습니다</div>;
	}

	const books: BookData[] = await response.json();

	return (
		<>
			{books.map((book) => (
				<BookItem key={book.id} {...book} />
			))}
		</>
	);
}

export default async function Page() {
	return (
		<div className={style.container}>
			<section>
				<h3>지금 추천하는 도서</h3>
				<RecommendedBooks />
			</section>
			<section>
				<h3>등록된 모든 도서</h3>
				<AllBooks />
			</section>
		</div>
	);
}
