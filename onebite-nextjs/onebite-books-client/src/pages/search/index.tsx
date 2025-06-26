import Head from "next/head";
import { useRouter } from "next/router";
import { type ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import type { BookData } from "@/types";

export default function Page() {
	const [books, setBooks] = useState<BookData[]>([]);
	const router = useRouter();
	const query = router.query.query;

	useEffect(() => {
		if (!query || typeof query !== "string") return;

		const handleSearch = async () => {
			const data = await fetchBooks(query);
			setBooks(data);
		};

		handleSearch();
	}, [query]);

	return (
		<div>
			<Head>
				<title>한입북스 - 검색결과</title>
				<meta property="og:title" content="한입북스 - 검색결과" />
				<meta
					property="og:description"
					content="한입북스는 다양한 도서를 추천하고, 당신이 원하는 책을 쉽게 찾을 수 있는 곳입니다."
				/>
			</Head>
			{books.map((book: BookData) => (
				<BookItem key={book.id} {...book} />
			))}
		</div>
	);
}

Page.getLayout = (page: ReactNode) => {
	return <SearchableLayout>{page}</SearchableLayout>;
};
