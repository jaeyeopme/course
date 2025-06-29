import { Suspense } from "react";
import BookItem from "@/components/book-item";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import type { BookData } from "@/types";
import { delay } from "@/util/delay";
import style from "./page.module.css";

// 실습을 위해 AllBooks 의 데이터 페칭을 force-dynamic 으로 설정
export const dynamic = "force-dynamic";

async function RecommendedBooks() {
	await delay(3000);
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
	await delay(1500);
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

export default async function Page() {
	return (
		<div className={style.container}>
			<section>
				<h3>지금 추천하는 도서</h3>
				<Suspense fallback={<BookListSkeleton count={3} />}>
					<RecommendedBooks />
				</Suspense>
			</section>
			<section>
				<h3>등록된 모든 도서</h3>
				<Suspense fallback={<BookListSkeleton count={3} />}>
					<AllBooks />
				</Suspense>
			</section>
		</div>
	);
}
