import type { Metadata } from "next";
import BookItem from "@/components/book-item";
import type { BookData } from "@/types";
import style from "./page.module.css";

async function RecommendedBooks() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
		{ next: { revalidate: 3 } },
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
		{ cache: "force-cache" },
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

export const metadata: Metadata = {
	title: "한입 북스",
	description: "한입 북스에 등록된 도서를 만나보세요",
	openGraph: {
		title: "한입 북스",
		description: "한입 북스에 등록된 도서를 만나보세요",
		images: ["/thumbnail.png"],
	},
};

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
