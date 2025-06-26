import type { InferGetStaticPropsType } from "next";
import type { ReactNode } from "react";
import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import type { BookData } from "@/types";
import style from "./index.module.css";

export const getStaticProps = async () => {
	const [books, recommendedBooks] = await Promise.all([
		fetchBooks(),
		fetchRandomBooks(),
	]);

	return {
		props: {
			books,
			recommendedBooks,
		},
	};
};

export default function Page({
	books,
	recommendedBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className={style.container}>
			<section>
				<h3>지금 추천하는 도서</h3>
				{recommendedBooks.map((book: BookData) => (
					<BookItem key={book.id} {...book} />
				))}
			</section>
			<section>
				<h3>등록된 모든 도서</h3>
				{books.map((book: BookData) => (
					<BookItem key={book.id} {...book} />
				))}
			</section>
		</div>
	);
}

Page.getLayout = (page: ReactNode) => {
	return <SearchableLayout>{page}</SearchableLayout>;
};
